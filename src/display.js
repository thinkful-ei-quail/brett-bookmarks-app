import $ from "jquery";
import templates from "./templates.js"
import api from "./api.js"



//let items = api.getItems();

function renderMain(URL, items) {
       
    $("body").html(templates.mainScreen);
}

//function updateItem()

export default {
    renderMain
   
}