import $ from "jquery";

let bookmarks = [];
let adding = false;
let error = null;
let filter = 0;
let addStars = 0;

function findById(id) {
  return this.bookmarks.find((currentItem) => currentItem.id === id);
}

const toggleExpanded = (object) => {
  object.expanded = !object.expanded;
};

const getItemIdFromElement = (item) => {
  return $(item).closest(".item").data("item-id");
};

const getItemValueFromElement = (item) => {
  return $(item).closest(".dropdown").data("value");
};

const packObj = (title, rating, url, desc) => {
  return {
    title: title,
    rating: rating,
    url: url,
    desc: desc,
    expanded: false,
  };
};

export default {
  bookmarks,
  adding,
  error,
  filter,
  findById,
  toggleExpanded,
  getItemIdFromElement,
  packObj,
  getItemValueFromElement,
};
