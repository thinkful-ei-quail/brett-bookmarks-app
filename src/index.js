import $ from "jquery";
import api from "./api.js";
import "./styles.css";
import display from "./display.js"
import templates from "./templates.js"
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

}
function refresh(){
  $('html').on("click", event =>
  display.render())
}

const handleFilterByRating = () => {
  $('#filter').on('click', 'input', event => {
    localStore.filterRating = parseInt($(event.target).val());
    display.render();
  });
};




$(main)