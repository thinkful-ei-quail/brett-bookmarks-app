import $ from "jquery";
import localStore from "./localStore.js";
import display from "./display.js";

const BASEURL = `https://thinkful-list-api.herokuapp.com/brett/bookmarks`;

const getAllItems = () => {
  return callAPI(`${BASEURL}`).then((response) => {
    localStore.bookmarks = response;
    for (let i = 0; i < localStore.bookmarks.length; i++) {
      localStore.bookmarks[i].expanded = false;
    }
    display.render();
  });
};

const createBookmark = (bookmark) => {
  const newBookmark = JSON.stringify(bookmark);
  console.log("from create bookmark: ", newBookmark);
  return callAPI(`${BASEURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: newBookmark,
  }).then((bookmark) => {
    console.log("bookmark before expanded", bookmark);
    bookmark.expanded = false;
    console.log("bookmark after", bookmark);
    localStore.bookmarks.unshift(bookmark);
  });
};

const callAPI = (...args) => {
  let error; ////////////////
  console.log("args in api call", ...args); ///////////////
  return fetch(...args)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((items) => {
      console.log("api call returned: ", items); ///////////////////////////
      return items;
    })
    .catch((err) => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    }); // TODO --- Error window thingy
};

const deleteBookmark = (id) => {
  return callAPI(`${BASEURL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    localStore.bookmarks = localStore.bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
  });
};

export default {
  callAPI,
  getAllItems,
  createBookmark,
  deleteBookmark,
};
