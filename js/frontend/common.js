import SimpleBar from 'simplebar';

document.addEventListener('DOMContentLoaded', function () {
  let mobileMenu = document.querySelector('.js-mobile-menu');
  let headerBlock = document.querySelector('.b-header');

  mobileMenu.addEventListener('click', function () {
    headerBlock.classList.toggle('active')
  });

  let scrollbar = document.querySelector('.js-scrollbar');

  const simpleBar = new SimpleBar(scrollbar);
});
