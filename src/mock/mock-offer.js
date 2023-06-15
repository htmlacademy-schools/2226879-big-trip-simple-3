import {offer} from '../model/offer.js';
import {getRandomNumber} from '../utils.js';

const titles = {
  taxi: [
    'Big trunk',
    'Business class car'
  ],
  bus: [
    'Choose seats',
    'Additional luggage'
  ],
  train: [
    'Choose seats',
    'Food included',
  ],
  ship: [
    'Picturesque view',
    'Food included',
    'Business class'
  ],
  drive: [
    'Business class car',
    'Minivan',
    'Delivery to airport'
  ],
  flight: [
    'Business class',
    'Extra space seats',
    'Food included',
  ],
  checkIn: [
    'Picturesque view',
    'Minibar',
    'Food included',
    'Transfer to hotel'
  ],
  sightseeing: [
    'Guide',
    'No queues'
  ],
  restaurant: [
    'Wine tasting',
    'Smoking spots'
  ]
};

export const ids = {
  'Big trunk': 0,
  'Business class car': 1,
  'Choose seats': 2,
  'Additional luggage': 3,
  'Food included': 4,
  'Picturesque view': 5,
  'Business class': 6,
  'Minivan': 7,
  'Delivery to airport': 8,
  'Extra space seats': 9,
  'Minibar': 10,
  'Transfer to hotel': 11,
  'Guide': 12,
  'No queues': 13,
  'Wine tasting': 14,
  'Smoking spots': 15,
};

const byId = {
  0: offer(0, 'Big trunk', getRandomNumber(1, 7) * 10),
  1: offer(1, 'Business class car', getRandomNumber(1, 7) * 10),
  2: offer(2, 'Choose seats', getRandomNumber(1, 7) * 10),
  3: offer(3, 'Additional luggage', getRandomNumber(1, 7) * 10),
  4: offer(4, 'Food included', getRandomNumber(1, 7) * 10),
  5: offer(5, 'Picturesque view', getRandomNumber(1, 7) * 10),
  6: offer(6, 'Business class', getRandomNumber(1, 7) * 10),
  7: offer(7, 'Minivan', getRandomNumber(1, 7) * 10),
  8: offer(8, 'Delivery to airport', getRandomNumber(1, 7) * 10),
  9: offer(9, 'Extra space seats', getRandomNumber(1, 7) * 10),
  10: offer(10, 'Minibar', getRandomNumber(1, 7) * 10),
  11: offer(11, 'Transfer to hotel', getRandomNumber(1, 7) * 10),
  12: offer(12, 'Guide', getRandomNumber(1, 7) * 10),
  13: offer(13, 'No queues', getRandomNumber(1, 7) * 10),
  14: offer(14, 'Wine tasting', getRandomNumber(1, 7) * 10),
  15: offer(15, 'Smoking spots', getRandomNumber(1, 7) * 10),
};

export const getOffers = (type) => {
  const offers = [];
  const titlesByType = titles[type];
  for (let i = 0; i < titlesByType?.length; ++i) {
    offers.push(
      offer(i, titlesByType[i], getRandomNumber(1, 7) * 10)
    );
  }
  return offers;
};

export const getOffersIds = (type) => {
  const offers = getOffers(type);
  const idList = [];
  for (let i = 0; i < offers.length; ++i) {
    idList.push(
      ids[offers[i].title]
    );
    // eslint-disable-next-line no-console
    console.log(ids[offers[i].title]);
  }
  return idList;
};

export const getOfferById = (id) => byId[id];
