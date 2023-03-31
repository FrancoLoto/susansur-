// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


// Selecciones para Barra de navegación hamburguesa

const burger = document.getElementById("burger-menu");
const navegacion = document.querySelector(".navegacion");


burger.addEventListener("click", () => {
  navegacion.classList.toggle("show");
});


// Cerrar el menú de hambuguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navegacion.classList.remove("show");
})
);

