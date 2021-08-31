const btn = document.querySelector('.video__btn');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const sliderItemBtn = document.querySelectorAll('.slider__item-btn');
const modalImage = document.getElementById('modal-image');
const modalPicture = document.querySelector('.modal__body picture source');

btn.addEventListener('click', playVideo);

sliderItemBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    showModal(index);
  });
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) {
    closeModal();
  }
});

function playVideo() {
  video.setAttribute('src', 'https://www.youtube.com/embed/FyKWUTwSYAs?autoplay=1');
  video.style.zIndex = 1;
}

function showModal(index) {
  document.body.style.overflow = 'hidden';
  modal.classList.add('active');
  modalPicture.setAttribute('srcset', `img/picture${index + 1}.webp`);
  modalImage.setAttribute('src', `img/picture${index + 1}.jpg`);
}

function closeModal() {
  document.body.style = '';
  modal.classList.remove('active');
}

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
