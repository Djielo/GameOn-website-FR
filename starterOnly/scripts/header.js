//=================================================================//
//================= HEADER CALLED IN HTML BY ID ===================//
document.getElementById("menu").innerHTML = `<nav class="topnav" id="myTopnav">
  <div class="header-logo"></div>
  <img alt="logo" src="./assets/img/Logo.png" class="logo" />
  <div class="main-navbar">
    <a href="#" class="active">
      <span>Accueil</span>
    </a>
    <a href="#">
      <span>Détails de l'évènement</span>
    </a>
    <a href="#">
      <span>À propos</span>
    </a>
    <a href="#">
      <span>Contact</span>
    </a>
    <a href="#">
      <span>Évènements passés</span>
    </a>
    <a href="#" class="icon" id="burger">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</nav>`;

//=====================================================//
//================= RESPONSIVE MENU ===================//
const burgerButton = document.querySelector("#burger");
burgerButton.addEventListener("click", editNav);

function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
