## aframe-href-component

A Hyper Link component for [A-Frame](https://aframe.io).

Add `href="url"` attribute to any a-frame tag, turn the object as a normal web link.

### Properties

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

Add `href` attribute in target tag (In example is `a-box`).

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
      href="http://aframe.io/"></a-box>
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
