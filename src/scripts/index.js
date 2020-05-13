/* eslint-disable import/first */
/* eslint-disable no-new */
/* eslint-disable indent */
import '../styles/index.scss';

// libs
//-------------------------------------------------------
window.$ = require('jquery');
require('./libs/index');

window.jQuery = window.$;

import { isMobileDevice } from './utils';
import SliderWorks from './components/slider-works';
import Nav from './components/nav';

const htmlClass = isMobileDevice() ? 'mobile' : '';
//----------------------------------------------
$(document).ready(() => {
  $('html').addClass(htmlClass);

  Nav.init();
  new SliderWorks('.js-swiper-works');

  $('.js-popup-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
  });
});
