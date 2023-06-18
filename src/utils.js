import {picture} from './model/picture.js';
import {descriptions, photos} from './data.js';
import dayjs from 'dayjs';

const EVENT_DATE_FORMAT = 'MMM D';
const FORM_DATE_FORMAT = 'DD/MM/YY';
const TIME_FORMAT = 'H:mm';

export const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const createPicture = () => picture(
  `${photos[getRandomNumber(0,8)]}`, descriptions[getRandomNumber(0, 4)]
);

export const convertToEventDateTime = (date) => date.substring(0, date.indexOf('T'));
export const convertToEventDate = (date) => dayjs(date).format(EVENT_DATE_FORMAT);
export const convertToDateTime = (date) => date.substring(0, date.indexOf('.'));
export const convertToUpperCase = (type) => type.charAt(0).toUpperCase() + type.slice(1);
export const convertToFormDate = (date) => dayjs(date).format(FORM_DATE_FORMAT);
export const convertToTime = (date) => dayjs(date).format(TIME_FORMAT);
const limit = (date) => date.indexOf('T');
export const getTime = (date) => date.substring(limit(date) + 1, limit(date) + 6);
