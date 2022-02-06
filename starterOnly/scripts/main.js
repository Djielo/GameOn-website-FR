//=================================================//
//================== REGEXP =======================//
const regexName = /^[a-zA-Z-\u00C0-\u024F]{2,}$/;
const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
const regexDate = /^19[00-99]{2}|200[0-8]{1}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
const regexNumber = /^[0-9]{1}$/;

//=================================================//
//================== CONSTANTES ===================//
const modalbg = document.querySelector(".bground");
const modalCrossClose = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".btn-signup");
const formAll = document.querySelector("#form");
const openModalThanks = document.querySelector(".btn-submit");
const modalTY = document.querySelector(".bground-thanks");
const buttonTY = document.querySelector(".button");
const errorFirstName = document.querySelector("span.firstError");
const errorLastName = document.querySelector("span.lastError");
const errorEmail = document.querySelector("span.emailError");
const errorBirthdate = document.querySelector("span.birthdateError");
const errorQuantity = document.querySelector("span.quantityError");
const errorCondition = document.querySelector("span.checkbox1Error");
const inputFirstName = document.querySelector("input#first");
const inputLastName = document.querySelector("input#last");
const inputEmail = document.querySelector("input#email");
const inputBirthdate = document.querySelector("input#birthdate");
const inputQuantity = document.querySelector("input#quantity");
const inputCondition = document.querySelector("input#checkbox1");

//==================================================//
//================ OPEN AND CLOSE MODAL ============//
// Open modal form by click on button
const launchModal = () => {
  modalbg.style.display = "block";
  formAll.reset();
  inputFirstName.style.border = "none";
  inputLastName.style.border = "none";
  inputEmail.style.border = "none";
  inputBirthdate.style.border = "none";
  inputQuantity.style.border = "none";
};

// Close modal by cross
const closeModal = () => {
  modalbg.style.display = "none";
  modalTY.style.display = "none";
};

// Open modal thanks
const openModalTY = () => {
  modalTY.style.display = "block";
};

modalCrossClose.forEach((cross) => cross.addEventListener("click", closeModal));
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
openModalThanks.addEventListener("submit", openModalTY);
buttonTY.addEventListener("click", closeModal);

//======================================================================================//
//======= DECLARATION DE FONCTION CONTENANT ADD EVENT LISTENERS + ERRORS DISPLAY =======//
// Ecouter la modification de prénom
const validateFirstName = () => {
  formAll.first.addEventListener("input", () => {
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
// Ecouter la modification de nom
const validateLastName = () => {
  formAll.last.addEventListener("input", () => {
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
// Ecouter la modification de email
const validateEmail = () => {
  formAll.email.addEventListener("input", () => {
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
// Ecouter la modification de birthdate
const validateBirthdate = () => {
  formAll.birthdate.addEventListener("input", () => {
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
// Ecouter la modification de quantity
const validateQuantity = () => {
  formAll.quantity.addEventListener("input", () => {
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
// Ecouter la modification de condition
const validateCondition = () => {
  validateCondition.value = true;
  formAll.checkbox1.addEventListener("change", () => {
    if (inputCondition.checked === true) {
      errorCondition.style.visibility = "hidden";
      validateCondition.value = true;
    } else {
      errorCondition.style.visibility = "visible";
      validateCondition.value = false;
    }
  });
};

//=========================== VALIDATION DES INPUTS ==============================//
//=================== APPEL DE FONCTION DES VALIDATION D'INPUT ===================//
validateFirstName();
validateLastName();
validateEmail();
validateBirthdate();
validateQuantity();
validateCondition();

//====================================== VALIDATION DU FORMULAIRE ==================================//
// VERIFICATION DE LA VALIDITÉ DE CHAQUE CHAMP // SI TRUE, RENVOIE VERS L'ACCEPTATION DE VALIDATION //
const validateForm = () => {
  if (
    validateFirstName.value &&
    validateLastName.value &&
    validateEmail.value &&
    validateBirthdate.value &&
    validateQuantity.value &&
    validateCondition.value
  ) {
    console.log("Afficher la modal de confirmation");
    closeModal();
    openModalTY();
  }
};

//===============================================//
//================== SUBMIT =====================//
// Écouteur pour savoir à quel moment le formuaire est soumis afin de lancer le controle de validation du formulaire
formAll.addEventListener("submit", (e) => {
  // Permet d'éviter le rechargement de la page
  e.preventDefault();
  // Et de valider ou pas le formulaire
  validateForm();
});
