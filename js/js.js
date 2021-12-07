/* Menú Hamburguesa */

const toggleButton = document.getElementById('button-menu');
const navWrapper = document.getElementById('nav');
/* let nav = document.createElement("nav");
nav.getAttribute("id","nav");
nav.getAttribute("class","main-nav");
let div = document.createElement("div");
div.getAttribute("class", "nav-links");
div.appendChild();
nav.appendChild(div);
 */

toggleButton.addEventListener('click',() => {
  navWrapper.classList.toggle('show');
});

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close');
});

navWrapper.addEventListener('click',e => {
    if(e.target.id === 'nav') {
      navWrapper.classList.remove('show');
      toggleButton.classList.remove('close');
    }
});


/* Validación de formulario */
var username = document.getElementById("username");
var email = document.getElementById("usermail");
var comment = document.getElementById("comentario");
comment.disabled = true;

/* username.onchange = cambioUser; */
email.onchange = cambioEmail;

if (username.validity && email.validity) {
  comment.disabled = false;
}

function cambioEmail(e) {
  if (email.validity.typeMismatch) {
    email.style.backgroundColor = "red";
    alert("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.style.backgroundColor = "#AAEEAA";
  }
  ;
}

email.addEventListener('keyup', function (event) {
  if (event.getModifierState('Shift') ) {
    alert("¡Has introducido una mayúscula!");
  }
});

