import $ from "jquery";

let bookmarks = [];
let adding = false;
let error = null;
let filter = 0;

function findById(id) {
  return this.bookmarks.find((currentItem) => currentItem.id === id);
}

const removeItemsFromLocalStore = (id) => {
  bookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
  console.log("hmmm", bookmarks);
};

const toggleExpanded = (object) => {
  object.expanded = !object.expanded;
};

const getItemIdFromElement = (item) => {
  return $(item).closest(".item").data("item-id");
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
  removeItemsFromLocalStore,
};
