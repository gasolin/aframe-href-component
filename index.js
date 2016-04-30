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
      window.location.href = url;
    });
  }
});
