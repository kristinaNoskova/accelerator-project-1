import { throttle } from './modules/throttle.js';
import { initTabs } from './modules/tabs.js';
import {initJuriSlider, initReviewsSlider} from './modules/slider.js';
import { playVideo } from './modules/play-video.js';
import {initAccordion, onResize} from './modules/accordeon.js';
import { formSubmit } from './modules/submit-form.js';

const throttledResize = throttle(onResize, 200);

document.addEventListener('DOMContentLoaded', () => {
  initTabs('.price');
  initTabs('.faq');

  initJuriSlider();
  initReviewsSlider();
  initAccordion();
  playVideo();
  formSubmit();

  window.addEventListener('resize', throttledResize);
});
