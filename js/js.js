/* Menú Hamburguesa */
var toggleButton = document.getElementById('button-menu');
let nav = document.getElementById("nav");
let div;
crearMenu();

function crearMenu() {
  div = document.createElement("div");
  let inicio = document.createElement("a");
  let proyectos = document.createElement("a");
  let cv = document.createElement("a");
  let sobreMi = document.createElement("a");
  let contacto = document.createElement("a");
  
  div.setAttribute("class","nav-links");
  inicio.setAttribute("class", "link-underline nav-item");
  inicio.setAttribute("href", "#inicio");
  proyectos.setAttribute("class", "link-underline nav-item");
  proyectos.setAttribute("href", "#proyectos");
  cv.setAttribute("class", "link-underline nav-item");
  cv.setAttribute("href", "#cv");
  sobreMi.setAttribute("class", "link-underline nav-item");
  sobreMi.setAttribute("href", "#sobre-mi");
  contacto.setAttribute("class", "link-underline nav-item");
  contacto.setAttribute("href", "#contacto");
  
  inicio.innerText = "Inicio";
  proyectos.innerText = "Proyectos";
  cv.innerText = "CV";
  sobreMi.innerText = "Sobre mí";
  contacto.innerText = "Contacto";

  div.appendChild(inicio);
  div.appendChild(proyectos);
  div.appendChild(cv);
  div.appendChild(sobreMi);
  div.appendChild(contacto);
  nav.appendChild(div);
}

var x=0;
toggleButton.addEventListener('click',() => {
  if (nav.hasChildNodes()) {
    nav.classList.toggle('show');
    toggleButton.classList.toggle('close');
    x++;
    console.log(x);
    if (x==2) {
      div.remove();
      x=0;
    }
  } else {
    //console.log(nav.hasChildNodes());
    crearMenu();
    nav.classList.toggle('show');
    toggleButton.classList.toggle('close');
    x++;
  }
});

nav.addEventListener('click',e => {
    if(e.target.id === 'nav') {
      nav.classList.remove('show');
      toggleButton.classList.remove('close');
    }
});


/* Validación de formulario */
var username = document.getElementById("username");
var apellido = document.getElementById("apellido");
var email = document.getElementById("usermail");
var comment = document.getElementById("comentario");
comment.disabled = true;

email.onchange = cambioEmail;
email.onblur = disComment;
document.querySelectorAll("form input:not(input[type='submit'])").forEach((e) => 
                          { e.addEventListener("focus", PalabrasRadiantes, false); }); 

function PalabrasRadiantes(e) {
  var el = e.target;
  el.style.borderImage = "linear-gradient(#f6b73c, #4d9f0c) 1";
}

function disComment(e) {
  if (username.validity.valid && /@/.test(email.value)) {
    comment.disabled = false;
  } else {
    comment.disabled = true;
  }
}

function cambioEmail(e) {
  if (!/@/.test(email.value)) {
    email.style.backgroundColor = "red";
    alert("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.style.backgroundColor = "#AAEEAA";
  }
}

email.addEventListener('keyup', function (event) {
  if (event.getModifierState('Shift') ) {
    alert("¡Has introducido una mayúscula!");
  }
});

function validar(e) {
  if (username.validity.valid && apellido.validity.valid && /@/.test(email.value)) {
    if(!confirm("El formulario será enviado, ¿estás seguro de los campos rellenados?")) {
      e.preventDefault();
      console.log("Rechazado.");
    } else {
      console.log("Formulario validado y enviado.");
    }
  } else {
    alert("El formulario no está correctamente validado");
}};
