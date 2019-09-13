window.onload = function() {
  const map = document.getElementById('map');
  const COORDS = [53.369351, 83.680710];

  if (map) {
    ymaps.ready(function() {
      var myMapD = new ymaps.Map('map', {
        center: COORDS,
        zoom: 16,
        controls: []
      });
      let content = ymaps.templateLayoutFactory.createClass(
        '<div class="map-icon"></div>'
      );
      let placemark = new ymaps.Placemark(COORDS, {}, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [50, 60],
        iconImageOffset: [-30, -70],
        iconContentOffset: [15, 15],
        iconContentLayout: content
      });
      myMapD.geoObjects.add(placemark);
      myMapD.behaviors.disable('scrollZoom');
    });
  }
};
