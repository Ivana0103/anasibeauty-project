


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
console.log(close);


navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


const slider = document.querySelector(".div-slider")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
let currentIndex = 0;

const nextSlide = (inc) => {
  const slides = document.getElementsByClassName("slide")
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  currentIndex=(currentIndex+slides.length+inc)%slides.length;
  slides[currentIndex].style.display = "block"
}

nextSlide(0)

nextBtn.addEventListener("click", () => {
  nextSlide(1)
})

prevBtn.addEventListener("click", () => {
  nextSlide(-1)
})
