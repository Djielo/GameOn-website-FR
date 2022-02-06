//=====================================================//
//================= RESPONSIVE MENU ===================//
const burgerButton = document.querySelector("#burger");
burgerButton.addEventListener("click", editNav);

function editNav() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
