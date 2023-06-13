import {createElement} from '../render.js';

const createRouteTemplate = () => (`
  <ul class="trip-events__list"></ul>
`);

export default class RouteView {
  getTemplate() {
    return createRouteTemplate;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
