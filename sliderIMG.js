var slider = document.querySelector('.slider');
var images = slider.querySelectorAll('img');
var currentIndex = 0;

function showImage(index) {
  images.forEach(function(img) {
    img.classList.remove('active');
  });
  
  images[index].classList.add('active');
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Esempio di utilizzo di setInterval per cambiare l'immagine ogni 3 secondi
setInterval(nextImage, 3000);
