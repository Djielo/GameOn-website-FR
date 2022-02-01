import { formAll } from "./main.js";

//================== REGEXP =======================//
const regexName = /\w$/;
const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
const regexDate = /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
const regexNumber = /^[1-9]$/;

//======================= VALIDATE FORM ========================//
// Permet de vérifier si chaque champ du fomulaire est valide // Renvoi vers l'acceptation de validation (fonction1) ou affichage des erreurs  (fonction2)
export function validateForm() {
    const inputFormContent = new FormData(formAll);
    const first = inputFormContent.get("first");
    console.log(first);
    const last = inputFormContent.get("last");
    const email = inputFormContent.get("email");
    const birthdate = inputFormContent.get("birthdate");
    const quantity = inputFormContent.get("quantity");
    const city = inputFormContent.get("city");
    const condition = inputFormContent.get("condition");
    if (
        validateFirstName(first) &&
        validateLastName(last) &&
        validateEmail(email) &&
        validateBirthdate(birthdate) &&
        validateQuantity(quantity) &&
        validateCity(city) &&
        validateCondition(condition)
    ) {
        console.log("tous les champs sont valides");
    } else {
        console.log("un champ ou plus est invalide");
    }
}
