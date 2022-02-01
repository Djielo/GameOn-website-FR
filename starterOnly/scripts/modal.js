const modalbg = document.querySelector(".bground");

//===================== REMOTE RESPONSIVE MENU ====================//
function editNav() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//====================+=== LAUNCH MODAL FORM =======================//
// Open modal by click on button
function launchModal() {
    modalbg.style.display = "block";
}


//======================= CLOSE MODAL FORM =======================//
// Close modal by cross
function closeModal() {
    modalbg.style.display = "none";
}



//======================= CONTROL VALUE ELEMENT ========================//

export {editNav, launchModal, closeModal};