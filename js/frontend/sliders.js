import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
  let gameSlider = document.querySelector('.js-slider-games');

  var mySwiper = new Swiper ('.js-slider-games', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
});
