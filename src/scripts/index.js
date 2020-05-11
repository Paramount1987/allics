/* eslint-disable import/first */
/* eslint-disable no-new */
/* eslint-disable indent */
import '../styles/index.scss';

// libs
//-------------------------------------------------------
window.$ = require('jquery');
require('./libs/index');

window.jQuery = window.$;

import SliderWorks from './components/slider-works';

//----------------------------------------------
$(document).ready(() => {
  new SliderWorks('.js-swiper-works');

  $('.js-popup-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
  });

  // $(document).on('click', '.popup-modal-dismiss', (e) => {
  //   e.preventDefault();
  //   $.magnificPopup.close();
  // });
});
