import $ from "jquery";
import api from "./api.js";
import "./styles.css";
import display from "./display.js"
import localStore from "./localStore.js"

function main() {
  //get bookmarks

  api.getAllItems()
    .then(response => {
      console.log("full response:", response);
      localStore.bookmarks = response;
      console.log("local bookmarks: ", localStore.bookmarks); 
      display.render();
    });
    
  eventListeners();
}

function eventListeners(){
  handleFilterByRating();
  handleItemClick();

}

function handleFilterByRating() {
  $('body').on('click', '.head', event => {
    event.preventDefault();

    //console.log("head clicked", event)
    localStore.filterRating = parseInt($(event.target).val());
    display.render();
  });
};

const getItemIdFromElement = function (item) {
  return $(item)
    .closest('.item')
    .data('item-id');
};


function handleItemClick() {
  $('body').on('click', '.item', event => {
    event.preventDefault();
    const id = getItemIdFromElement(event.currentTarget);    //getID
    console.log(id);
    
    //apicall to get by id 
    //add expanded=true to localStore
    
    display.render();
  });
} 

$(main)