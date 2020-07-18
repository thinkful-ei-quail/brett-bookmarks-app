import $ from "jquery"


let bookmarks = [];
let adding = false;
let error = null;
let filter = 0;


const findById = function (id) {
    return this.bookmarks.find(currentItem => currentItem.id === id);
};

function toggleExpanded(object) {
    console.log(`attempting toggle expandof ${JSON.stringify(object)}`);
    object.expanded = !object.expanded;
    console.log(`toggled expandof ${JSON.stringify(object)} `);
};

const getItemIdFromElement = function (item) { 
    return $(item)
        .closest('.item')
        .data('item-id');
};



export default {
    bookmarks,
    adding,
    error,
    filter,
    findById,
    toggleExpanded,
    getItemIdFromElement
}