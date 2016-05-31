## aframe-href-component

 [![Dependency Status](https://david-dm.org/gasolin/aframe-href-component.svg)](https://david-dm.org/gasolin/aframe-href-component) [![npm](https://img.shields.io/npm/v/aframe-href-component.svg)](https://www.npmjs.com/package/aframe-href-component)

A Hyper Link component for [A-Frame](https://aframe.io). With `aframe-href-component`, each object could be used as a normal html linkable element.

### URL Link support

Add `href` attribute to any a-frame tag, such as `href="www.sample.com"`. To turn the object as a normal web link. [demo](https://gasolin.github.io/aframe-href-component/basic/link.html)

As normal web page, you could add extra `target="_blank"` attribute in this a-frame tag to open web link in a new window.

### Animation support (experimental)

When link is clicked, the href-component will emit a `href` event within this object. You can append the animation id in `target` attribute, such as `target="#out-animation"` (a shortcut of `target="window#out-animation"`) or `target="_blank#out-animation"` to trigger the animation directly. If your animation is not defined within this object, you should emit the event manually.
[demo](https://gasolin.github.io/aframe-href-component/basic/animation.html)

### Anchor support (experimental)

Besides the normal hyper link. you can add in-page anchor like `href="#id"` to any a-frame tag.
When user click on the object, `a-camera` will move its position to the object with the specified id. [demo](https://gasolin.github.io/aframe-href-component/basic/anchor.html)

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

Make sure you have placed an `a-cursor` element to trigger the click event.
Then add `href` attribute in target tag (In example is `a-box`). [demo](https://gasolin.github.io/aframe-href-component/basic/index.html)


```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/gasolin/aframe-href-component/master/dist/aframe-href-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity position="0 1.8 4">
      <a-camera>
        <a-cursor color="#4CC3D9"></a-cursor>
      <a-camera>
    </a-entity>

    <a-box id="orange-cube" position="0 3.5 -2" rotation="30 30 0"
      width="2" depth="2" height="2" color="#F16745"
      href="https://github.com/gasolin/aframe-href-component"></a-box>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-href-component
```

Then register and use.

```js
require('aframe');
require('aframe-href-component');
```
