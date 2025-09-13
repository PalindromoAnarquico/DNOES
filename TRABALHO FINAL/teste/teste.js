const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const contGeral = document.querySelector('.contGeral');
let currentGroup = 0;
let intervalId;

const totalGroups = Math.ceil(slides.length / 3);

function moveToNextGroup() {
  currentGroup = (currentGroup + 1) % totalGroups;
  track.style.transform = `translateX(-${currentGroup * 100}%)`;
}

function startCarousel() {
  intervalId = setInterval(moveToNextGroup, 5000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

startCarousel();

contGeral.addEventListener('mouseenter', stopCarousel);
contGeral.addEventListener('mouseleave', startCarousel);