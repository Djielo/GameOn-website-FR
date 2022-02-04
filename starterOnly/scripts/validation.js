// import { formAll } from "./main.js";
import { validateFirstName } from "./main.js";
import { validateLastName } from "./main.js";
import { validateEmail } from "./main.js";
import { validateBirthdate } from "./main.js";
import { validateQuantity } from "./main.js";
import { validateCondition } from "./main.js";

//======================= VALIDATE FORM ========================//
// Permet de vérifier si chaque champ du fomulaire est valide // Renvoi vers l'acceptation de validation (fonction1) ou affichage des erreurs  (fonction2)
export const validateForm = () => {
  if (
    validateFirstName.value &&
    validateLastName.value &&
    validateEmail.value &&
    validateBirthdate.value &&
    validateQuantity.value &&
    validateCondition.value
  ) {
    console.log("Afficher la modal de confirmation");
  } else {
    console.log(validateFirstName.value);
    console.log(validateLastName.value);
    console.log(validateEmail.value);
    console.log(validateBirthdate.value);
    console.log(validateQuantity.value);
    console.log(validateCondition.value);
  }
};
