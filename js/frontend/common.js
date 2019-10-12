import SimpleBar from 'simplebar';

document.addEventListener('DOMContentLoaded', function() {
  let mobileMenu = document.querySelector('.js-mobile-menu');
  let headerBlock = document.querySelector('.b-header');

  mobileMenu.addEventListener('click', function() {
    headerBlock.classList.toggle('active')
  });

  /* ----------------------------------------------------------- */
  /* Скроллбар */
  /* ----------------------------------------------------------- */
  let scrollbar = document.querySelector('.js-scrollbar');
  let data = new Date();
  let year = data.getFullYear();
  let month = data.getMonth();
  let day = data.getDate();
  let aTag = $(`#${day}-${month}-${year}`);
  if (scrollbar) {
    const simpleBar = new SimpleBar(scrollbar);
    if (aTag.length) {
      let scrollEl = simpleBar.getScrollElement()
      $(scrollEl).animate({scrollTop: aTag.position().top}, 'slow');
    }
  }

  /* ----------------------------------------------------------- */
  /* Всплывающие окно играка в попапе */
  /* ----------------------------------------------------------- */
  let btnShowPlayers = '.js-show-player';
  let btnClosePlayers = '.js-close-player';

  document.addEventListener('click', function (event) {
    const target = event.target
    if (target.matches(btnShowPlayers)) {
      let teamBoxes = document.querySelectorAll('.b-teams__player-box');
      [...teamBoxes].forEach((box) => {
        box.classList.remove('b-teams__player-box--show')
      });
      target.nextElementSibling.classList.add('b-teams__player-box--show')
    }
    if (target.matches(btnClosePlayers)) {
      target.parentNode.classList.remove('b-teams__player-box--show')
    }
  })
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
  /* ----------------------------------------------------------- */
  /* Проигрование видео */
  /* ----------------------------------------------------------- */
  let buttonPlayVideo = document.querySelector('.js-play-video');
  if (buttonPlayVideo) {
    buttonPlayVideo.addEventListener('click', function() {
      let videoTag = buttonPlayVideo.nextElementSibling;
      buttonPlayVideo.classList.add('hidden')
      videoTag.setAttribute('controls', 'controls')
      videoTag.play()
    });
  }
});

