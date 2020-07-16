

const BASEURL = `https://thinkful-list-api.herokuapp.com/brett/bookmarks`


const store = {
    bookmarks: [
      {
        id: 'x56w',
        title: 'Title 1',
        rating: 3,
        url: 'http://www.title1.com',
        description: 'lorem ipsum dolor sit',
        expanded: false
      },
      {
        id: '6ffw',
        title: 'Title 2',
        rating: 5,
        url: 'http://www.title2.com',
        description: 'dolorum tempore deserunt',
        expanded: false
      } 
    
    ],
    adding: false,
    error: null,
    filter: 0
  };

  function getAllItems(){
      return callAPI(`${BASEURL}`)
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
    createBookmark
}