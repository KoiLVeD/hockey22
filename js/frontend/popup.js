import tingle from 'tingle.js'

const modalCalendar = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'],
  cssClass: ['custom-popup', 'custom-popup--lg'],
  onOpen: function() {
    console.log('modal open');
  },
  onClose: function() {
    console.log('modal closed');
  },
  beforeClose: function() {
    return true; // close the modal
    return false; // nothing happens
  }
});

const modalNews = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'],
  cssClass: ['custom-popup', 'custom-popup--sm'],
  beforeClose: function() {
    return true; // close the modal
    return false; // nothing happens
  }
});

let closeBtn = '.js-close-popup';
document.addEventListener('click', function (event) {
  const target = event.target
  if (target.matches(closeBtn)) {
    modalNews.close();
    modalCalendar.close();
  }
})
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

// if (closeMoreBtn) {
//   closeMoreBtn.addEventListener('click', function() {
//     closeMoreBtn.parentNode.parentNode.classList.remove('active')
//   });
// }
let showMoreGamesBtn = '.js-show-more-games';
let closeMoreBtn = '.js-close-more-games';

document.addEventListener('click', function (event) {
  const target = event.target
  const games = target.closest('.games')
  const close = target.closest('.b-calendar__more-back')

  if (games && games.matches(showMoreGamesBtn)) {
    let moreGamesBlock = document.querySelector('.b-calendar__more-games');
    moreGamesBlock.classList.add('active')
  }

  if (close && close.matches(closeMoreBtn)) {
    close.parentNode.parentNode.classList.remove('active')
  }
})
/* ----------------------------------------------------------- */
/* Новости */
/* ----------------------------------------------------------- */
let newsBtn = document.querySelector('.js-news-popup');
if (newsBtn) {
  newsBtn.addEventListener('click', function(){
    modalNews.open();
    modalNews.setContent(document.querySelector('.b-popup').innerHTML);
  });
}
/* ----------------------------------------------------------- */
/* Статистика матча*/
/* ----------------------------------------------------------- */
let statisticGamesBtn = document.querySelectorAll('.js-statistic-popup');
[...statisticGamesBtn].forEach((button) => {
  button.addEventListener('click', () => {
    modalNews.open();
    modalNews.setContent(document.querySelector('.b-popup--statistic-game').innerHTML);
  });
});
/* ----------------------------------------------------------- */
/* Команды */
/* ----------------------------------------------------------- */
let teamsBtn = document.querySelectorAll('.js-teams-popup');
[...teamsBtn].forEach((button) => {
  button.addEventListener('click', () => {
    modalNews.open();
    modalNews.setContent(document.querySelector('.b-popup--teams').innerHTML);

  });
});
/* ----------------------------------------------------------- */
/* Статистика игрока */
/* ----------------------------------------------------------- */
let statisticPlayerBtn = '.js-statistic-player-popup';
// [...statisticPlayerBtn].forEach((button) => {
//   button.addEventListener('click', () => {
//     modalNews.open();
//     modalNews.setContent(document.querySelector('.b-popup--statistic-player').innerHTML);
//   });
// });
document.addEventListener('click', function (event) {
  const target = event.target
  if (target.matches(statisticPlayerBtn)) {
    modalNews.open();
    modalNews.setContent(document.querySelector('.b-popup--statistic-player').innerHTML);
  }
})


