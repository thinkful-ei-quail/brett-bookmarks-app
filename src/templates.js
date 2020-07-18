import display from "./display.js"
import localStore from "./localStore.js"

function constructAddScreen() {
    let output = listHeader + `<main>`;/// this is currently a duplicate list screen - don't foget to fix
    for (let i = 0; i < localStore.bookmarks.length; i++) {
        if (localStore.bookmarks[i].expanded) output += expandedBookmark();
        else output += shortBookmark(localStore.bookmarks[i]);
    };
    return output + `</main>`;
}

function constructListScreen() {
    let output = listHeader + `<main>`;
    localStore.bookmarks[1].expanded = true; // temporary line for testing
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

export default {
    shortBookmark,
    expandedBookmark,
    listHeader,
    constructAddScreen,
    constructListScreen
}