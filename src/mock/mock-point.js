import {cities, dates, types} from '../data.js';
import {getRandomNumber} from '../utils.js';
import {point} from '../model/point.js';
import {getOffersIds} from './mock-offer.js';

const getRandomType = types[getRandomNumber(0, types.length - 1)];
const getRandomDates = dates[getRandomNumber(0, dates.length - 1)];

export const generatePoint = () => {
  const type = getRandomType;
  const date = getRandomDates;
  return point(
    getRandomNumber(1, 10) * 1000,
    date.dateFrom,
    date.dateTo,
    getRandomNumber(0, cities.length - 1),
    getRandomNumber(0, 100),
    getOffersIds(type),
    type
  );
};
