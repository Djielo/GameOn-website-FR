"use strict";

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCrossClose = document.querySelector(".close");
// const modalOverlayClose = document.querySelector(".overlay");

// Close Modal

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

// Close modal
function closeModal() {
    modalbg.style.display = "none";
}

modalCrossClose.addEventListener("click", closeModal);
// modalOverlayClose.addEventListener("click", closeModal);
