import {generatePoint} from '../mock/mock-point.js';

const POINTS = 3;

export default class RouteModel {
  route = Array.from({length: POINTS}, generatePoint);

  getRoute() {
    return this.route;
  }
}
