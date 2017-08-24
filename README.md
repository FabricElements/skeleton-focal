## \<skeleton-focal\>

A [Polymer 2](http://polymer-project.org) element that provides a focal point for your images.

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
