if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Hyper Link component for A-Frame.
 */
AFRAME.registerComponent('href', {
  schema: {
    default: ''
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function() {
    var url = this.data;
    this.el.addEventListener('click', function() {
      console.log('link to ' + url);
      if (url && url[0] === '#') { // in-page anchor
        var ele = document.querySelector(url);
        var cams = document.querySelectorAll('a-camera')
        if (ele && cams) {
          var targetPosition = ele.getAttribute('position');
          console.log('focus camera to position:' +
            JSON.stringify(targetPosition));
          cams[0].setAttribute('position', targetPosition);
          window.location.hash = url;
        } else {
          console.log('#id or a-camera is not defined');
        }
      } else { // normal hyper link
        window.location.href = url;
      }
    });
  }
});
