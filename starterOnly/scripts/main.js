//================== REGEXP =======================//
const regexName = /^[a-zA-Z-\u00C0-\u024F]{2,}$/;
const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
const regexDate = /^19[00-99]{2}|200[0-8]{1}[./-](0[1-9]|1[0-2])[./-](0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
const regexNumber = /^[0-9]{1,2}$/;

//================== CONSTANTES ===================//
const modalbg = document.querySelector(".bground");
const modalCrossClose = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".btn-signup");
const formAll = document.querySelector("#form");
const submitButton = document.querySelector(".btn-submit");
const modalThanks = document.querySelector(".bground-thanks");
const btnCloseThanks = document.querySelector(".btn-close-thanks");
const inputFirstName = document.querySelector("input#first");
const inputLastName = document.querySelector("input#last");
const inputEmail = document.querySelector("input#email");
const inputBirthdate = document.querySelector("input#birthdate");
const inputQuantity = document.querySelector("input#quantity");
const listRadioLocation = Array.from(document.querySelectorAll('input[name="location"]'));
const inputCondition = document.querySelector("input#checkbox1");
const errorFirstName = document.querySelector("span.firstError");
const errorLastName = document.querySelector("span.lastError");
const errorEmail = document.querySelector("span.emailError");
const errorBirthdate = document.querySelector("span.birthdateError");
const errorQuantity = document.querySelector("span.quantityError");
const errorLocation = document.querySelector("span.locationError");
const errorCondition = document.querySelector("span.checkbox1Error");
let isValidForm;

//================ OPEN AND CLOSE MODAL ============//
// Open modal form by click on button
const launchModal = () => {
  modalbg.style.display = "block";
};

// Open modal thanks
const thanksOpenModal = () => {
  modalThanks.style.display = "block";
  // Initialise le contenu des inputs afin qu'ils soient vides
  formAll.reset();
  // Voir RESET en bas de page
  // Initialise les borders des inputs
  // Initialise les inputs à false pour une nouvelle inscription
  // Initialise le bouton "submit" de la modal afin qu'il ne soit pas cliquable
  // Initialise l'apparence du bouton "submit" de la modal afin qu'il soit grisé
  inputReset();
};

// Close modal by cross pour les modals du formulaire et de remerciement
const closeModal = () => {
  modalbg.style.display = "none";
  modalThanks.style.display = "none";
};

modalCrossClose.forEach((cross) => cross.addEventListener("click", closeModal));
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
submitButton.addEventListener("submit", thanksOpenModal);
btnCloseThanks.addEventListener("click", closeModal);

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
    changeStateButton();
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
    changeStateButton();
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
    changeStateButton();
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
    changeStateButton();
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
    changeStateButton();
  });
};

// Ecouter la modification de location
const validateLocation = () => {
  let locationValue;
  listRadioLocation.forEach((location) => {
    location.addEventListener("click", () => {
      if (location.checked) {
        locationValue = location.value;
      }
      if (locationValue) {
        validateLocation.value = true;
        errorLocation.style.visibility = "hidden";
      } else {
        validateLocation.value = false;
        errorLocation.style.visibility = "visible";
      }
      changeStateButton();
    });
  });
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
    changeStateButton();
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
validateLocation();

//====================================== VALIDATION DU FORMULAIRE ==================================//
// VERIFICATION DE LA VALIDITÉ DE CHAQUE CHAMP // SI TRUE, RENVOIE VERS L'ACCEPTATION DE VALIDATION //
const changeStateButton = () => {
  if (
    validateFirstName.value &&
    validateLastName.value &&
    validateEmail.value &&
    validateBirthdate.value &&
    validateQuantity.value &&
    validateLocation.value &&
    validateCondition.value
  ) {
    submitButton.disabled = false;
    submitButton.classList.remove("disable-button");
    isValidForm = true;
  } else {
    submitButton.disabled = true;
    submitButton.classList.add("disable-button");
    isValidForm = false;
  }
};

//================== SUBMIT =====================//
// Écouteur pour savoir à quel moment le formuaire est soumis afin de lancer le controle de validation du formulaire
formAll.addEventListener("submit", (e) => {
  // Empêche le rechargement de la page
  e.preventDefault();
  if (isValidForm) {
    closeModal();
    thanksOpenModal();
  }
  // Permet de valider ou pas le formulaire
});

//================== RESET ====================//
const inputReset = () => {
  // Initialise les borders des inputs et affiche l'erreur des radios à checker
  inputFirstName.style.border = "none";
  inputLastName.style.border = "none";
  inputEmail.style.border = "none";
  inputBirthdate.style.border = "none";
  inputQuantity.style.border = "none";
  errorLocation.style.visibility = "visible";
  // Initialise les inputs à false pour une nouvelle inscription
  validateFirstName.value = false;
  validateLastName.value = false;
  validateEmail.value = false;
  validateBirthdate.value = false;
  validateQuantity.value = false;
  validateLocation.value = false;
  // Initialise  le bouton "submit" de la modal afin qu'il ne soit pas cliquable
  submitButton.disabled = true;
  // Initialise  l'apparence du bouton "submit" de la modal afin qu'il soit grisé
  submitButton.classList.add("disable-button");
};
