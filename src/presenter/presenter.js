import { render } from '../render.js';

import CreationFormView from '../view/creation-form.js';
import EditionFormView from '../view/edition-form.js';
import RouteView from '../view/points-list.js';
import RoutePointView from '../view/route-point.js';
import SortingView from '../view/sorting.js';

export default class Presenter {

  routePoint = new RouteView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(new SortingView(), this.container);
    render(this.routePoint, this.container);
    render(new CreationFormView(), this.routePoint.getElement());
    render(new RoutePointView(), this.routePoint.getElement());
    render(new EditionFormView(), this.routePoint.getElement());

    for (let i = 0; i < 3; ++i) {
      render(new RoutePointView(), this.routePoint.getElement());
    }
  }
}
