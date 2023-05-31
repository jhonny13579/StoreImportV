import { PolymerElement, html } from '@polymer/polymer';
import '@thuoe/mp4-video-player';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <mp4-video-player></mp4-video-player>
    `;
  }
}
customElements.define('sample-element', SampleElement);