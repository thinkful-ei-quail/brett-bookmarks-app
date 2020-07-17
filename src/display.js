import $ from "jquery";
import templates from "./templates.js"
import localStore from "./localStore.js"



//let items = api.getItems();

function render() {
    
    $('body').html(templates.constructListScreen());
        console.log("worked", templates.constructListScreen())
/*
    if (localStore.adding) {        
        $('main').html(templates.constructAddScreen());
        console.log(templates.constructAddScreen())
    } else {
        $('main').html(templates.constructListScreen());
        console.log("worked", templates.constructListScreen())
    }
   
*/
}


//function updateItem()






export default {
    render

}