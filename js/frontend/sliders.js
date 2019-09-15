import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
  //let gameSlider = document.querySelector('.js-slider-games');

  var mySwiper = new Swiper ('.js-game-slider', {
    effect: 'fade',
    navigation: {
      nextEl: '.js-game-slider-prev',
      prevEl: '.js-game-slider-next',
    },
  })
});
