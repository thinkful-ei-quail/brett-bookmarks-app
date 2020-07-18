import display from "./display.js"
import localStore from "./localStore.js"
import cuid from "cuid";

function constructAddScreen() {
    //let output = listHeader + `<main>`;
    //for (let i = 0; i < localStore.bookmarks.length; i++) {
    //    if (localStore.bookmarks[i].expanded) output += expandedBookmark();
    //    else output += shortBookmark(localStore.bookmarks[i]);
    //};
    return addScreen; //output + `</main>`;
}

function constructListScreen() {
    let output = listHeader + `<main>`;
    //localStore.bookmarks[1].expanded = true; // temporary line for testing
    for (let i = 0; i < localStore.bookmarks.length; i++) {
        if (localStore.bookmarks[i].expanded) output += expandedBookmark(localStore.bookmarks[i]);
        else output += shortBookmark(localStore.bookmarks[i]);
    };
    return output + `<main>`;
}

function shortBookmark(bookmark) {
    let output = `<div class= "item" data-item-id="${bookmark.id}">${bookmark.title}:`;
    for (let i = 1; i <= 5; i++)
        if (i <= bookmark.rating) output += `<span class="fa fa-star checked"></span>`;
        else output += `<span class="fa fa-star"></span>`
    return output + `</div>`;
}

function expandedBookmark(bookmark) {

    let output = `<div class= "expanded" data-item-id="${bookmark.id}"><button>Visit Site</button>
    <h3>${bookmark.title}:</h3> <p>${bookmark.desc}</p><p>${bookmark.rating}: </p>`
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

const addScreen = `
<header>My Bookmarks</header>
    <div class="container">
        <h3>Add new bookmark:</h3>
        <textarea id="addURL">http://dummy.url.com</textarea>
        <div>
            <textarea id="addTitle"></textarea>
            <div class= "addStars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
            <textarea id="addDescription"></textarea>
            <button id="addCancel">Cancel</button>
            <button id="addCreate">Create</button>
            <p id="js-error-message"></p>
        </div>
    </div>
</div>
`



function packObj(title, rating, url, desc) {
    return {
        id: '6ffw',
        title: title,
        rating: rating,
        url: url,
        description: desc,
        expanded: false
    };
};




export default {
    shortBookmark,
    expandedBookmark,
    listHeader,
    constructAddScreen,
    constructListScreen,
    packObj
}