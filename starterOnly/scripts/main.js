//================== REGEXP =======================//
const regexName = /^[a-zA-Z-\u00C0-\u024F]{2,}$/;
const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
const regexDate = /^19[00-99]{2}|200[0-8]{1}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
const regexNumber = /^[0-9]{1}$/;

//================== CONSTANTES ===================//
const modalbg = document.querySelector(".bground");
const modalCrossClose = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".btn-signup");
const formAll = document.querySelector("#form");
const openModalThanks = document.querySelector(".btn-submit");
const modalTY = document.querySelector(".bground-thanks");
const buttonTY = document.querySelector(".button");
const inputFirstName = document.querySelector("input#first");
const inputLastName = document.querySelector("input#last");
const inputEmail = document.querySelector("input#email");
const inputBirthdate = document.querySelector("input#birthdate");
const inputQuantity = document.querySelector("input#quantity");
const listRadioLocation = document.querySelectorAll('input[name="location"]');
const inputCondition = document.querySelector("input#checkbox1");
const errorFirstName = document.querySelector("span.firstError");
const errorLastName = document.querySelector("span.lastError");
const errorEmail = document.querySelector("span.emailError");
const errorBirthdate = document.querySelector("span.birthdateError");
const errorQuantity = document.querySelector("span.quantityError");
const errorLocation = document.querySelector("span.locationError");
const errorCondition = document.querySelector("span.checkbox1Error");

//================ OPEN AND CLOSE MODAL ============//
// Open modal form by click on button
const launchModal = () => {
  modalbg.style.display = "block";
  inputReset();
};

// Open modal thanks
const openModalTY = () => {
  modalTY.style.display = "block";
};

// Close modal by cross
const closeModal = () => {
  modalbg.style.display = "none";
  modalTY.style.display = "none";
};

modalCrossClose.forEach((cross) => cross.addEventListener("click", closeModal));
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
openModalThanks.addEventListener("submit", openModalTY);
buttonTY.addEventListener("click", closeModal);

//===================== DECLARATION DE FONCTION ======================//
//=============== GENERIC SUCCESS AND ERRORS DISPLAY =================//
const setForSuccess = (input, error, validate) => {
  input.style.border = "3px solid green";
  error.style.visibility = "hidden";
  validate.value = true;
};

const setForError = (input, error, validate) => {
  input.style.border = "3px solid red";
  error.style.visibility = "visible";
  validate.value = false;
};

//======================= ADD EVENT LISTENERS ========================//
// Ecouter la modification de prénom
const validateFirstName = () => {
  formAll.first.addEventListener("input", () => {
    // teste la condition (longueur + regex)
    if (inputFirstName.value.length > 1 && regexName.test(inputFirstName.value) === true) {
      setForSuccess(inputFirstName, errorFirstName, validateFirstName);
    } else {
      setForError(inputFirstName, errorFirstName, validateFirstName);
    }
  });
};
// Ecouter la modification de nom
const validateLastName = () => {
  formAll.last.addEventListener("input", () => {
    // teste la condition (longueur + regex)
    if (inputLastName.value.length > 1 && regexName.test(inputLastName.value) === true) {
      setForSuccess(inputLastName, errorLastName, validateLastName);
    } else {
      setForError(inputLastName, errorLastName, validateLastName);
    }
  });
};
// Ecouter la modification de email
const validateEmail = () => {
  formAll.email.addEventListener("input", () => {
    // teste la condition (regex)
    if (regexpEmail.test(inputEmail.value)) {
      setForSuccess(inputEmail, errorEmail, validateEmail);
    } else {
      setForError(inputEmail, errorEmail, validateEmail);
    }
  });
};
// Ecouter la modification de birthdate
const validateBirthdate = () => {
  formAll.birthdate.addEventListener("input", () => {
    // teste la condition (regex)
    if (regexDate.test(inputBirthdate.value)) {
      setForSuccess(inputBirthdate, errorBirthdate, validateBirthdate);
    } else {
      setForError(inputBirthdate, errorBirthdate, validateBirthdate);
    }
  });
};
// Ecouter la modification de quantity
const validateQuantity = () => {
  formAll.quantity.addEventListener("input", () => {
    // teste la condition (regex)
    if (regexNumber.test(inputQuantity.value)) {
      setForSuccess(inputQuantity, errorQuantity, validateQuantity);
    } else {
      setForError(inputQuantity, errorQuantity, validateQuantity);
    }
  });
};

const validateLocation = () => {
  let locationValue;
  for (const location of listRadioLocation) {
    if (location.checked) {
      locationValue = location.value;
      console.log(location.value);
    }
  }
  if (locationValue) {
    validateLocation.value = true;
    errorLocation.style.visibility = "hidden";
  } else {
    validateLocation.value = false;
    errorLocation.style.visibility = "visible";
  }
};

// Ecouter la modification de condition
const validateCondition = () => {
  validateCondition.value = true;
  formAll.checkbox1.addEventListener("change", () => {
    // teste la condition (checked)
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
  validateLocation();
  console.log(`validateLocation`, validateLocation.value);
  if (
    validateFirstName.value &&
    validateLastName.value &&
    validateEmail.value &&
    validateBirthdate.value &&
    validateQuantity.value &&
    validateLocation.value &&
    validateCondition.value
  ) {
    closeModal();
    openModalTY();
  }
};

//================== SUBMIT =====================//
// Écouteur pour savoir à quel moment le formuaire est soumis afin de lancer le controle de validation du formulaire
formAll.addEventListener("submit", (e) => {
  // Empêche le rechargement de la page
  e.preventDefault();
  // Permet de valider ou pas le formulaire
  validateForm();
});

//================== RESET ====================//
const inputReset = () => {
  // Reset le contenu des inputs
  formAll.reset();
  // Reset les borders des inputs
  inputFirstName.style.border = "none";
  inputLastName.style.border = "none";
  inputEmail.style.border = "none";
  inputBirthdate.style.border = "none";
  inputQuantity.style.border = "none";
  // Initialise les inputs à false pour une nouvelle inscription
  validateFirstName.value = false;
  validateLastName.value = false;
  validateEmail.value = false;
  validateBirthdate.value = false;
  validateQuantity.value = false;
  // validateLocation.value = false;
};
