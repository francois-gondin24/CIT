const slides = document.querySelectorAll('.slide');
console.log(slides);
let current = 0;

function showSlide(index) {
  
  slides.forEach((s, i) => s.classList.remove('active'));
  console.log(slides);
  slides[index].classList.add('active');
  console.log(slides);
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
showSlide(current);
setInterval(nextSlide, 3000); // 6 sec, ajuste si tu veux
