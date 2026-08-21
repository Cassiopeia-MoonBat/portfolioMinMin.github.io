
// assets/js/code.js


// ----------------------
// Visit Counter
// ----------------------
// Docs: ./documentation.md#js-load-ready
window.addEventListener("load", ready);


/**
 * Ready handler for page load.
 * See docs: ./documentation.md#js-function-ready
 */
function ready() {

    // fetch("visitcounter.txt")
    // .then(res => res.text())
    // .then(text => {
    // let currentCount = Number(text);
    // currentCount += 1;
    // text = String(currentCount);
    // console.log(text);
    // })
    // .catch(e => console.error(e));
}


// ----------------------
// Button Navigation
// ----------------------
/**
 * Redirects the user to the first project page.
 * Docs: ./documentation.md#js-function-buttonwork
 */
/**
function buttonwork() {
window.location.href = "project1.html";
}
*/

function buttonThoseWhoRemained() {
  
    location.href = "./project_pages/thosewhoremained.html";
}
function buttonFacelessCultivation() {
    location.href = "./project_pages/facelesscultivation.html";
}
function buttonABoxFullOfCats() {
    location.href = "./project_pages/aboxfullofcats.html";
}
function buttonPrimordialMass() {
    location.href = "./project_pages/primordialmass.html";
}
function buttonHushDarling() {
    location.href = "./project_pages/hushdarling.html";
}
// ----------------------
// Dice Roll
// Docs: ./documentation.md#js-commented-dice-roll
// ----------------------
/*

const dice = document.getElementById("d20");
const rollButton = document.getElementById("rollButton");
const rollDice = () => {
const randomNumber = Math.floor(Math.random() * 20) + 1;
dice.src = `assets/d20/D20_${randomNumber}.png`;
};
rollButton.addEventListener("click", rollDice);
*/
// ---------------------
// Smooth Scrolling for Navigation Links
// ----------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ----------------------
// Mobile Navigation Toggle
// ----------------------

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}


// ----------------------
// Project Cards Scroll Animation
// ----------------------
const projectCards = document.querySelectorAll('.project-card');


const observerOptions = { threshold: 0.1 };


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

projectCards.forEach(card => observer.observe(card));