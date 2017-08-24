[![Build Status](https://travis-ci.org/FabricElements/skeleton-focal.svg?branch=master)](https://travis-ci.org/FabricElements/skeleton-focal)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/FabricElements/skeleton-focal)

## \<skeleton-focal\>

`skeleton-focal` is a [Polymer 2](http://polymer-project.org) element that provides a focal point for your images.
Allows you to drag the focal point and returns the value in attributes that reflects the selected `x` and `y` coordinates in a 0-1 range.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../../iron-image/iron-image.html">
    <link rel="import" href="skeleton-focal.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<skeleton-focal src="https://images.unsplash.com/photo-1499709453582-ba507bcee46b?dpr=2&auto=format&fit=crop&w=1000&h=600&q=80&cs=tinysrgb&crop=" x="{{x}}" y="{{y}}"></skeleton-focal>

<h3>Focal point coordinates</h3>
<ul>
  <li><strong>X:</strong> [[x]]</li>
  <li><strong>Y:</strong> [[y]]</li>
</ul>

<iron-image
  src="https://images.unsplash.com/photo-1499709453582-ba507bcee46b?dpr=2&auto=format&fit=crop&w=500&h=200&q=80&cs=tinysrgb&fp-x=[[x]]&fp-y=[[y]]&fp-debug=true"
  preload
  fade>
</iron-image>
```

![skeleton-focal](http://i.imgur.com/CD8GRl8.jpg)

## Installation

Install skeleton-focal with Bower

```shell
$ bower install --save FabricElements/skeleton-focal
```

## Usage

Import it into the `<head>` of your page

```html
<link rel="import" href="bower_components/skeleton-focal/skeleton-focal.html">
```

### Example: basic usage

```html
<skeleton-focal src="image.jpg" x="{{x}}" y="{{y}}"></skeleton-focal>
```

* `src` (string) - The URL of an image.
* `x` (number) - attribute that reflects the selected x coordinate in a 0-1 range. 
* `y` (number) - attribute that reflects the selected y coordinate in a 0-1 range.

### Other attributes

* `loaded` (boolean) - Read-only value that is true when the image is loaded.
* `crossorigin` (string) - CORS enabled images support: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
* `placeholder` (string) - This image will be used as a background/placeholder until the src image has loaded.  Use of a data-URI for placeholder is encouraged for instant rendering.
* `preventLoad` (boolean) - When true, the image is prevented from loading and any placeholder is shown.  This may be useful when a binding to the src property is known to be invalid, to prevent 404 requests.

## Contributing

Please check [CONTRIBUTING](./CONTRIBUTING.md).

## License

Released under the [BSD 3-Clause License](./LICENSE.md).
