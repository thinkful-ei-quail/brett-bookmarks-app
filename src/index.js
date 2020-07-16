import $ from "jquery";
import api from "./api.js";
import "./styles.css";
import display from "./display.js"


function main() {
  //get bookmarks
 
  console.log("bookmarks", api.getAllItems())
  display.renderMain();
  //eventListeners();

}

$(main)