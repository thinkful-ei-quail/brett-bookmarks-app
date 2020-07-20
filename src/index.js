import $ from "jquery";
import api from "./api.js";
import "./styles.css";
import display from "./display.js";
import localStore from "./localStore.js";

const main = () => {
  api.getAllItems().then((res) => {
    display.render();
  });
  eventListeners();
};

const eventListeners = () => {
  handleFilterByRating();
  handleItemClick();
  handleNewButtonClick();
  handleAddDoneButtonClick();
  handleAddCreateButtonClick();
  handleTrashButtonClick();
  handleExpandedItemClick();
};

const handleFilterByRating = () => {
  $("body").on("click", ".head", (event) => {
    event.preventDefault();
    localStore.filterRating = parseInt($(event.target).val());
    display.render();
  });
};

const handleAddDoneButtonClick = () => {
  $("body").on("click", "#addCancel", (event) => {
    event.preventDefault();
    localStore.adding = false;
    display.render();
  });
};

const handleAddCreateButtonClick = () => {
  $("body").on("click", "#addCreate", (event) => {
    event.preventDefault();

    const title = $("#addTitle").val();
    const rating = 4; // TODO newStarRating === 0 ? 1 : newStarRating;
    const url = $("#addURL").val();
    const desc = $("#addDescription").val();
    const newBookmark = localStore.packObj(title, rating, url, desc);

    api.createBookmark(newBookmark).then((res) => {
      console.log("from add button", localStore.bookmarks);
      localStore.adding = false;
      display.render();
    });
  });
};

const handleNewButtonClick = () => {
  $("body").on("click", "#newBookmark", (event) => {
    event.preventDefault();
    localStore.adding = true;
    display.render();
  });
};

const handleTrashButtonClick = () => {
  $("body").on("click", ".fa-trash", (event) => {
    event.preventDefault();
    const id = localStore.getItemIdFromElement(event.currentTarget);
    api.deleteBookmark(id).then((res) => {
      console.log("delete returned?");
      display.render();
    });
  });
};

const handleItemClick = () => {
  $("body").on("click", ".short", (event) => {
    event.preventDefault();
    const id = localStore.getItemIdFromElement(event.currentTarget);
    const currentBook = localStore.findById(id);
    console.log(currentBook);
    localStore.toggleExpanded(currentBook);
    display.render();
  });
};

const handleExpandedItemClick = () => {
  $("body").on("click", ".expandedHeader", (event) => {
    event.preventDefault();
    const id = localStore.getItemIdFromElement(event.currentTarget);
    const currentBook = localStore.findById(id);
    localStore.toggleExpanded(currentBook);
    display.render();
  });
};

$(main);
