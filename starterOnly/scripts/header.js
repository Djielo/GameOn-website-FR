//=================================================================//
//================= HEADER CALLED IN HTML BY ID ===================//
// innerHTML injecte la balise "nav" dans le html appelé par l'id "menu" du html
document.getElementById("menu").innerHTML = `<nav class="topnav" id="myTopnav">
  <img alt="logo" src="./assets/img/Logo.png" class="header-logo" />  
  <div class="main-navbar">
    <a href="#" class="active"><span>Accueil</span></a>
    <a href="#"><span>Détails de l'évènement</span></a>
    <a href="#"><span>À propos</span></a>
    <a href="#"><span>Contact</span></a>
    <a href="#"><span>Évènements passés</span></a>
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
    // Injection de la classe "responsive" dans le html à partir du media-query 700px pour ouvrir le menu en cliquant sur le burger (menu)
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
