"use strict";

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCrossClose = document.querySelector(".close");

//================== REGEXP =======================//
const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

//================== INPUTS CONTENT VALIDATION CONTROL ======================//
// On sélectionne ici les inputs qui contiennent une class text-control ou checkbox-input
const inputs = document.querySelectorAll(`input[class="text-control"], input[class="checkbox-input"]`);

// On controle le contenu de chaque élément suivant un mode de validation qui lui est propre et qui valide la saisie dans les champs
const textControl = (value, tag, name) => {
    if (tag === "first" || tag === "last") {
        // mettre le regexp à la place du value.length < 2 !
        if (value.length < 2) {
            console.log("yes");
            errorDisplay(`#${tag}`, `Le ${name} doit avoir au moins 2 caractères`, false);
            // résoudre le else pour enlever l'erreur !
        } else {
            errorDisplay(`#${tag}`, `Le ${name} doit avoir au moins 2 caractères`, true);
        }
    } else if (tag === "email") {
        // mettre le regexp pour valider l'email, etc..
        if (regexpEmail.test(value)) {
            console.log("youpi !!");
        } else {
            console.log("dommage :-(");
        }
    }
};

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        let inputValue = e.target.value;
        let tag = e.target.id;
        textControl(inputValue, tag);
    });
});

// inputs.forEach((input) => {
//     input.addEventListener("input", (e) => {
//         console.log(e.target.checked);
//     });
// });

// Fonction qui gère l'affichage des erreurs
const errorDisplay = (tag, message, valid) => {
    const formData = document.querySelector(`${tag}`);
    const span = document.querySelector(".formData > span");

    if (valid === false) {
        console.log(tag);
        formData.classList.add("error");
        span.textContent = message;
    } else {
        console.log("oui");
        formData.classList.remove("error");
    }
};

//===================== REMOTE RESPONSIVE MENU ====================//
function editNav() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//====================+=== LAUNCH MODAL FORM =======================//
// Open modal by click on button
function launchModal() {
    modalbg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//======================= CLOSE MODAL FORM =======================//
// Close modal by cross
function closeModal() {
    modalbg.style.display = "none";
}

modalCrossClose.addEventListener("click", closeModal);

//======================= CONTROL VALUE ELEMENT ========================//
