/* Menú Hamburguesa */
var toggleButton = document.getElementById("button-menu");
let nav = document.getElementById("nav");
let div;
let divLogo = document.getElementById("logotipo");
crearMenu();

function crearMenu() {
  div = document.createElement("div");

  let logo = document.createElement("img");
  let inicio = document.createElement("a");
  let proyectos = document.createElement("a");
  let cv = document.createElement("a");
  let sobreMi = document.createElement("a");
  let contacto = document.createElement("a");
  let busqueda = document.createElement("form");
  let busquedaInput = document.createElement("input");
  let busquedaBtn = document.createElement("button");

  div.setAttribute("class", "nav-links");

  logo.setAttribute("src", "img/logotipo.svg");
  logo.setAttribute("alt", "logotipo");
  logo.setAttribute("class", "animate__animated animate__fadeInRight");
  inicio.setAttribute("class", "link-underline nav-item");
  inicio.setAttribute("href", "#inicioH2");
  proyectos.setAttribute("class", "link-underline nav-item");
  proyectos.setAttribute("href", "#proyectoH2");
  cv.setAttribute("class", "link-underline nav-item");
  cv.setAttribute("href", "#cvH2");
  sobreMi.setAttribute("class", "link-underline nav-item");
  sobreMi.setAttribute("href", "#sobremiH2");
  contacto.setAttribute("class", "link-underline nav-item");
  contacto.setAttribute("href", "#contactoH2");
  //busqueda.setAttribute("action", "index.html");
  //busquedaInput.setAttribute("type", "text");
  //busquedaInput.setAttribute("placeholder", "¿Qué quieres buscar?");
  //busquedaInput.setAttribute("name", "search");
  //busquedaBtn.setAttribute("type", "submit");


  inicio.innerText = "Inicio";
  proyectos.innerText = "Proyectos";
  cv.innerText = "CV";
  sobreMi.innerText = "Sobre mí";
  contacto.innerText = "Contacto";
  //busquedaBtn.innerText = "Buscar";

  divLogo.appendChild(logo);
  div.appendChild(inicio);
  div.appendChild(proyectos);
  div.appendChild(cv);
  div.appendChild(sobreMi);
  div.appendChild(contacto);
  //busqueda.appendChild(busquedaInput);
  //busqueda.appendChild(busquedaBtn);
  //div.appendChild(busqueda);
  nav.appendChild(div);
}

//var x=0;
toggleButton.addEventListener("click", () => {
  if (nav.hasChildNodes()) {
    nav.classList.toggle("show");
    toggleButton.classList.toggle("close");
    //x++;
    //console.log(x);
    //if (x==2) {
    //  div.remove();
    //  x=0;
    //}
  } else {
    //console.log(nav.hasChildNodes());
    //crearMenu();
    nav.classList.toggle("show");
    toggleButton.classList.toggle("close");
    //x++;
  }
});

nav.addEventListener("click", (e) => {
  if (e.target.id === "nav") {
    nav.classList.remove("show");
    toggleButton.classList.remove("close");
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
document
  .querySelectorAll("form input:not(input[type='submit'])")
  .forEach((e) => {
    e.addEventListener("focus", PalabrasRadiantes, false);
  });

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

email.addEventListener("keyup", function (event) {
  if (event.getModifierState("Shift")) {
    alert("¡Has introducido una mayúscula!");
  }
});

function validar(e) {
  if (
    username.validity.valid &&
    apellido.validity.valid &&
    /@/.test(email.value)
  ) {
    if (
      !confirm(
        "El formulario será enviado, ¿estás seguro de los campos rellenados?"
      )
    ) {
      e.preventDefault();
      console.log("Rechazado.");
    } else {
      console.log("Formulario validado y enviado.");
    }
  } else {
    alert("El formulario no está correctamente validado");
  }
}

/* Dialog */

(function () {
  var detalles = document.getElementById("detalles");
  var cancelButton = document.getElementById("cancel");
  var digContacto = document.getElementById("digContacto");

  detalles.addEventListener("click", function () {
    digContacto.showModal();
  });

  cancelButton.addEventListener("click", function () {
    digContacto.close();
  });
})();


function CambiarVideo(url){
  document.getElementById('videosTestimonios').src=url;
}