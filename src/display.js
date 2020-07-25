import $ from "jquery";
import templates from "./templates.js";
import localStore from "./localStore.js";

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
  let output = templates.listHeader;
  for (let i = 0; i < localStore.bookmarks.length; i++) {
    if (localStore.bookmarks[i].expanded)
      output += expandedBookmark(localStore.bookmarks[i]);
    else output += shortBookmark(localStore.bookmarks[i]);
  }
  return output + `</form></ul></main>`;
};

const shortBookmark = (bookmark) => {
  let output = `<li class= "item short" data-item-id="${bookmark.id}"><button class="bookmarkShort"><h2>${bookmark.title}</h2>`;
  return output + generateStars(bookmark.rating) + `</button></li>`;
};

const generateStars = (rating) => {
  let output = `<span class="rating">`;
  for (let i = 1; i <= 5; i++)
    if (i <= rating) output += `<span class="fa fa-star checked"></span>`;
    else output += `<span class="fa fa-star"></span>`;
  return output + `</span>`;
};

const expandedBookmark = (bookmark) => {
  console.log(bookmark); //////////////////////////////
  let output = `<li class= "item expanded" data-item-id="${bookmark.id}">
    <header class="expandedHeader">${bookmark.title}:<i class="fa fa-trash" aria-hidden="true"></i></header>
    <div class="expandedWindow"><button id="visitSite">Visit Site</button>
    <textarea class="description">${bookmark.desc}</textarea><div class="stars">`;
  return output + generateStars(bookmark.rating) + `</div></article>`;
};

export default {
  render,
  shortBookmark,
  expandedBookmark,
  constructAddScreen,
  constructListScreen,
};
