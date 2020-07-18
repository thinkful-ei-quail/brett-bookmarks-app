'use strict';

import $ from "jquery";
import api from "./api.js";
import "./styles.css";
import display from "./display.js"
import localStore from "./localStore.js"
import templates from "./templates.js"

function main() {

  api.getAllItems()
    .then(response => {
      console.log("full response:", response);///////////////////
      localStore.bookmarks = response;
      console.log("local bookmarks: ", localStore.bookmarks); ///////////////////////
      display.render();
    });

  eventListeners();
}

function eventListeners() {
  handleFilterByRating();
  handleItemClick();
  handleNewButtonClick();
  handleAddCancelButtonClick();
  handleAddCreateButtonClick();
}

function handleFilterByRating() {
  $('body').on('click', '.head', event => {
    event.preventDefault();

    //console.log("head clicked", event)//////////////////////////////////////////////
    localStore.filterRating = parseInt($(event.target).val());
    display.render();
  });
};

function handleAddCancelButtonClick() {
  $('body').on('click', '#addCancel', event => {
    event.preventDefault();
    console.log("Cancel button clicked")///////////////////
    localStore.adding = false;
    display.render();
  });
}

function handleAddCreateButtonClick() {
  $('body').on('click', '#addCreate', event => {
    event.preventDefault();
    console.log("Create button clicked")///////////////////

    const title = $('#addTitle').val();
    const rating = 3; //newStarRating === 0 ? 1 : newStarRating;
    const url = $('#addURL').val();
    const desc = $('#addDescription').val();

    let newBookmark = localStore.packObj(title, rating, url, desc);
    console.log("bookmark is: ", newBookmark)////////////////
    api.createBookmark(newBookmark);
    display.render();
  });
}


function handleNewButtonClick() {
  $('body').on('click', '#newBookmark', event => {
    event.preventDefault();
    console.log("New button clicked")///////////////////
    localStore.adding = true;
    display.render();
  });
}

function handleItemClick() {
  $('body').on('click', '.item', event => {
    event.preventDefault();
    const id = localStore.getItemIdFromElement(event.currentTarget);    //getID
    console.log(id);/////////////////////////////
    const currentBook = localStore.findById(id);
    localStore.toggleExpanded(currentBook);
    display.render();
  });
};

$(main)