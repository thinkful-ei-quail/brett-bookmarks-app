const listHeader = `
<header id="mainHeader">
<title>My Bookmarks</title>
<h1>My Bookmarks</h1>
<nav>
    <button id="newBookmark"><label for="newBookmark">+New</label></button>
    <select id="filter" name="rating">
        <option disabled value></option>
        <option>Filter by rating:</option>
        <option value=5>5 stars</option>
        <option value=4>4 stars & above</option>
        <option value=3>3 stars & above</option>
        <option value=2>2 stars & above</option>
        <option value=1>1 star & above</option>
    </select>
</nav>
</header>
<main>
<ul>
<form>`;

const addScreen = `
<header id="mainHeader">
<title>My Bookmarks</title>
<h1>My Bookmarks</h1>
<nav>
    <button id="addCreate"><label for "addCreate">Create</label></button>
    <select id="setRating" name="setRating">
        <option disabled value></option>
        <option>Set rating:</option>
        <option value=5>5 stars</option>
        <option value=4>4 stars</option>
        <option value=3>3 stars</option>
        <option value=2>2 stars</option>
        <option value=1>1 star</option>
    </select>
</nav>
</header><form>
    <main id="addWindow">
    <header id="addHeader">
        <h3>Add new bookmark:</h3>            
        <span class="rating" id="addRating">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </span>
    </header>

            <input id="addTitle" placeholder="Title:" rows="1"></input>
            <input id="addURL" placeholder="http://dummy.url.com"></input>
         
            <textarea id="addDescription" placeholder="Description" rows="16"> </textarea>
            <button id="addCancel">Cancel</button>


    </main>
    </form>    
<footer class="js-error-message"></footer>
`;

export default {
  addScreen,
  listHeader,
};
