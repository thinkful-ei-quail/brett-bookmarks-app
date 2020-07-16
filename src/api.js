import $ from 'jQuery';


const BASEURL = `https://thinkful-list-api.herokuapp.com`

function getItemByID(id) {
    return ``;
}

function apiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if(!res.ok) {
          error = {
            // if response is not 2xx, start building error object
            code: res.status
          };
          // if response is not JSON type, some other issue place statusText in error object and
          // immediately reject promise
          if(!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        //if this is a json object, we parse data and we have a javascript object
        // this object might still be an error to work with :) 
        return res.json();
      })
      //data is the JS obj
      .then (data => {
        if (error) {
          // always check how errors are thrown back to make sure you catch the right error 
          // place JSON message into error object and reject promise with the reject reason being the error obj
          error.message = data.message;
          return Promise.reject(error);
        }
        // otherwise, return the goodies! the data :) we still need to access the data object to get our the relevant information
        return data;
      });
  }


function getBookmarks() {
    return apiFetch(`${BASEURL}/DrBretto/bookmarks`); // []
}

export {
    getBookmarks

}