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
const openModalThanks = document.querySelector(".open-modal-thanks");
const modalThanks = document.querySelector(".bground-thanks");
const btnCloseThanks = document.querySelector(".btn-close-thanks");
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
const sendButton = document.querySelector(".send-button");

//================ OPEN AND CLOSE MODAL ============//
// Open modal form by click on button
const launchModal = () => {
  modalbg.style.display = "block";
  inputReset();
};

// Open modal thanks
const thanksOpenModal = () => {
  modalThanks.style.display = "block";
};

// Close modal by cross
const closeModal = () => {
  modalbg.style.display = "none";
  modalThanks.style.display = "none";
};

modalCrossClose.forEach((cross) => cross.addEventListener("click", closeModal));
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
openModalThanks.addEventListener("submit", thanksOpenModal);
btnCloseThanks.addEventListener("click", closeModal);

//===================== DECLARATION DE FONCTION ======================//
//=============== GENERIC SUCCESS AND ERRORS DISPLAY =================//
const setForSuccess = (input, error, validate) => {
  input.style.border = "3px solid green";
  error.style.visibility = "hidden";
  validate.value = true;
  sendButton.disabled = false;

};

const setForError = (input, error, validate) => {
  input.style.border = "3px solid red";
  error.style.visibility = "visible";
  validate.value = false;
  // sendButton.disabled = true;
};

//======================= ADD EVENT LISTENERS ========================//
// Ecouter la modification de prénom
const validateFirstName = () => {
  formAll.first.addEventListener("blur", () => {
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
  formAll.last.addEventListener("blur", () => {
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
  formAll.email.addEventListener("blur", () => {
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
  formAll.birthdate.addEventListener("blur", () => {
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
  formAll.quantity.addEventListener("blur", () => {
    // teste la condition (regex)
    if (regexNumber.test(inputQuantity.value)) {
      setForSuccess(inputQuantity, errorQuantity, validateQuantity);
    } else {
      setForError(inputQuantity, errorQuantity, validateQuantity);
    }
  });
};

// Ecouter la modification de location
const validateLocation = () => {
  let locationValue;
  for (const location of listRadioLocation) {
    if (location.checked) {
      console.log("Une location est-elle cochée ?", location.checked);
      locationValue = location.value;
      console.log(`La valeur de la location est:`, locationValue);
    }
  }
  if (locationValue) {
    validateLocation.value = true;
    errorLocation.style.visibility = "hidden";
    // sendButton.disabled = false;
  } else {
    validateLocation.value = false;
    errorLocation.style.visibility = "visible";
    // sendButton.disabled = true;
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
console.log("1", validateFirstName());
validateLastName();
console.log("2", validateLastName());
validateEmail();
console.log("3", validateEmail());
validateBirthdate();
console.log("4", validateBirthdate());
validateQuantity();
console.log("5", validateQuantity());
validateCondition();
console.log("6", validateCondition());
validateLocation();
console.log("Location est-elle validée ?", validateLocation());

//====================================== VALIDATION DU FORMULAIRE ==================================//
// VERIFICATION DE LA VALIDITÉ DE CHAQUE CHAMP // SI TRUE, RENVOIE VERS L'ACCEPTATION DE VALIDATION //
const validateForm = () => {
  if (
    validateFirstName.value &&
    validateLastName.value &&
    validateEmail.value &&
    // console.log("validateEmail", validateEmail.value) &&
    validateBirthdate.value &&
    // console.log("validateBirthdate", validateBirthdate.value) &&
    validateQuantity.value &&
    // console.log("validateQuantity", validateQuantity.value) &&
    validateLocation.value &&
    console.log("validateLocation", validateLocation.value) &&
    validateCondition.value
    // console.log("validateCondition", validateCondition.value)
  ) {
    closeModal();
    thanksOpenModal();
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
  errorLocation.style.visibility = "hidden";
  // Initialise les inputs à false pour une nouvelle inscription
  validateFirstName.value = false;
  validateLastName.value = false;
  validateEmail.value = false;
  validateBirthdate.value = false;
  validateQuantity.value = false;
  validateLocation.value = false;
  sendButton.disabled = true;
};
