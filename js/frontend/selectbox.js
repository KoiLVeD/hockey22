import Choices from 'choices.js';
import SimpleBar from 'simplebar';

const choices = new Choices('.js-choice', {
  searchEnabled: false,
  searchChoices: false,
  placeholder: false,
  itemSelectText: '',
  classNames: {
    containerOuter: 'choices selectbox',
    listDropdown: 'choices__list--dropdown js-list-scroll',
  },
  callbackOnInit: function() {

    let menuList = document.querySelector('.js-list-scroll > div');

    const simpleBar = new SimpleBar(menuList);
  }
});
