const gallery = document.querySelector('.gallery');
const track = document.querySelector('.gallery-track');
const cards = document.querySelectorAll('.card');
const easing = 0.05;
let startY = 0;
let endY = 0;
let raf;

const lerp = (start, end, t) => start * (1 - t) + end * t;

function updateScroll() {
  startY = lerp(startY, endY, easing);
  gallery.style.height = `${track.clientHeight}px`;
  track.style.transform = `translateY(-${startY}px)`;
  activateParallax();
  raf = requestAnimationFrame(updateScroll);
  if (Math.abs(startY - window.scrollY) < 0.1) cancelAnimationFrame(raf);
}

function startScroll() {
  endY = window.scrollY;
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(updateScroll);
}

function parallax(card) {
  const wrapper = card.querySelector('.card-image-wrapper');
  const diff = card.offsetHeight - wrapper.offsetHeight;
  const { top } = card.getBoundingClientRect();
  const progress = top / window.innerHeight;
  const yPos = diff * progress;
  wrapper.style.transform = `translateY(${yPos}px)`;
}

const activateParallax = () => cards.forEach(parallax);

function init() {
  activateParallax();
  startScroll();
}

window.addEventListener('load', updateScroll, false);
window.addEventListener('scroll', init, false);
window.addEventListener('resize', updateScroll, false);
// Obteniendo el modal
var modal = document.getElementById("myModal");

// Obteniendo el elemento de la imagen dentro del modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
let navbar = document.querySelector(".navbar");
// Asignando evento onclick a cada card
cards.forEach(card => {
  card.onclick = function () {
    var img = this.querySelector('img');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    navbar.style.display = "none";
    document.body.classList.add('modal-open'); // Añadir clase para ocultar scroll
    }
    });
    
    // Obteniendo el elemento <span> que cierra el modal
    var span = document.querySelector(".close");
    
    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function () {
      modal.style.display = "none";
      navbar.style.display = "flex";
      document.body.classList.remove('modal-open'); // Quitar clase para restaurar scroll
      }
      
      // También se puede cerrar el modal al hacer clic fuera de la imagen
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
          navbar.style.display = "flex";
    document.body.classList.remove('modal-open'); // Quitar clase para restaurar scroll
  }
}

