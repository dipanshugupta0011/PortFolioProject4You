//this is use for only home slider page//////////////////////////////
let counter = 1;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].clientWidth;

setInterval(() => {
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  counter++;

  if (counter === slides.length) {
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(0)`;
      counter = 1;
    }, 1000);
  }
}, 3000);
