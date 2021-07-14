/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionTitles = Array.from(document.querySelectorAll('.section__title'));
const navBarList = document.querySelector('#navbar__list');
var menuList;
const intersectionObserver = new IntersectionObserver(intersectionObserverCallback, {threshold: 0.5});
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function intersectionObserverCallback(entry){
    const target = entry[0].target;
    if (entry[0].intersectionRatio>=0.5){
        target.classList.add('your-active-class');
        for (navItem of menuList){
            if(navItem.firstChild.innerText === target.getAttribute('data-nav')){
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        }
    } else {
        target.classList.remove('your-active-class');
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function populateNavBar(){
    sectionTitles.forEach((sectionTitle)=> {
        let listItem = `<a href="#${sectionTitle.id}" class='menu__link'><li>${sectionTitle.getAttribute('data-nav')}</li></a>`;
        navBarList.innerHTML+=listItem;
    })
    menuList = Array.from(navBarList.querySelectorAll('.menu__link'));
}




// Add class 'active' to section when near top of viewport
function addSectionTitleObserver(){
    for (sectionTitle of sectionTitles){
        intersectionObserver.observe(sectionTitle);
    }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', ()=>{
    populateNavBar();
})

// Scroll to section on link click
// DONE! Through CSS option scroll-behavior

// Set sections as active
addSectionTitleObserver();