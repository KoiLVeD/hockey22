// require('jquery-mousewheel');
// require('malihu-custom-scrollbar-plugin');

$(document).ready(function () {
  let linkTab = $('.js-tab-item > div');
  let elClosest = '.js-tab';

  linkTab.on('click', function (e) {
    let $this = $(this);
    let tabActive = $this.closest(elClosest).find('.js-tab-item');
    let contentTab = $this.closest(elClosest).find('.js-tab-content > div');

    tabActive.find('div').removeClass('tab__item--active');
    $this.addClass('tab__item--active');
    let clickedTab = tabActive.find('.tab__item--active');

    contentTab.removeClass('active');
    let clickedTabIndex = clickedTab.index();

    contentTab.eq(clickedTabIndex).addClass('active');
  });

  // let linkTabInner = $('.js-tab-item-inner > div');
  // let elClosestInner = '.js-tab-inner';
  //
  // linkTabInner.on('click', function (e) {
  //   let $this = $(this);
  //   let tabActive = $this.closest(elClosestInner).find('.js-tab-item-inner');
  //   let contentTab = $this.closest(elClosestInner).find('.js-tab-content-inner > div.b-main-tab__body-wrap');
  //
  //   tabActive.find('div').removeClass('active');
  //   $this.addClass('active');
  //   let clickedTab = tabActive.find('.active');
  //
  //   contentTab.removeClass('active');
  //   let clickedTabIndex = clickedTab.index();
  //
  //   contentTab.eq(clickedTabIndex).addClass('active');
  // });
  //
  // let $link = $('.js-table-tabs > button');
  //
  // $link.on('click', function() {
  //
  //   let $this = $(this);
  //   let $links = $this.parent().find('button');
  //   $('.js-scrollbar-table').mCustomScrollbar("scrollTo","left");
  //   $links.removeClass('active');
  //   $this.addClass('active');
  //
  //   let $contents = $this.parent().parent().find('.b-custom-table__wrap');
  //   let $current = $this.parent().parent().find(`[data-content=${$this.data('anchor')}]`);
  //
  //   $contents.removeClass('active');
  //   $current.addClass('active');
  // });
});
