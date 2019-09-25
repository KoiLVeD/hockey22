import tingle from 'tingle.js'

const modalCalendar = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  cssClass: ['custom-popup', 'custom-popup--lg'],
  onOpen: function() {
    console.log('modal open');
  },
  onClose: function() {
    console.log('modal closed');
  },
  beforeClose: function() {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
    return false; // nothing happens
  }
});

const modalNews = new tingle.modal({
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'],
  cssClass: ['custom-popup', 'custom-popup--sm'],
});

let calendarBtn = document.querySelector('.js-calendar-popup');
if (calendarBtn) {
  calendarBtn.addEventListener('click', function(){
    modalCalendar.open();
  });
  modalCalendar.setContent(document.querySelector('.b-popup--calendar').innerHTML);

}

let newsBtn = document.querySelector('.js-news-popup');
if (newsBtn) {
  newsBtn.addEventListener('click', function(){
    modalNews.open();
  });
  modalNews.setContent(document.querySelector('.b-popup').innerHTML);
}

let closeBtn = document.querySelector('.js-close-popup');
if (closeBtn) {
  closeBtn.addEventListener('click', function(){
    modalNews.close();
    modalCalendar.close();
  });
}

let statisticGamesBtn = document.querySelectorAll('.js-statistic-popup-btn');

[...statisticGamesBtn].forEach((button) => {
  button.addEventListener('click', () => {
    modalNews.open();
  });
  modalNews.setContent(document.querySelector('.b-popup--statistic-game').innerHTML);
});

let teamsBtn = document.querySelectorAll('.js-teams-popup-btn');

[...teamsBtn].forEach((button) => {
  button.addEventListener('click', () => {
    modalNews.open();
  });
  modalNews.setContent(document.querySelector('.b-popup--teams').innerHTML);
});

let closeMoreBtn = document.querySelector('.js-close-more-games');

if (closeMoreBtn) {
  closeMoreBtn.addEventListener('click', function() {
    closeMoreBtn.parentNode.parentNode.classList.remove('active')
  });
}

let showMoreGamesBtn = document.querySelectorAll('.js-show-more-games');
let moreGamesBlock = document.querySelector('.b-calendar__more-games');

[...showMoreGamesBtn].forEach((button) => {
  button.addEventListener('click', () => {
    moreGamesBlock.classList.add('active')
  });
});

