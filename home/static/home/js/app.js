// funcionalidad de desplazar hacia arriba
var desplazarseHaciaArriba = document.getElementById("desplazarse-hacia-arriba");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    desplazarseHaciaArriba.classList.add("show");
  } else {
    desplazarseHaciaArriba.classList.remove("show");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

