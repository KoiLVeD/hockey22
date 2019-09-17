import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
  //let gameSlider = document.querySelector('.js-slider-games');

  let gameSwiper = new Swiper('.js-game-slider', {
    effect: 'fade',
    navigation: {
      nextEl: '.js-game-slider-prev',
      prevEl: '.js-game-slider-next'
    }
  })

  let widthWindow = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;


  if (widthWindow > 1024) {
    var arenasSwiper = new Swiper('.js-arenas-slider', {
      slidesPerView: 3,
      spaceBetween: 35,
      navigation: {
        nextEl: '.js-arenas-slider-next',
        prevEl: '.js-arenas-slider-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
});
