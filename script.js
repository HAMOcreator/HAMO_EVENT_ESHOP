
const truckImages = ['truck1.png', 'truck2.png', 'truck3.png', 'truck4.png'];
let current = 0;
const img = document.getElementById('rotatingImage');

function showNextImage() {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = truckImages[current];
    img.style.transform = 'rotate(0deg)';
    img.style.opacity = 1;
    setTimeout(() => {
      img.style.transform = 'rotate(360deg)';
    }, 100);
    current = (current + 1) % truckImages.length;
  }, 500);
}

setInterval(() => {
  showNextImage();
}, 10000);

window.onload = showNextImage;
