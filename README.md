## aframe-href-component

A Hyper Link component for [A-Frame](https://aframe.io).

### Properties

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/gasolin/aframe-href-component/master/dist/aframe-href-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity href="http://aframe.io/"></a-entity>
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
