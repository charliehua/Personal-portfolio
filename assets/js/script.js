'use strict';

/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader");

window.addEventListener("DOMContentLoaded", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
});

addEventOnElements(navLinks, "click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-active");
})

/**
 * Header active
 */

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active")
});


/**
 * Element tilt effect
 */

const tiltElements = document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {
    /** get tilt element center position */
    const centerX = this.offsetWidth / 2;
    const centerY = this.offsetHeight / 2;

    const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
    const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

    this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${-tiltPosY}deg)`
}

addEventOnElements(tiltElements, "mousemove", initTilt);

addEventOnElements(tiltElements, "mouseout", function () {
    this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
})

document.addEventListener("DOMContentLoaded", function () {
    // Function to activate a tab
    function activateTab(targetTab) {
        // Deactivate all tabs and buttons
        document.querySelectorAll(".tab-content, .tab-btn").forEach(el => el.classList.remove("active"));

        // Activate the target tab and corresponding button
        document.querySelector(`[data-tab-content="${targetTab}"]`).classList.add("active");
        document.querySelector(`[data-tab-btn="${targetTab}"]`).classList.add("active");
    }

    // Handle navbar links for "About" and "Resume"
    document.querySelectorAll('a[data-target-tab]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Scroll to the "About Me" section
            document.querySelector("#About").scrollIntoView({ behavior: "smooth" });

            // Activate the target tab
            activateTab(this.dataset.targetTab);
        });
    });

    // Handle tab buttons within the "About Me" section
    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", function () {
            activateTab(this.dataset.tabBtn);
        });
    });
});

// CUSTOM CURSOR

const cursors = document.querySelectorAll("[data-cursor]");
const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

window.addEventListener("mousemove", function (event) {
    const posX = event.clientX;
    const posY = event.clientY;

    cursors[0].style.left = `${posX}px`;
    cursors[0].style.top = `${posY}px`;

    setTimeout(function () {
        cursors[1].style.left = `${posX}px`;
        cursors[1].style.top = `${posY}px`;
    }, 80);
});

// hovered effect

addEventOnElements(hoveredElements, "mouseover", function () {
    for (let i = 0, len = cursors.length; i < len; i++) {
        cursors[i].classList.add("hovered");
    }
});

addEventOnElements(hoveredElements, "mouseout", function () {
    for (let i = 0, len = cursors.length; i < len; i++) {
        cursors[i].classList.remove("hovered");
    }
})