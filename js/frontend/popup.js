import tingle from 'tingle.js'

const modalCalendar = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'],
  cssClass: ['custom-popup', 'custom-popup--calendar'],
  beforeClose: function() {
    return true; // close the modal
    return false; // nothing happens
  }
});

const modalTypeLg = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'],
  cssClass: ['custom-popup', 'custom-popup--lg'],
  beforeClose: function() {
    return true; // close the modal
    return false; // nothing happens
  }
});

const modalTypeSm = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'],
  cssClass: ['custom-popup', 'custom-popup--sm'],
  beforeClose: function() {
    return true; // close the modal
    return false; // nothing happens
  }
});


/* ----------------------------------------------------------- */
/* Календарь */
/* ----------------------------------------------------------- */
let calendarBtn = document.querySelector('.js-calendar-popup');
if (calendarBtn) {
  calendarBtn.addEventListener('click', function(){
    modalCalendar.open();
  });
  modalCalendar.setContent(document.querySelector('.b-popup--calendar').innerHTML);
}
document.addEventListener('click', function (event) {
  const target = event.target
  if (target.matches('.js-close-calendar')) {
    modalCalendar.close();
  }
})

document.addEventListener('click', function (event) {
  const target = event.target;
  const games = target.closest('.games');
  const close = target.closest('.b-calendar__more-back');

  if (games && games.matches('.js-show-more-games') || target.matches('.js-show-more-games')) {
    let moreGamesBlock = document.querySelector('.b-calendar__more-games');
    moreGamesBlock.classList.add('active')
  }

  if (close && close.matches('.js-close-more-games')) {
    close.parentNode.parentNode.classList.remove('active')
  }
});
/* ----------------------------------------------------------- */
/* Новости */
/* ----------------------------------------------------------- */
let newsBtn = document.querySelectorAll('.js-news-popup');
[...newsBtn].forEach((button) => {
  button.addEventListener('click', function() {
    modalTypeSm.open();
    modalTypeSm.setContent(document.querySelector('.b-popup--news').innerHTML);
  });
});

document.addEventListener('click', function (event) {
  const target = event.target;
  console.log(target);

  /* ----------------------------------------------------------- */
  /* Статистика игрока */
  /* ----------------------------------------------------------- */
  if (target.matches('.js-statistic-player-popup')) {
    modalTypeSm.open();
    modalTypeSm.setContent(document.querySelector('.b-popup--statistic-player').innerHTML);
  }
  /* ----------------------------------------------------------- */
  /* Статистика матча*/
  /* ----------------------------------------------------------- */
  if (target.matches('.js-statistic-popup')) {
    modalTypeSm.open();
    modalTypeSm.setContent(document.querySelector('.b-popup--statistic-game').innerHTML);
  }
  /* ----------------------------------------------------------- */
  /* Закрытия попапов*/
  /* ----------------------------------------------------------- */
  if (target.matches('.js-close-popup-sm')) {
    modalTypeSm.close();
  }
  if (target.matches('.js-close-popup-lg')) {
    modalTypeLg.close();
  }
  /* ----------------------------------------------------------- */
  /* Команды */
  /* ----------------------------------------------------------- */
  if (target.closest('.js-teams-popup').matches('.js-teams-popup')) {
    modalTypeLg.open();
    modalTypeLg.setContent(document.querySelector('.b-popup--teams').innerHTML);
  }
});
