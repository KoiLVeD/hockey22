import Choices from 'choices.js';
import SimpleBar from 'simplebar';

document.addEventListener('DOMContentLoaded', function() {
  const choices = new Choices('.js-choice', {
    searchEnabled: false,
    searchChoices: false,
    placeholder: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices selectbox',
      listDropdown: 'choices__list--dropdown js-list-scroll'
    },
    callbackOnInit: function() {
      let menuList = document.querySelector('.js-list-scroll > div');
      const simpleBar = new SimpleBar(menuList);
    }
  });

  let isTab = document.querySelector('.js-choice-version-tab');

  if (isTab) {
    choices.passedElement.element.addEventListener('choice', function(value, keyCode) {
      const isTabVersion = this.classList.contains('js-choice-version-tab');
      if (isTabVersion) {
        const currentId = value.detail.choice.id
        let tabsContent = document.querySelector('.js-tabs-contents').children;
        [...tabsContent].forEach((content) => {
          content.classList.remove('is-active')
        });
        tabsContent[currentId - 1].classList.add('is-active')
      }
    }, false);
  }
});

