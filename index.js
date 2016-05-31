/* globals AFRAME */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME' +
    ' was available.');
}

/**
 * Hyper Link component for A-Frame.
 */
AFRAME.registerComponent('href', {
  schema: {
    default: ''
  },

  boundClickHandler: undefined,

  clickHandler: function hrefClickHandler() {
    var url = this.data;
    var target = this.el.getAttribute('target');
    console.log('link to ' + url);
    if (url && url[0] === '#') { // in-page anchor
      var ele = document.querySelector(url);
      var cams = document.querySelectorAll('a-camera');
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
      if (target) {
        var animation = '';
        var exitAnimation = null;
        console.log('target to ' + target);
        if (target.indexOf('#') >= 0) {
          var li = target.split('#');
          target = li[0];
          animation = li[1];
          console.log('target to ' + target + ' & animate ' + animation);
        }
        switch(target) {
        case '_blank':
          if (animation) {
            exitAnimation = document.getElementById(animation);
            exitAnimation.addEventListener('animationend',
              function animationendHandler() {
                exitAnimation.removeEventListener('animationend',
                  animationendHandler);
                window.open(url);
              });
            this.el.emit('href');
          } else {
            window.open(url);
          }
          break;
        case 'window':
        default:
          if (animation) {
            exitAnimation = document.getElementById(animation);
            exitAnimation.addEventListener('animationend',
              function animationendHandler() {
                exitAnimation.removeEventListener('animationend',
                  animationendHandler);
                window.location.href = url;
              });
            this.el.emit('href');
          } else {
            window.location.href = url;
          }
          break;
        }
      } else {
        window.location.href = url;
      }
    }
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function() {
    this.boundClickHandler = this.clickHandler.bind(this);
    this.el.addEventListener('click', this.boundClickHandler);
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function() {
    this.el.removeEventListener('click', this.boundClickHandler);
  }
});
