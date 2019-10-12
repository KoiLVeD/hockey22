$(document).ready(function () {
  let linkTab = $('.js-tabs-items').children();
  let elClosest = '.js-tabs-container';

  $(document).on('click', '.js-tabs-items > *', function (e) {
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
