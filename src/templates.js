const listHeader = `
<header id="mainHeader">
<h1>My Bookmarks</h1>

<nav>
    <button id="newBookmark">+New</button>
    <select id="filter" name="rating">
        <option value=1 selected disabled hidden>Filter by Rating</option>
        <option value=5>5 stars</option>
        <option value=4>4 stars & above</option>
        <option value=3>3 stars & above</option>
        <option value=2>2 stars & above</option>
        <option value=1>1 star & above</option>
    </select>
</nav>
</header>
<main>
<form>
<ul>
`;

const addScreen = `

<header id="mainHeader">
<h1>My Bookmarks</h1>
<nav>
    <button id="addCreate"><label for "addCreate">Create</label></button>
    <select id="setRating" name="setRating">
        <option value=3 selected disabled hidden>Rate (default 3)</option>
        <option value=5>Rate 5 stars</option>
        <option value=4>Rate 4 stars</option>
        <option Value=3>Rate 3 stars</option>
        <option value=2>Rate 2 stars</option>
        <option value=1>Rate 1 star</option>
    </select>
</nav>
</header><form>
    <main id="addWindow">
    <header id="addHeader">
        <h3>Add new bookmark:</h3>            
    </header>
            <label for="addTitle">Title: </label>
            <input id="addTitle" rows="1"></input>
            <label for="addURL">URL: </label>
            <input id="addURL" placeholder="https://"></input>

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
