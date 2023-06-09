const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

// Funzione per passare allo slide successivo
function nextSlide() {
  slides[currentSlide].querySelector('video').pause();
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Funzione per passare allo slide precedente
function prevSlide() {
  slides[currentSlide].querySelector('video').pause();
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Event listener per i pulsanti Previous e Next
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Mostra il primo slide all'avvio
slides[currentSlide].classList.add('active');
