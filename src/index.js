import $ from "jquery";
import api from "./src/api.js";

function main() {
  console.log("literally anything")
  console.log(api.getBookmarks());
  eventListeners();
}


$(main)