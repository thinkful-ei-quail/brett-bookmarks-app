import $ from "jquery";
import api from "./api.js";
import "./styles.css";
import display from "./display.js";
import localStore from "./localStore.js";

const main = () => {
  display.render(true);
  eventListeners();
};

const eventListeners = () => {
  handleFilterByRating();
  handleItemClick();
  handleNewButtonClick();
  handleAddCancelButtonClick();
  handleAddCreateButtonClick();
};

const handleFilterByRating = () => {
  $("body").on("click", ".head", (event) => {
    event.preventDefault();
    localStore.filterRating = parseInt($(event.target).val());
    display.render();
  });
};

const handleAddCancelButtonClick = () => {
  $("body").on("click", "#addCancel", (event) => {
    event.preventDefault();
    localStore.adding = false;
    display.render(true);
  });
};

const handleAddCreateButtonClick = () => {
  $("body").on("click", "#addCreate", (event) => {
    event.preventDefault();
    const title = $("#addTitle").val();
    const rating = 3; // TODO newStarRating === 0 ? 1 : newStarRating;
    const url = $("#addURL").val();
    const desc = $("#addDescription").val();
    let newBookmark = localStore.packObj(title, rating, url, desc);
    api.createBookmark(newBookmark);
    localStore.adding = false;
  });
};

const handleNewButtonClick = () => {
  $("body").on("click", "#newBookmark", (event) => {
    event.preventDefault();
    localStore.adding = true;
    display.render();
  });
};

const handleItemClick = () => {
  $("body").on("click", ".item", (event) => {
    event.preventDefault();
    const id = localStore.getItemIdFromElement(event.currentTarget);
    //    console.log(id); //////////////////////////////////
    const currentBook = localStore.findById(id);
    //    console.log(currentBook); /////////////////////////////////
    localStore.toggleExpanded(currentBook);
    display.render();
  });
};

$(main);
