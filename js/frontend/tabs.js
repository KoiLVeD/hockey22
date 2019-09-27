// require('jquery-mousewheel');
// require('malihu-custom-scrollbar-plugin');

// $(document).ready(function () {
//   let linkTab = $('.js-tab-item > div');
//   let elClosest = '.js-tab';
//
//   linkTab.on('click', function (e) {
//     let $this = $(this);
//     let tabActive = $this.closest(elClosest).find('.js-tab-item');
//     let contentTab = $this.closest(elClosest).find('.js-tab-contents .js-tab-content');
//
//     tabActive.find('div').removeClass('tab__item--active');
//     $this.addClass('tab__item--active');
//     let clickedTab = tabActive.find('.tab__item--active');
//
//     contentTab.removeClass('active');
//     let clickedTabIndex = clickedTab.index();
//
//     contentTab.eq(clickedTabIndex).addClass('active');
//   });
//
// });

$(document).ready(function () {
  let linkTab = $('.js-tabs-items').children();
  let elClosest = '.js-tabs-container';

  linkTab.on('click', function (e) {
    let $this = $(this);
    let tabActive = $this.closest(elClosest).find('.js-tabs-items');
    let contentTab = $this.closest(elClosest).find('.js-tabs-contents').children();
    let isAllVersion = tabActive.find('.is-all')[0];

    tabActive.children().removeClass('is-active');
    $this.addClass('is-active');
    let clickedTab = tabActive.find('.is-active');
    let isAllTab = $this.hasClass('is-all');

    contentTab.removeClass('is-active');
    if (!isAllTab) {
      let clickedTabIndex = isAllVersion ? clickedTab.index() - 1 : clickedTab.index();

      contentTab.eq(clickedTabIndex).addClass('is-active');
    } else {
      contentTab.addClass('is-active');
    }
  });
});
