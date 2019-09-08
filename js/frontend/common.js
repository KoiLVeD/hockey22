document.addEventListener('DOMContentLoaded', function () {
  let mobileMenu = document.querySelector('.js-mobile-menu');
  let bgWrap = document.querySelector('.b-header__mobile-bg');
  let circleBg = document.querySelector('.b-header__circle-btn');
  let menuList = document.querySelector('.b-header__menu');
  mobileMenu.addEventListener('click', function () {
    this.classList.toggle('open')
    bgWrap.classList.toggle('active')
    circleBg.classList.toggle('active')
    menuList.classList.toggle('active')
  });
});
