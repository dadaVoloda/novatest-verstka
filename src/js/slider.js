const sliderList = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const slidesLength = slides.length;
const next = document.querySelector('.slider__btn--next');
const prev = document.querySelector('.slider__btn--prev');

let index = 0;
let visibleSlides = 3;
let sliderWidth = sliderList.offsetWidth;
let slideWidth = sliderWidth / slidesLength;
let initialPosition;

next.addEventListener('click', () => switchSlide('next'));
prev.addEventListener('click', () => switchSlide('prev'));

sliderList.addEventListener('transitionend', checkIndex);

function switchSlide(arg) {
  sliderList.classList.add('transition');
  initialPosition = sliderList.offsetLeft;
  if (arg === 'next') {
    sliderList.style.left = `${initialPosition - slideWidth}px`;
    index++;
  } else {
    sliderList.style.left = `${initialPosition + slideWidth}px`;
    index--;
  }
}

function checkIndex() {
  sliderList.classList.remove('transition');

  if (index < 0) {
    sliderList.style.left = `-${(slidesLength - visibleSlides) * slideWidth}px`;
    index = slidesLength - visibleSlides;
  }
  if (index > slidesLength - visibleSlides) {
    sliderList.style.left = '0px';
    index = 0;
  }
}
