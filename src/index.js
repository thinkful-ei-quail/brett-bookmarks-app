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
  $("body").on("change", "#filter", (e) => handleFilterByRating(e));
  $("body").on("change", "#setRating", (e) => handleSetRating(e));
  $("body").on("click", ".shortBookmarkBtn", (e) => handleItemClick(e));
  $("body").on("click", "#newBookmark", (e) => handleNewButtonClick(e));
  $("body").on("click", "#addCancel", (e) => handleAddCancelButtonClick(e));
  $("body").on("click", "#addCreate", (e) => handleAddCreateButtonClick(e));
  $("body").on("click", ".trashCan", (e) => handleDeleteButtonClick(e));
  $("body").on("click", ".expBookmarkBtn", (e) => handleExpItemClick(e));
  // $("body").on("click", ".visitSite", (e) => handleVisitSiteClick(e));
};

const handleAddCancelButtonClick = (e) => {
  e.preventDefault();
  localStore.adding = false;
  display.render();
};

const handleSetRating = (e) => {
  e.preventDefault();
}; // TODO

const handleVisitSiteClick = (e) => {
  e.preventDefault();
}; // TODO

const handleAddCreateButtonClick = (e) => {
  e.preventDefault();

  const title = $("#addTitle").val();
  const rating = $("#setRating").val();
  const url = $("#addURL").val();
  const desc = $("#addDescription").val();
  const newBookmark = localStore.packObj(title, rating, url, desc);

  api.createBookmark(newBookmark).then((res) => {
    console.log("from add button", localStore.bookmarks);
    localStore.adding = false;
    display.render();
  });
};

const handleNewButtonClick = (e) => {
  e.preventDefault();
  localStore.adding = true;
  display.render();
};

const handleDeleteButtonClick = (e) => {
  e.preventDefault();
  const id = localStore.getItemIdFromElement(e.currentTarget);
  api.deleteBookmark(id).then((res) => {
    display.render();
  });
};

const handleItemClick = (e) => {
  e.preventDefault();
  const id = localStore.getItemIdFromElement(e.currentTarget);
  const currentBook = localStore.findById(id);
  console.log(currentBook);
  localStore.toggleExpanded(currentBook);
  display.render();
};

const handleExpItemClick = (e) => {
  e.preventDefault();
  const id = localStore.getItemIdFromElement(e.currentTarget);
  const currentBook = localStore.findById(id);
  localStore.toggleExpanded(currentBook);
  display.render();
};

const handleFilterByRating = (e) => {
  e.preventDefault(); // TODO
  localStore.filter = $("#filter").val();
  console.log(localStore.filter);
  display.render();
};

$(main);
