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

  boundClickHandler: undefined,

  clickHandler: function href_clickHandler(url) {
    var url = this.data;
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
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function() {
    // var url = this.data;
    this.boundClickHandler = this.clickHandler.bind(this);
    this.el.addEventListener('click', this.boundClickHandler);
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
    this.el.removeEventListener('click', this.boundClickHandler);
  }
});
