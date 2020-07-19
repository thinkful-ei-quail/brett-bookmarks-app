import $ from "jquery";

let bookmarks = [];
let adding = false;
let error = null;
let filter = 0;

const findById = function(id) {
    return this.bookmarks.find(currentItem => currentItem.id === id);
};

function toggleExpanded(object) {
    object.expanded = !object.expanded;
}

function getItemIdFromElement(item) {
    return $(item)
        .closest('.item')
        .data('item-id');
};

function packObj(title, rating, url, desc) {
    return {
        title: title,
        rating: rating,
        url: url,
        description: desc,
        expanded: false
    };
}

export default {
    bookmarks,
    adding,
    error,
    filter,
    findById,
    toggleExpanded,
    getItemIdFromElement,
    packObj
}