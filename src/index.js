
import $ from "jquery";
import api from "./src/api.js";



function main() {
  console.log(api.getBookmarks());
  eventListeners();
}







$(main)