function Parallax(options) {
  options = options || {};
  this.nameSpaces = {
    wrapper: options.wrapper || '.js-parallax',
    layers: options.layers || '.js-parallax-layer',
    deep: options.deep || 'data-parallax-deep'
  };
  this.init = function() {
    var self = this;
    var parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
    for (var i = 0; i < parallaxWrappers.length; i++) {
      (function(i) {
        parallaxWrappers[i].addEventListener('mousemove', function(e) {
          var x = e.clientX;
          var y = e.clientY;
          var layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
          for (var j = 0; j < layers.length; j++) {
            (function(j) {
              var deep = layers[j].getAttribute(self.nameSpaces.deep);
              var disallow = layers[j].getAttribute('data-parallax-disallow');
              var itemX = (disallow && disallow === 'x') ? 0 : x / deep;
              var itemY = (disallow && disallow === 'y') ? 0 : y / deep;
              if (disallow && disallow === 'both') {
                return;
              }
              layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
            })(j);
          }
        })
      })(i);
    }
  };
  this.init();
  return this;
}

window.addEventListener('load', function() {
  if (!window.matchMedia('(max-width: 1200px)').matches) {
    new Parallax();
  }
});
