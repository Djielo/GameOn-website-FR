import { formAll } from "./main.js";
import { validateFirstName } from "./main.js";
import { validateLastName } from "./main.js";
import { validateEmail } from "./main.js";
import { validateBirthdate } from "./main.js";
import { validateQuantity } from "./main.js";
import { validateCity } from "./main.js";
import { validateCondition } from "./main.js";

//======================= VALIDATE FORM ========================//
// Permet de vérifier si chaque champ du fomulaire est valide // Renvoi vers l'acceptation de validation (fonction1) ou affichage des erreurs  (fonction2)
export function validateForm() {
    const inputFormContent = new FormData(formAll);
    const inputFirst = inputFormContent.get("first");
    // console.log(inputFirst);
    const inputLast = inputFormContent.get("last");
    // console.log(inputLast);
    const inputEmail = inputFormContent.get("email");
    const inputBirthdate = inputFormContent.get("birthdate");
    const inputQuantity = inputFormContent.get("quantity");
    const inputCity = inputFormContent.get("city");
    const inputCondition = inputFormContent.get("condition");
    if (
        validateFirstName(inputFirst) &&
        validateLastName(inputLast) &&
        validateEmail(inputEmail) &&
        validateBirthdate(inputBirthdate) &&
        validateQuantity(inputQuantity) &&
        validateCity(inputCity) &&
        validateCondition(inputCondition)
    ) {
        console.log("tous les champs sont valides");
    } else {
        console.log("un champ ou plus est invalide");
    }
}
//
//
//
//
//
//
// export function validateForm() {
//     let formOK = [];
//     const inputFormContent = new FormData(formAll);
//     const inputFirst = inputFormContent.get("first");
//     // // console.log(inputFirst);
//     // const inputLast = inputFormContent.get("last");
//     // // console.log(inputLast);
//     const inputEmail = inputFormContent.get("email");
//     // const inputBirthdate = inputFormContent.get("birthdate");
//     // const inputQuantity = inputFormContent.get("quantity");
//     // const inputCity = inputFormContent.get("city");
//     // const inputCondition = inputFormContent.get("condition");
     
//     formOK.push(validateFirstName(inputFirst));
//         // validateLastName(inputLast) &&
//         formOK.push(validateEmail(inputEmail));
//         // validateBirthdate(inputBirthdate) &&
//         // validateQuantity(inputQuantity) &&
//         // validateCity(inputCity) &&
//         // validateCondition(inputCondition)
//      if(!formOK.includes(false)) {
//         console.log("tous les champs sont valides");
//     } else {
//         console.log("un champ ou plus est invalide");
//     }
// }