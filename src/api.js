
const BASEURL = `https://thinkful-list-api.herokuapp.com/brett/bookmarks`

function createBookmarksFromArray(bookmarks){
    bookmarks.forEach(bookmark => 
        createBookmark(bookmark));
}

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
    callAPI(`${BASEURL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newBookmark
    });
}

function getItemByID(id) {
    return ``;// unfinished function 
}

function callAPI(...args) {
    let error;
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                //handle errors here
            }
            return response.json();
        }).then(items => {
            ///insert more error handling here
            console.log("api call returned: ", items);
            return items;
        })
}


export default {
    callAPI,
    getAllItems,
    createBookmarksFromArray,
    updateBookmark,
    createBookmark
    
}