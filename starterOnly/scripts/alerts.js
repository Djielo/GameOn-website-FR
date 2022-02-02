export function resetAlerts() {
    const formFields = document.getElementsByClassName('formData');
    Array.from(formFields).forEach((el) => {
      el.setAttribute("data-error-visible", false);
      el.setAttribute("data-valid",  false);
      el.removeAttribute("data-error");
    });
  }

export function showAlerts(validList, invalidList) {
    validInput(validList);
    invalidInput(invalidList);
};

function validInput(validList) {
    validList.forEach((id) => {
        document.getElementById(id+'Field').setAttribute('data-valid', true);
    });
}

function invalidInput(invalidList) {
    const errorMessages = {
      'firstName': "Veuillez entrer 2 caractères ou plus pour le prénom.", 
      'lastName': "Veuillez entrer 2 caractères ou plus pour le nom.",
      'emailAddress': "Veuillez entrer une adresse email valide.",
      'birthDate': "Vous devez avoir 1 an minimum pour participer.",
      'participationOccurence': "Veuillez entrer une valeur comprise entre 0 et 99.",
      'cityParticipation': "Veuillez sélectionner une ville.",
      'terms': "Veuillez accepter les conditions d'utilisation.",
    };

    invalidList.forEach((id) => {
        document.getElementById(id+'Field').setAttribute('data-error-visible', true);
        document.getElementById(id+'Field').setAttribute('data-error', errorMessages[id]);
    });
  }