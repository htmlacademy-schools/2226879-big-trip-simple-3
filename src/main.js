import { render } from './render.js';
import FilterView from './view/filters.js';
import Presenter from './presenter/presenter.js';
import RouteModel from './model/route-model.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const pageContainer = document.querySelector('.trip-events');

const routeModel = new RouteModel();
const presenter = new Presenter(routeModel);

render(new FilterView(), filterContainer);

presenter.init(pageContainer);
