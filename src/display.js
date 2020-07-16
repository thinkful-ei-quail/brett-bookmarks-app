import $ from "jquery";
import templates from "./templates.js"


function renderMain() {
       
    $("body").html(templates.mainScreen);
}

export default {
    renderMain
   
}