//================== REGEXP =======================//
// teste si le prénom et nom sont conforme à la demande
const regexName = /^[a-zA-Z-\u00C0-\u024F]{2,}$/;
// teste si l'adresse mail est conforme
const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
// teste si la date est conforme
const regexDate = /^19[00-99]{2}|200[0-8]{1}[./-](0[1-9]|1[0-2])[./-](0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;
// teste si le chiffre ou nombre est conforme
const regexNumber = /^[0-9]{1,2}$/;

//=================== VARIABLES ==================//
// va chercher l'id "form" dans le html pour gérer l'analyse, validation et reset des différentes parties du formulaire
const formAll = document.querySelector("#form");
// va chercher différentes classes qui vont gérer l'ouverture, cloture des modals
const modalbg = document.querySelector(".bground");
const modalCrossClose = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".btn-signup");
const modalThanks = document.querySelector(".bground-thanks");
const btnCloseThanks = document.querySelector(".btn-close-thanks");
// va chercher différents ids dans les imputs du html pour analyse, validation et reset
const inputFirstName = document.querySelector("input#first");
const inputLastName = document.querySelector("input#last");
const inputEmail = document.querySelector("input#email");
const inputBirthdate = document.querySelector("input#birthdate");
const inputQuantity = document.querySelector("input#quantity");
const inputCondition = document.querySelector("input#checkbox1");
// va chercher les différentes valeurs de nom "location" dans les inputs et les transcrits en tableau pour connaitre, lors de l'écoute, si l'une des villes a été cliquée
const listRadioLocation = Array.from(document.querySelectorAll('input[name="location"]'));
// va chercher les différentes classes dans les spans pour afficher selon situation les erreurs dans le formulaire
const errorFirstName = document.querySelector("span.firstError");
const errorLastName = document.querySelector("span.lastError");
const errorEmail = document.querySelector("span.emailError");
const errorBirthdate = document.querySelector("span.birthdateError");
const errorQuantity = document.querySelector("span.quantityError");
const errorLocation = document.querySelector("span.locationError");
const errorCondition = document.querySelector("span.checkbox1Error");
// va chercher la classe "btn-submit" pour activer/désactiver le bouton de formulaire, lui donner une mise en forme et gérer l'ouverture de la modal de remerciement
const submitButton = document.querySelector(".btn-submit");
// le contrôle de la valeur (true ou false) de cette variable lors du submit permettra la validation du formulaire
let isValidForm;

//================ OPEN AND CLOSE MODAL ============//
// Open modal form by click on button // Ouverture de modal par un clic sur le bouton "Je m'inscrit"
const launchModal = () => {
  modalbg.style.display = "block";
};

// Open modal thanks // Ouverture de la modal de remerciement
const thanksOpenModal = () => {
  modalThanks.style.display = "block";
  // EN VUE D'UNE POTENTIELLE AUTRE INSCRIPTION
  // Initialise le contenu des inputs
  formAll.reset();
  // Voir partie RESET en FIN de CODE
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

//======================= ADD EVENT LISTENER ========================//
// écoute si un clic se fait sur la croix de l'une des modals pour la fermer
modalCrossClose.forEach((cross) => cross.addEventListener("click", closeModal));
// écoute si un clic est effectué sur l'un des boutons liés à la classe "bground" pour ouvrir la modal du formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// écoute si l'event "submit" a lieu afin d'ouvrir la modal de remerciement
submitButton.addEventListener("submit", thanksOpenModal);
// écoute si un clic a lieu sur le bouton "fermer" de la modal de remerciement pour femer la modal
btnCloseThanks.addEventListener("click", closeModal);

//===================== DECLARATION DE FONCTION ======================//
//=============== GENERIC SUCCESS AND ERRORS DISPLAY =================//
// permet de gérer l'affichage et la validation des éléments du formulaire liés à cette fonction
const setForSuccess = (input, error, validate) => {
  input.style.border = "3px solid green";
  error.style.visibility = "hidden";
  validate.value = true;
};

// permet de gérer l'affichage et l'invalidation des éléments du formulaire liés à cette fonction
const setForError = (input, error, validate) => {
  input.style.border = "3px solid red";
  error.style.visibility = "visible";
  validate.value = false;
};

//======================= ADD EVENT LISTENERS ========================//
// Ecoute la modification de prénom à fin de validation ou invalidation et changement d'aspect du bouton et de son activation
const validateFirstName = () => {
  formAll.first.addEventListener("input", () => {
    // teste la condition (longueur + regex) et valide si vraie
    if (inputFirstName.value.length > 1 && regexName.test(inputFirstName.value) === true) {
      setForSuccess(inputFirstName, errorFirstName, validateFirstName);
    } else {
      setForError(inputFirstName, errorFirstName, validateFirstName);
    }
    // en parallèle de la validation ou invalidation par "if else", gère l'activation ou désactivation du bouton "C'est partie" !
    changeStateButton();
  });
};
// Ecoute la modification de nom à fin de validation ou invalidation et changement d'aspect du bouton et de son activation
const validateLastName = () => {
  formAll.last.addEventListener("input", () => {
    // teste la condition (longueur + regex) et valide si vraie
    if (inputLastName.value.length > 1 && regexName.test(inputLastName.value) === true) {
      setForSuccess(inputLastName, errorLastName, validateLastName);
    } else {
      setForError(inputLastName, errorLastName, validateLastName);
    }
    // en parallèle de la validation ou invalidation par "if else", gère l'activation ou désactivation du bouton "C'est partie" !
    changeStateButton();
  });
};

// Ecoute la modification de email à fin de validation ou invalidation et changement d'aspect du bouton et de son activation
const validateEmail = () => {
  formAll.email.addEventListener("input", () => {
    // teste la condition (regex) et valide si vraie
    if (regexpEmail.test(inputEmail.value)) {
      setForSuccess(inputEmail, errorEmail, validateEmail);
    } else {
      setForError(inputEmail, errorEmail, validateEmail);
    }
    // en parallèle de la validation ou invalidation par "if else", gère l'activation ou désactivation du bouton "C'est partie" !
    changeStateButton();
  });
};

// Ecoute la modification de birthdate à fin de validation ou invalidation et changement d'aspect du bouton et de son activation
const validateBirthdate = () => {
  formAll.birthdate.addEventListener("input", () => {
    // teste la condition (regex) et valide si vraie
    if (regexDate.test(inputBirthdate.value)) {
      setForSuccess(inputBirthdate, errorBirthdate, validateBirthdate);
    } else {
      setForError(inputBirthdate, errorBirthdate, validateBirthdate);
    }
    // en parallèle de la validation ou invalidation par "if else", gère l'activation ou désactivation du bouton "C'est partie" !
    changeStateButton();
  });
};

// Ecoute la modification de quantity à fin de validation ou invalidation et changement d'aspect du bouton et de son activation
const validateQuantity = () => {
  formAll.quantity.addEventListener("input", () => {
    // teste la condition (regex) et valide si vraie
    if (regexNumber.test(inputQuantity.value)) {
      setForSuccess(inputQuantity, errorQuantity, validateQuantity);
    } else {
      setForError(inputQuantity, errorQuantity, validateQuantity);
    }
    // en parallèle de la validation ou invalidation par "if else", gère l'activation ou désactivation du bouton "C'est partie" !
    changeStateButton();
  });
};

// Ecoute si une ville est sélectionnée
const validateLocation = () => {
  // une variable est créée pour accueillir une valeur (celle de la ville choisie) afin de gérer plus facilement la validation de cette partie
  let locationValue;
  // Ecoute si une ville a été sélectionée au clic parmi les éléments du tableau "listRadioLocation" à fin de validation ou invalidation et changement d'aspect du bouton et de son activation
  listRadioLocation.forEach((location) => {
    location.addEventListener("click", () => {
      // si l'une des villes est sélectionnée,
      if (location.checked) {
        // la valeur de cette ville est envoyé dans la variable "locationValue"
        locationValue = location.value;
      }
      // si une valeur est contenue dans "locationValue"
      if (locationValue) {
        // alors la fonction "validateLocation" est vraie et aucune erreur n'est affichée
        validateLocation.value = true;
        errorLocation.style.visibility = "hidden";
        // dans le cas contraire, la fonction "validateLocation" est fausse et on affiche une erreur
      } else {
        validateLocation.value = false;
        errorLocation.style.visibility = "visible";
      }
      // en parallèle de la validation ou invalidation par "if else", gère l'activation ou désactivation du bouton "C'est partie" !
      changeStateButton();
    });
  });
};

// Ecoute la modification de condition à fin de validation ou invalidation et changement d'aspect du bouton et de son activation
const validateCondition = () => {
  // on initialise la condition à "true" puisque la case est cochée par défault
  validateCondition.value = true;
  // malgré cela, nous allons écouter si un changement se produit !!
  formAll.checkbox1.addEventListener("change", () => {
    // si la case des conditions est bien cochée (checked), cela valide cette partie du formulaire sans aucune erreur à afficher
    if (inputCondition.checked === true) {
      errorCondition.style.visibility = "hidden";
      validateCondition.value = true;
      // sinon, cette partie n'est pas validée et une erreur est affichée
    } else {
      errorCondition.style.visibility = "visible";
      validateCondition.value = false;
    }
    // en parallèle de la validation ou invalidation par "if else", gère l'activation ou désactivation du bouton "C'est partie" !
    changeStateButton();
  });
};

//=========================== VALIDATION DES INPUTS ==============================//
//=================== APPEL DE FONCTION DES VALIDATION D'INPUT ===================//
// cette patie appelle toutes les fonctions afin de les vérifier pour validation par la suite (nous aurions pu tout aussi bien les inclure dans la partie "validation du formulaire". C'est surtout pour une question de clareté concernant la lecture du code)
validateFirstName();
validateLastName();
validateEmail();
validateBirthdate();
validateQuantity();
validateCondition();
validateLocation();

//====================================== VALIDATION DU FORMULAIRE ==================================//
// VERIFICATION DE LA VALIDITÉ DE CHAQUE ÉLÉMENT DE FORMULAIRE
// cette fonction permet de boucler tant que toutes les conditions ne sont pas "true"
// C'est pour cette raison que ses appels de fonction dans chaque fonction de validation (validateFirstName, validateLastName, etc..) sont dans l'addEventListener mais en dehors des "if else".
// Sinon cette fonction prendrait une valeur définitive (true ou false) qui invaliderait le formulaire si une seule erreur est commise à un moment ou un autre, ou le validerait dans le cas contraire !
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
  // si cette variable est "true" après contrôle des éléments du formulaire par la fonction "changeStateButton",
  // la modal du formulaire est fermée et celle de remerciement s'ouvre !
  if (isValidForm) {
    closeModal();
    thanksOpenModal();
  }
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
