import $ from "jquery";
import templates from "./templates.js"
import localStore from "./localStore.js"

//let items = api.getItems();

function render() {

    if (localStore.adding) {        
        $('body').html(templates.constructAddScreen());
    
    } else {
        console.log(templates.constructListScreen());
        $('body').html(templates.constructListScreen());

    }
}

export default {
    render

}