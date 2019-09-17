import SimpleBar from 'simplebar';

document.addEventListener('DOMContentLoaded', function() {
  let mobileMenu = document.querySelector('.js-mobile-menu');
  let headerBlock = document.querySelector('.b-header');
  let btnShowPlayers = document.querySelectorAll('.js-show-player');
  let btnClosePlayers = document.querySelectorAll('.js-close-player');

  mobileMenu.addEventListener('click', function() {
    headerBlock.classList.toggle('active')
  });

  let scrollbar = document.querySelector('.js-scrollbar');

  if (scrollbar) {
    const simpleBar = new SimpleBar(scrollbar);
  }

  [...btnShowPlayers].forEach((button) => {
    button.addEventListener('click', () => {
      button.nextElementSibling.classList.add('b-teams__player-box--show')
    });
  });
  [...btnClosePlayers].forEach((button) => {
    button.addEventListener('click', () => {
      button.parentNode.classList.remove('b-teams__player-box--show')
    });
  });

  function clickOutside(e) {
    if (e.target.classList.contains('js-show-player')) {
      return
    }

    let boxs = document.querySelectorAll('.b-teams__player-box');

    [...boxs].forEach((box) => {
      const inside = box.contains(e.target);
      if (!inside) {
        box.classList.remove('b-teams__player-box--show')
      }
    });
  }

  document.addEventListener('click', clickOutside, false);

  let buttonPlayVideo = document.querySelector('.js-play-video');

  buttonPlayVideo.addEventListener('click', function() {
    let videoTag = buttonPlayVideo.nextElementSibling;
    buttonPlayVideo.classList.add('hidden')
    videoTag.setAttribute('controls', 'controls')
    videoTag.play()
  });
});

