import { render } from '../render.js';

import CreationFormView from '../view/creation-form.js';
import EditionFormView from '../view/edition-form.js';
import RouteView from '../view/points-list.js';
import RoutePointView from '../view/route-point.js';
import SortingView from '../view/sorting.js';

export default class Presenter {

  routeView = new RouteView();

  constructor(routePointsModel) {
    this.routePointsModel = routePointsModel;
  }

  init = (container) => {
    this.routePoints = [...this.routePointsModel.getRoute()];
    // eslint-disable-next-line no-console
    console.log(this.routePoints);
    this.container = container;

    render(new SortingView(), this.container);
    render(this.routeView, this.container);
    render(new CreationFormView(), this.routeView.getElement());
    render(new EditionFormView(), this.routeView.getElement());

    for (let i = 0; i < this.routePoints.length; ++i) {
      render(new RoutePointView({tripPoint: this.routePoints[i]}), this.routeView.getElement());
    }
  };
}
