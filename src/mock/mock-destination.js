import {destination} from '../model/destination.js';
import {cities, descriptions} from '../data.js';
import {createPicture, getRandomNumber} from '../utils.js';

const destinations = [];

const pictures = [];
for (let i = 0; i < getRandomNumber(2, 5); ++i) {
  pictures.push(createPicture());
}

export const getDestination = (id) => destination(
  id, descriptions[getRandomNumber(0, descriptions.length - 1)], cities[id], pictures
);

for (let i = 0; i < cities.length; ++i) {
  destinations.push(getDestination(i));
}

export const getDestinations = () => destinations;
