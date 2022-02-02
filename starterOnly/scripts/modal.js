const modalbg = document.querySelector(".bground");

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

//======================= EXPORT =========================//
export { launchModal, closeModal };