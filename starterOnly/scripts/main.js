import { validateForm } from "./validation.js";
import { launchModal, closeModal } from "./modal.js";
import { editNav } from "./menu.js";

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

//=======================================================//
//====================== GLOBAL =========================//
// On va chercher le formulaire dans le DOM
export const formAll = document.querySelector("#form");

//========================================================//
//======= EVENT LISTENERS + ERRORS DISPLAY ===============//
// Ecouter la modification de prénom
export const validateFirstName = () => {
  formAll.first.addEventListener("blur", () => {
    const inputFirstName = document.querySelector("input#first");
    const errorFirstName = document.querySelector("span.firstError");
    // analyse la condition (longueur + regex)
    if (inputFirstName.value.length > 1 && regexName.test(inputFirstName.value) === true) {
      inputFirstName.style.border = "3px solid green";
      errorFirstName.style.visibility = "hidden";
      validateFirstName.value = true;
    } else {
      inputFirstName.style.border = "3px solid red";
      errorFirstName.style.visibility = "visible";
      validateFirstName.value = false;
    }
  });
};

validateFirstName();

// Ecouter la modification de nom
export const validateLastName = () => {
  formAll.last.addEventListener("blur", () => {
    const inputLastName = document.querySelector("input#last");
    const errorLastName = document.querySelector("span.lastError");

    // analyse la condition (longueur + regex)
    if (inputLastName.value.length > 1 && regexName.test(inputLastName.value) === true) {
      inputLastName.style.border = "3px solid green";
      errorLastName.style.visibility = "hidden";
      validateLastName.value = true;
    } else {
      inputLastName.style.border = "3px solid red";
      errorLastName.style.visibility = "visible";
      validateLastName.value = false;
    }
  });
};

validateLastName();

// Ecouter la modification de email
export const validateEmail = () => {
  formAll.email.addEventListener("blur", () => {
    const inputEmail = document.querySelector("input#email");
    const errorEmail = document.querySelector("span.emailError");

    if (regexpEmail.test(inputEmail.value)) {
      inputEmail.style.border = "3px solid green";
      errorEmail.style.visibility = "hidden";
      validateEmail.value = true;
    } else {
      inputEmail.style.border = "3px solid red";
      errorEmail.style.visibility = "visible";
      validateEmail.value = false;
    }
  });
};

validateEmail();

// Ecouter la modification de birthdate
export const validateBirthdate = () => {
  formAll.birthdate.addEventListener("blur", () => {
    const inputBirthdate = document.querySelector("input#birthdate");
    const errorBirthdate = document.querySelector("span.birthdateError");

    if (regexDate.test(inputBirthdate.value)) {
      inputBirthdate.style.border = "3px solid green";
      errorBirthdate.style.visibility = "hidden";
      validateBirthdate.value = true;
    } else {
      inputBirthdate.style.border = "3px solid red";
      errorBirthdate.style.visibility = "visible";
      validateBirthdate.value = false;
    }
  });
};

validateBirthdate();

// Ecouter la modification de quantity
export const validateQuantity = () => {
  formAll.quantity.addEventListener("blur", () => {
    const inputQuantity = document.querySelector("input#quantity");
    const errorQuantity = document.querySelector("span.quantityError");

    if (regexNumber.test(inputQuantity.value)) {
      inputQuantity.style.border = "3px solid green";
      errorQuantity.style.visibility = "hidden";
      validateQuantity.value = true;
    } else {
      inputQuantity.style.border = "3px solid red";
      errorQuantity.style.visibility = "visible";
      validateQuantity.value = false;
    }
  });
};

validateQuantity();

// Ecouter la modification de condition
export const validateCondition = () => {
  validateCondition.value = true;
  formAll.checkbox1.addEventListener("click", () => {
    const inputCondition = document.querySelector("input#checkbox1");
    const errorCondition = document.querySelector("span.checkbox1Error");

    if (inputCondition.checked === true) {
      errorCondition.style.visibility = "hidden";
      validateCondition.value = true;
    } else {
      errorCondition.style.visibility = "visible";
      validateCondition.value = false;
    }
  });
};

validateCondition();

//=================================================//
//================== REGEXP =======================//
const regexName = /^[a-zA-Z-\u00C0-\u024F]{2,}$/;
const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
const regexDate = /^19[00-99]{2}|200[0-8]{1}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
const regexNumber = /^[0-9]{1}$/;

//================================================================//
//=================== CONTROL CONTENT IN INPUT ===================//
// export const validateFirstName = inputFirst;

//===============================================//
//================== SUBMIT =====================//
// Permet d'éviter le rechargement de la page, de valider ou pas le formulaire et agir selon le résultat (affichage des erreurs ou validation du form)

// Je rajoute un écouteur pour savoir à quel moment le formuaire est soumis afin de lancer le controle de validation du formulaire
formAll.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
