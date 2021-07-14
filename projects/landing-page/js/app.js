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
const pageHeader = document.querySelector('.page__header');
const pageFooter = document.querySelector('.page__footer');
const sectionTitles = Array.from(document.querySelectorAll('.section__title'));
const navBarList = document.querySelector('#navbar__list');
var menuList;
const intersectionObserver = new IntersectionObserver(intersectionObserverCallback, { threshold: 1 });
const footerIntersectionObserver = new IntersectionObserver(bottomReached, { threshold: 0.1 });
const toTopButton = document.querySelector('.scroll__top');
var lastScrollPositionY = 0;
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function intersectionObserverCallback(entry) {
    const target = entry[0].target.parentElement.parentElement;
    if (entry[0].intersectionRatio === 1) {
        target.classList.add('your-active-class');
        for (navItem of menuList) {
            navItem.classList.remove('active');
            if (navItem.querySelector('li').innerText === target.getAttribute('data-nav')) {
                navItem.classList.add('active');
            }
        }
    } else {
        target.classList.remove('your-active-class');
    }
}

function bottomReached(e) {
    if (e[0].intersectionRatio >= 0.1) {
        toTopButton.classList.add('to-top-visible');
    } else {
        toTopButton.classList.remove('to-top-visible');
    }
}

footerIntersectionObserver.observe(pageFooter);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function populateNavBar() {
    sectionTitles.forEach((sectionTitle) => {
        let listItem = `<a href="#${sectionTitle.id}" class='menu__link'><li>${sectionTitle.getAttribute('data-nav')}</li></a>`;
        navBarList.innerHTML += listItem;
    })
    menuList = Array.from(navBarList.querySelectorAll('.menu__link'));
}


// Add class 'active' to section when near top of viewport
function addSectionTitleObserver() {
    for (sectionTitle of sectionTitles) {
        intersectionObserver.observe(sectionTitle.querySelector('h2'));
    }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', () => {
    populateNavBar();
})

// Scroll to section on link click
// DONE! Through CSS option scroll-behavior

// Set sections as active
addSectionTitleObserver();


//Hide navigation menu when scrolling down and show it when scrolling up
window.addEventListener('scroll', (e) => {
    if (lastScrollPositionY - window.scrollY < 0) {
        pageHeader.classList.add('hide');
        pageHeader.classList.remove('show');
    } else {
        pageHeader.classList.add('show');
        pageHeader.classList.remove('hide');

        lastScrollPositionY = window.scrollY;

        if (window.scrollY === lastScrollPositionY) {
            setTimeout(() => {
                console.log('hey');
                pageHeader.classList.add('hide');
                pageHeader.classList.remove('show');
            }, 2000)
        }
    }

    lastScrollPositionY = window.scrollY;
})

