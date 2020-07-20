import $ from "jquery";
import templates from "./templates.js";
import localStore from "./localStore.js";
import api from "./api.js";

const render = () => {
  if (localStore.adding) {
    $("body").html(constructAddScreen());
  } else {
    $("body").html(constructListScreen());
  }
};

const constructAddScreen = () => {
  return templates.addScreen; //output + `</main>`;
};

const constructListScreen = () => {
  let output = templates.listHeader + `<main>`;
  for (let i = 0; i < localStore.bookmarks.length; i++) {
    if (localStore.bookmarks[i].expanded)
      output += expandedBookmark(localStore.bookmarks[i]);
    else output += shortBookmark(localStore.bookmarks[i]);
  }
  return output + `<main>`;
};

const shortBookmark = (bookmark) => {
  let output = `<div class= "item short" data-item-id="${bookmark.id}">${bookmark.title}:`;
  for (let i = 1; i <= 5; i++)
    if (i <= bookmark.rating)
      output += `<span class="fa fa-star checked"></span>`;
    else output += `<span class="fa fa-star"></span>`;
  return output + `</div>`;
};

const expandedBookmark = (bookmark) => {
  console.log(bookmark); //////////////////////////////
  let output = `<div class= "item expanded" data-item-id="${bookmark.id}">
    <div class="expandedHeader">${bookmark.title}:<i class="fa fa-trash" aria-hidden="true"></i></div>
    <button id="visitSite">Visit Site</button>
    <p>${bookmark.desc}</p><p>${bookmark.rating}: </p>`;
  for (let i = 1; i <= 5; i++)
    if (i <= bookmark.rating)
      output += `<span class="fa fa-star checked"></span>`;
    else output += `<span class="fa fa-star"></span>`;
  return output + `</div>`;
};

export default {
  render,
  shortBookmark,
  expandedBookmark,
  constructAddScreen,
  constructListScreen,
};
