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
  return templates.addScreen;
};

const constructListScreen = () => {
  let output = templates.listHeader;
  for (let i = 0; i < localStore.bookmarks.length; i++) {
    if (localStore.bookmarks[i].rating >= localStore.filter) {
      if (localStore.bookmarks[i].expanded)
        output += expandedBookmark(localStore.bookmarks[i]);
      else output += shortBookmark(localStore.bookmarks[i]);
    }
  }
  return output + `</ul></form></main>`;
};

const shortBookmark = (bookmark) => {
  let output = `<li class= "item short" data-item-id="${bookmark.id}">
  <h2><button class="bookmarkBtn shortBookmarkBtn">
  ${bookmark.title}
  </button></h2>`;
  return output + generateStars(bookmark.rating) + `</li>`;
};

const generateStars = (rating) => {
  let output = `<span class="rating">`;
  for (let i = 1; i <= 5; i++)
    if (i <= rating) output += `<span class="fa fa-star checked"></span>`;
    else output += `<span class="fa fa-star"></span>`;
  return output + `</span>`;
};

const expandedBookmark = (bookmark) => {
  let output = `<li class= "item expanded" data-item-id="${bookmark.id}">
    <header class="expandedHeader">
      <button class="bookmarkBtn expBookmarkBtn">
        Close Tab
      </button>
      <button class="trashCan"><i class="fa fa-trash" aria-label="Delete"></i></button>
    </header>
    <div class="expandedWindow">
    <h3 class="bookmarkTitle">${bookmark.title}</h3>
    <article class="description">${bookmark.desc}</article>
    <footer class="expandedFooter">
    <a href="${bookmark.url}" target="_blank" class="visitSite">Visit Site</a>
    ${generateStars(bookmark.rating)}
    </footer>`;

  return output;
};

export default {
  render,
  shortBookmark,
  expandedBookmark,
  constructAddScreen,
  constructListScreen,
};
