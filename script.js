const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

const updateSlider = () => {
  console.log(`Updating slider to index: ${currentIndex}`);
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const nextSlide = () => {
  console.log('Next slide button clicked.');
  currentIndex = (currentIndex + 1) % slideCount;
  console.log(`Next slide index: ${currentIndex}`);
  updateSlider();
};

const prevSlide = () => {
  console.log('Previous slide button clicked.');
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  console.log(`Previous slide index: ${currentIndex}`);
  updateSlider();
};

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

let autoSlide = setInterval(() => {
  console.log('Auto slide transitioning.');
  nextSlide();
}, 3000);

document.querySelector('.slider').addEventListener('mouseover', () => {
  console.log('Mouseover detected. Auto slide paused.');
  clearInterval(autoSlide);
});

document.querySelector('.slider').addEventListener('mouseout', () => {
  console.log('Mouseout detected. Auto slide resumed.');
  autoSlide = setInterval(() => {
    console.log('Auto slide transitioning.');
    nextSlide();
  }, 3000);
});

console.log('Initializing slider...');
updateSlider();


const menu = document.querySelector(".menu")
const sMenu =document.querySelector(".show-menu");
const closeMenu =document.querySelector(".close");


const showmenu= ()=>{
  menu.classList.add("dis-menu")
  sMenu.classList.add("remove-bar")
  closeMenu.classList.add("show-close")
  
}

const remmenu= ()=>{
  menu.classList.remove("dis-menu")
  closeMenu.classList.add("remove-close")
  closeMenu.classList.remove("show-close")
  sMenu.classList.remove("remove-bar")

}