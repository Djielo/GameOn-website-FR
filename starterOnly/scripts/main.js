import { validateForm } from "./validation.js";
import { editNav, launchModal, closeModal } from "./modal.js";
import { editNav, launchModal, closeModal } from "./modal.js";

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

// On va chercher le formulaire dans le DOM
export const formAll = document.querySelector("#form");

// Permet d'éviter le rechargement de la page, de valider ou pas le formulaire et agir selon le résultat (affichage des erreurs ou validation du form)
function handleEvent(e) {
    e.preventDefault();
    validateForm();
}

// Je rajoute un écouteur pour savoir à quel moment le formuaire est soumis afin de lancer le controle de validation du formulaire
formAll.addEventListener("submit", handleEvent);

//
//
//
//
//
//
//
//
//
//===========================================================================//
//================== INPUTS CONTENT VALIDATION CONTROL ======================//
// On sélectionne ici les inputs qui contiennent une class text-control ou checkbox-input
// const inputs = document.querySelectorAll(`input[class="text-control"], input[class="checkbox-input"]`);

// On controle le contenu de chaque élément suivant un mode de validation qui lui est propre et qui valide la saisie dans les champs
// const textControl = (value, tag, name) => {
//     if (tag === "first" || tag === "last") {
//         // mettre le regexp à la place du value.length < 2 !
//         if (value.length < 2 && regexName.test(value) === true) {
//             console.log("yes");
//             errorDisplay(`#${tag}`, `Le ${name} doit avoir au moins 2 caractères`, false);
//             // résoudre le else pour enlever l'erreur !
//         } else {
//             errorDisplay(`#${tag}`, `Le ${name} doit avoir au moins 2 caractères`, true);
//             formData.setAttribute("data-error-visible", "true");
//         }
//     } else if (tag === "email") {
//         // mettre le regexp pour valider l'email, etc..
//         if (regexpEmail.test(value)) {
//             console.log("youpi !!");
//         } else {
//             console.log("dommage :-(");
//         }
//     }
// };

// inputs.forEach((input) => {
//     input.addEventListener("input", (e) => {
//         let inputValue = e.target.value;
//         let tag = e.target.id;
//         textControl(inputValue, tag);
//     });
// });

// // inputs.forEach((input) => {
// //     input.addEventListener("input", (e) => {
// //         console.log(e.target.checked);
// //     });
// // });

// // Fonction qui gère l'affichage des erreurs
// const errorDisplay = (tag, message, valid) => {
//     const formData = document.querySelector(`${tag}`);
//     const span = document.querySelector(".formData > span");

//     if (!valid) {
//         console.log(tag);
//         formData.classList.add("error");
//         span.textContent = message;
//     } else {
//         console.log("oui");
//         formData.classList.remove("error");
//     }
// };

// // Fonction qui gère le submit
// function controlInputs() {
//     const valid = false;
//     const first = document.getElementById("first");
//     const last = document.getElementById("last");
//     const email = document.getElementById("email");
//     const birthdate = document.getElementById("birthdate");
//     const quantity = document.getElementById("quantity");
//     const location1 = document.getElementById("location1");
//     const location2 = document.getElementById("location2");
//     const location3 = document.getElementById("location3");
//     const location4 = document.getElementById("location4");
//     const location5 = document.getElementById("location5");
//     const location6 = document.getElementById("location6");
//     const checkbox1 = document.getElementById("checkbox1");
//     if (first === true) {
//         console.log("dingue !");
//         // } else if {

//         // }
//     }
// }
