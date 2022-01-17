"use strict";

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const modalOverlayClose = document.querySelector(".overlay");

function editNav() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Close modal button
modalClose.addEventListener("click", closeModal);
function closeModal() {
    modalbg.style.display = "none";
}

// Close modal overlay
modalOverlayClose.addEventListener("click", modalOverlay);
function modalOverlay() {
    modalbg.style.display = "none";
}
