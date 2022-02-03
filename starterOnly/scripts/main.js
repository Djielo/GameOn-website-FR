import { validateForm } from "./validation.js";
import { launchModal, closeModal } from "./modal.js";
import { editNav } from "./menu.js";

//==================================================//
//================= GLOBAL =========================//
// On va chercher le formulaire dans le DOM
export const formAll = document.querySelector("#form");

//=====================================================//
//================= RESPONSIVE MENU ===================//
const burgerButton = document.querySelector("#burger");
burgerButton.addEventListener("click", editNav);

//==================================================//
//================ OPEN AND CLOSE MODAL ============//
const modalCrossClose = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
modalCrossClose.addEventListener("click", closeModal);
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//=================================================//
//================== REGEXP =======================//
const regexName = /^[a-zA-Z]{2,15}/;
const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
const regexDate = /^19[00-99]{2}|200[0-8]{1}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
const regexNumber = /^[1-9]{1}$/;

//================================================================//
//=================== CONTROL CONTENT IN INPUT ===================//
export const validateFirstName = (value) => {
  const inputFirstName = document.querySelector("input#first");
  const errorFirstName = document.querySelector("span.firstError");

  // analyse la condition (longueur + regex)
  if (value.length > 1 && regexName.test(value) === true) {
    // Encadrer input en vert et enlever le message d'erreur
    inputFirstName.style.border = "3px solid green";
    errorFirstName.style.visibility = "hidden";
    return true;
  } else {
    // Encadrer input en rouge et mettre le message d'erreur
    inputFirstName.style.border = "3px solid red";
    errorFirstName.style.visibility = "visible";
  }
};

export const validateLastName = (value) => {
  const inputLastName = document.querySelector("input#last");
  const errorLastName = document.querySelector("span.lastError");

  // analyse la condition (longueur + regex)
  if (value.length > 1 && regexName.test(value) === true) {
    inputLastName.style.border = "3px solid green";
    errorLastName.style.visibility = "hidden";
    return true;
  } else {
    inputLastName.style.border = "3px solid red";
    errorLastName.style.visibility = "visible";
  }
};

export const validateEmail = (value) => {
  const inputEmail = document.querySelector("input#email");
  const errorEmail = document.querySelector("span.emailError");

  if (regexpEmail.test(value)) {
    inputEmail.style.border = "3px solid green";
    errorEmail.style.visibility = "hidden";
    return true;
  } else {
    inputEmail.style.border = "3px solid red";
    errorEmail.style.visibility = "visible";
  }
};
export const validateBirthdate = (value) => {
  const inputBirthdate = document.querySelector("input#birthdate");
  const errorBirthdate = document.querySelector("span.birthdateError");

  if (regexDate.test(value)) {
    inputBirthdate.style.border = "3px solid green";
    errorBirthdate.style.visibility = "hidden";
    return true;
  } else {
    inputBirthdate.style.border = "3px solid red";
    errorBirthdate.style.visibility = "visible";
  }
};
export const validateQuantity = (value) => {
  const inputQuantity = document.querySelector("input#quantity");
  const errorQuantity = document.querySelector("span.quantityError");

  if (regexNumber.test(value)) {
    inputQuantity.style.border = "3px solid green";
    errorQuantity.style.visibility = "hidden";
    return true;
  } else {
    inputQuantity.style.border = "3px solid red";
    errorQuantity.style.visibility = "visible";
  }
};
export const validateCondition = () => {
  const inputCondition = document.querySelector("input#checkbox1");
  const errorCondition = document.querySelector("span.checkbox1Error");

  if (inputCondition.checked === true) {
    errorCondition.style.visibility = "hidden";
    return true;
  } else {
    errorCondition.style.visibility = "visible";
  }
};

//===============================================//
//================== SUBMIT =====================//
// Permet d'éviter le rechargement de la page, de valider ou pas le formulaire et agir selon le résultat (affichage des erreurs ou validation du form)
function handleEvent(e) {
  e.preventDefault();
  validateForm();
}

// Je rajoute un écouteur pour savoir à quel moment le formuaire est soumis afin de lancer le controle de validation du formulaire
formAll.addEventListener("submit", handleEvent);
