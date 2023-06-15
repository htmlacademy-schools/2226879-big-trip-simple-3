import {createElement} from '../render.js';
import {getDestination} from '../mock/mock-destination.js';
import {convertToDateTime, convertToEventDate, convertToEventDateTime, convertToTime} from '../utils.js';
import {getOfferById} from '../mock/mock-offer.js';

const createOffersTemplates = (offers) =>
  offers.map((it) => `
    <li class="event__offer">
      <span class="event__offer-title">${it.title}</span>
      &plus;<span class="event__offer-price">${it.price}</span>&euro;
    </li>
  `).join('');

const createRoutePointTemplate = (point) => {
  const {basePrice, dateFrom, dateTo, destination, offers, type} = point;
  const offersByIds = [];
  for (let i = 0; i < offers.length; ++i) {
    offersByIds.push(getOfferById(offers[i]));
  }
  // eslint-disable-next-line no-console
  console.log(offers);
  const destinationById = getDestination(destination);
  const templates = createOffersTemplates(offersByIds);
  const eventDateTime = convertToEventDateTime(dateFrom);
  const eventDate = convertToEventDate(dateFrom);
  const fromDateTime = convertToDateTime(dateFrom);
  const fromTime = convertToTime(dateFrom);
  const toDateTime = convertToDateTime(dateTo);
  const toTime = convertToTime(dateTo);

  return `
  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${eventDateTime}">${eventDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destinationById.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${fromDateTime}">${fromTime}</time>
          &mdash;
          <time class="event__end-time" datetime="${toDateTime}">${toTime}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${templates}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
  `;
};

export default class RoutePointView {
  constructor({tripPoint}) {
    this.tripPoint = tripPoint;
  }

  getTemplate() {
    return createRoutePointTemplate(this.tripPoint);
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
