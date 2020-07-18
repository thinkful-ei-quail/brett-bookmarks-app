import $ from "jquery";

const BASEURL = `https://thinkful-list-api.herokuapp.com/brett/bookmarks`

//function createBookmarksFromArray(bookmarks) {
 //   bookmarks.forEach(bookmark =>
   //     createBookmark(bookmark));
//}

function getAllItems() {
    return callAPI(`${BASEURL}`)
}

function updateBookmark(id, updatedBookmark) {
    const newItem = JSON.stringify(updatedBookmark);
    return callAPI(`${BASEURL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: newItem
    });
}

function createBookmark(bookmark) {
    const newBookmark = JSON.stringify(bookmark);
    console.log("from create bookmark: ", newBookmark);/////////////
    return callAPI(`${BASEURL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newBookmark
    });
}

const findAndUpdate = function (id, newData) {//from shopping list for reference
    const currentItem = this.findById(id);
    Object.assign(currentItem, newData);
};



function callAPI(...args) {
    let error;////////////////

    console.log("args in api call", ...args)///////////////
    return fetch(...args)
        .then(response => {
            if (!response.ok) { throw new Error(response.statusText); }
            return response.json();
        }).then(items => {
            console.log("api call returned: ", items);///////////////////////////
            return items;
        }).catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        })
}


export default {
    callAPI,
    getAllItems,
    //createBookmarksFromArray,
    updateBookmark,
    createBookmark

}