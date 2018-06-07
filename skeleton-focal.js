import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import '@polymer/iron-image/iron-image.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `skeleton-focal`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SkeletonFocal extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
    <style is="custom-style">
      :host {
        display: block;
        position: relative;
        box-sizing: border-box;
        -webkit-user-select: none;
        -webkit-user-drag: none;
        background-color: black;
        margin: 2rem auto;
        width: 100%;
        max-width: 100%;
        height: auto;
        /* Default icon size */
        --focal-icon-size: 2rem;
        /* Styles for the icon */
        --focal-icon: {

        };
      }

      #drag {
        display: block;
        position: absolute;
        height: 0;
        width: 0;
        top: 50%;
        left: 50%;
        z-index: 3;
        opacity: 1;
        box-sizing: border-box;
        transform: translate(-50%, -50%);
      }

      #dragIcon {
        display: block;
        height: var(--focal-icon-size);
        width: var(--focal-icon-size);
        margin-top: calc(-1 * var(--focal-icon-size) / 2);
        margin-left: calc(-1 * var(--focal-icon-size) / 2);
        box-sizing: border-box;
        cursor: move;
        box-shadow: 0 0 3px rgba(0, 0, 0, .8), 0 0 4px rgba(0, 0, 0, .4);
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .3);
        border: 5px solid white;
        transition: opacity ease-in-out 1s;
        @apply --focal-icon;
      }

      iron-image {
        display: block;
        position: relative;
        z-index: 1;
        margin: 0;
        width: inherit;
        height: inherit;
        max-width: 100%;
        --iron-image-width: 100%;
        -webkit-user-select: none;
        -webkit-user-drag: none;
      }

      [faded] {
        opacity: 0;
      }
    </style>

    <iron-image src="[[src]]" placeholder="[[placeholder]]" on-loaded-changed="_loaded" prevent-load\$="[[preventLoad]]" crossorigin\$="[[crossorigin]]" preload="" fade=""></iron-image>
    <div id="drag" faded\$="[[!loaded]]" style\$="left: [[_calcPercentage(x)]]; top: [[_calcPercentage(y)]];" on-track="_move">
      <div id="dragIcon" on-dblclick="reset"></div>
    </div>
`;
  }

  /**
   * @return {string}
   */
  static get is() {
    return 'skeleton-focal';
  }

  /**
   * @return {object}
   */
  static get properties() {
    return {
      /**
       * The URL of an image.
       */
      src: {
        type: String,
        value: '',
      },

      /**
       * This image will be used as a background/placeholder until the src
       * image has loaded.  Use of a data-URI for placeholder is encouraged
       * for instant rendering.
       */
      placeholder: {
        type: String,
        value: null,
      },

      /**
       * When true, the image is prevented from loading and any placeholder is
       * shown.  This may be useful when a binding to the src property is known
       * to be invalid, to prevent 404 requests.
       */
      preventLoad: {
        type: Boolean,
        value: false,
      },

      /**
       * CORS enabled images support: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
       */
      crossorigin: {
        type: String,
        value: null,
      },

      /**
       * X Axis position (0 - 1)
       */
      x: {
        type: Number,
        value: 0.5,
        reflectToAttribute: true,
        notify: true,
      },

      /**
       * Y Axis position (0 - 1)
       */
      y: {
        type: Number,
        value: 0.5,
        reflectToAttribute: true,
        notify: true,
      },

      /**
       * Read-only value that is true when the image is loaded.
       */
      loaded: {
        type: Boolean,
        value: false,
        notify: true,
        readOnly: true,
      },
    };
  }

  /**
   * Constructor
   */
  constructor() {
    super();
  }

  /**
   * Listen for loaded event and recalculate position
   *
   * @param {object} e
   * @private
   */
  _loaded(e) {
    const status = !!e.detail.value;
    this._setLoaded(status);
  }

  /**
   * Returns the percentage that will to position the icon
   *
   * @param {number} value
   * @return {string}
   * @private
   */
  _calcPercentage(value) {
    return `${value * 100}%`;
  }

  /**
   * Recalculate the coordinates after is dragged
   *
   * @param {object} event
   * @private
   */
  _move(event) {
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    const y = event.detail.ddy ? event.detail.ddy : 0;
    const x = event.detail.ddx ? event.detail.ddx : 0;
    let finalY = y / height;
    let finalX = x / width;
    let finalTop = this.y + finalY;
    let finalLeft = this.x + finalX;
    finalTop = this._normalize(finalTop);
    finalLeft = this._normalize(finalLeft);

    this.y = Number(finalTop.toFixed(3));
    this.x = Number(finalLeft.toFixed(3));
  }

  /**
   * Returns a valid value
   *
   * @param {number} value
   * @return {*}
   * @private
   */
  _normalize(value) {
    if (value < 0) {
      value = 0;
    } else if (value > 1) {
      value = 1;
    }
    return value;
  }

  /**
   * Reset position
   */
  reset() {
    this.y = 0.5;
    this.x = 0.5;
  }
}

window.customElements.define(SkeletonFocal.is, SkeletonFocal);
