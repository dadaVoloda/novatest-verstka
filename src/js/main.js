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
