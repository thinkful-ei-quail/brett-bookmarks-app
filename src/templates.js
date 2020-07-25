const listHeader = `<header>
<title>My Bookmarks</title>
My Bookmarks
</header>
<div class="container">
<form class="head">
    <button id="newBookmark">+New <i class="fa fa-bookmark-o" aria-hidden="true"></i></button>
    <select id="filter" name="rating">
        <option disabled value></option>
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
        <textarea id="addURL" placeholder="http://dummy.url.com" autofocus=true>http://</textarea>
        <div>
            <textarea id="addTitle" placeholder="Title:" rows="1"></textarea>
            <div class= "addStars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
            <textarea id="addDescription" placeholder="Description" rows="6"> </textarea>
            <button id="addCancel">Cancel</button>
            <button id="addCreate">Create</button>
    
            <p id="js-error-message"></p>
        </div>
    </div>
</div>
`;

export default {
  addScreen,
  listHeader,
};
