import {Dimensions} from 'react-native';
import {STANDARD_HEIGHT, STANDARD_WIDTH} from '../constants';

const {width, height} = Dimensions.get('window') || {};

export const getResponsiveWidth = (baseWidth: number) =>
  baseWidth * (width / STANDARD_WIDTH);

export const getResponsiveHeight = (baseHeight: number) =>
  baseHeight * (height / STANDARD_HEIGHT);
