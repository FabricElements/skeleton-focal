[![Build Status](https://travis-ci.org/FabricElements/skeleton-focal.svg?branch=master)](https://travis-ci.org/FabricElements/skeleton-focal) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/FabricElements/skeleton-focal) [![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/FabricElementsskeleton-focal)

## \<skeleton-focal\>

`skeleton-focal` is a [Polymer 3](http://polymer-project.org) element that provides a focal point for your images.
Allows you to drag the focal point and returns the value in attributes that reflects the selected `x` and `y` coordinates in a 0-1 range.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
        <link rel="import" href="skeleton-focal.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<dom-bind>
  <template>
    <skeleton-focal
      src="https://source.unsplash.com/random/800x400"
      x="{{x}}"
      y="{{y}}"></skeleton-focal>
    
    <h4>Focal point coordinates</h4>
    <ul>
      <li><strong>X:</strong> [[x]]</li>
      <li><strong>Y:</strong> [[y]]</li>
    </ul>
  </template>
</dom-bind>
```

## Installation

Install skeleton-focal with npm

```shell
$ npm install FabricElements/skeleton-focal --save
```

## Usage

Import it into the `<head>` of your page

```html
<script type="module" src="node_modules/@fabricelements/skeleton-focal/skeleton-focal.js"></script>
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
