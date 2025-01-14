bars = document.querySelector(".bars");
bars.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}
let currentSlide = 0;

function showSlide(index) {
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const totalSlides = slides.length;
const visibleSlides = 3; // Número de imágenes visibles al mismo tiempo

  // Asegúrate de que el índice esté dentro del rango de imágenes
if (index >= totalSlides / visibleSlides) {
    currentSlide = 0; // Si llega al final, vuelve al principio
} else {
    currentSlide = index;
}

  // Mueve el slider para mostrar el grupo correcto de imágenes
  slider.style.transform = `translateX(-${currentSlide * 100 / visibleSlides}%)`;
}

function autoSlide() {
currentSlide++;
showSlide(currentSlide);
}

// Configura el intervalo de tiempo (por ejemplo, cada 3 segundos)
setInterval(autoSlide, 3000);