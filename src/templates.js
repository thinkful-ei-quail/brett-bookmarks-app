import display from "./display.js"
import localStore from "./localStore.js"


function constructAddScreen() {
    let output = ``;


}

function constructListScreen() {
    let output = listHeader + `<main id= "listScreen">`;
    for (let i = 0; i < localStore.bookmarks.length; i++) {
        if (localStore.bookmarks[i].expanded) output += expandedBookmark();
        else output += shortBookmark(localStore.bookmarks[i]);
        //output += shortBookmark();
    };
    console.log("list screen output", output);
    return output + `</main>`;
}


function shortBookmark(bookmark) {
    let output = `<div class= "item">${bookmark.title}:`;
    for (let i = 1; i <= 5; i++)
        if (i <= bookmark.rating) output += `<span class="fa fa-star checked"></span>`;
        else output += `<span class="fa fa-star"></span>`

    return output + `</div>`;
}

const listHeader = `<header>
My Bookmarks
</header>
<div class="container">
<form class="head">
    <button id="newBookmark">+New <i class="fa fa-bookmark-o" aria-hidden="true"></i></button>
    <select id="dropdown" name="rating">
        <option disabled value>
        <option>Filter by rating:</option>
        <option value=5>5 stars</option>
        <option value=4>4 stars & above</option>
        <option value=3>3 stars & above</option>
        <option value=2>2 stars & above</option>
        <option value=1>1 star & above</option>
    </select>
</form>`;




let expandedBookmark = `<button>
Visit Site
</button>
 <p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 </p>

 <p>Rating: </p>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>`;




export default {
    shortBookmark,
    expandedBookmark,
    listHeader,
    constructAddScreen,
    constructListScreen

}