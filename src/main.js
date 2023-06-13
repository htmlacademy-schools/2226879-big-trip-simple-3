import { render } from './render.js';
import FilterView from './view/filters.js';
import Presenter from './presenter/presenter.js';

const filterContainer = document.querySelector('.trip-controls__filters');
render(new FilterView(), filterContainer);

const pageContainer = document.querySelector('.trip-events');
const presenter = new Presenter({container: pageContainer});
presenter.init();
