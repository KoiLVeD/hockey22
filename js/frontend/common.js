document.addEventListener('DOMContentLoaded', function () {
  let mobileMenu = document.querySelector('.js-mobile-menu');
  let headerBlock = document.querySelector('.b-header');

  mobileMenu.addEventListener('click', function () {
    headerBlock.classList.toggle('active')
  });
});
