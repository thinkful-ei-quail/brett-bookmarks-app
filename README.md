https://github.com/thinkful-ei-quail/brett-bookmarks-app.git
https://thinkful-ei-quail.github.io/brett-bookmarks-app/


User Stories
As a user:

I can add bookmarks to my bookmark list. Bookmarks contain:

title
url link
description
rating (1-5)
I can see a list of my bookmarks when I first open the app

All bookmarks in the list default to a "condensed" view showing only title and rating
I can click on a bookmark to display the "detailed" view

Detailed view expands to additionally display description and a "Visit Site" link
I can remove bookmarks from my bookmark list

I receive appropriate feedback when I cannot submit a bookmark

Check all validations in the API documentation (e.g. title and url field required)
I can select from a dropdown (a <select> element) a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection

(Extension feature - optional) I can edit the rating and description of a bookmark in my list

Technical Requirements
Use fetch for AJAX calls and jQuery for DOM manipulation

Use namespacing to adhere to good architecture practices

Minimal global variables
Create modules in separate files to organize your code
Logically group your functions (e.g. API methods, store methods...)
Keep your Data out of the DOM

No direct DOM manipulation in your event handlers!
Follow the React-ful design pattern - change your state, re-render your component
Use semantic HTML

Use a responsive and mobile-first design

Visually and functionally solid in viewports for mobile and desktop
Follow a11y best practices

Refer back to the accessibility checklist and the lesson on forms

_________________________


HTML mockups:

-------------------------------- Main screen mockup--------------------

    <header>
        My Bookmarks
    </header>
    <div class="container">
        <form class="head">
            <button id="newBookmark">+New <i class="fa fa-bookmark-o" aria-hidden="true"></i></button>
            <select id="dropdown" name="rating">
                <option disabled value><option>Filter by rating:</option>
                <option value=5>5 stars</option>
                <option value=4>4 stars & above</option>
                <option value=3>3 stars & above</option>
                <option value=2>2 stars & above</option>
                <option value=1>1 star & above</option>
            </select>
        </form>
        <div>
            Title:
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        <div>
            Title: <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        <div>
            Title: <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>

    </div>


    </div>



    -------------------Window section
    

    <div class = "window">
            <header>
                Title II
                <i class="fa fa-trash" aria-hidden="true"></i>
            </header>
                <button>
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
                <span class="fa fa-star"></span>
              
        </div>
