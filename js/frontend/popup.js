import tingle from 'tingle.js'

const modalCalendar = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  cssClass: ['custom-popup'],
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
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  cssClass: ['custom-popup', 'custom-popup--sm'],
});

let calendarBtn = document.querySelector('.js-calendar-popup');
if (calendarBtn) {
  calendarBtn.addEventListener('click', function(){
    modalCalendar.open();
  });
  modalCalendar.setContent(document.querySelector('.b-calendar').innerHTML);

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
