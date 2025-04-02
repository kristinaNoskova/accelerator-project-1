import Swiper from '../vendor/swiper.js';

const initJuriSlider = () => {
  const sliderElement = document.querySelector('.juri-swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper(sliderElement, {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 40 },
      1200: { slidesPerView: 4, spaceBetween: 40 },
    },
    navigation: {
      nextEl: '.juri-slider__button-next',
      prevEl: '.juri-slider__button-prev',
    },
    simulateTouch: true,
    touchRatio: 1,
    loopAdditionalSlides: 2,
    watchSlidesProgress: true,
  });
};

const initReviewsSlider = () => {
  const sliderElement = document.querySelector('.reviews-swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper(sliderElement, {
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews-slider__button-next',
      prevEl: '.reviews-slider__button-prev',
    },
    simulateTouch: true,
    touchRatio: 1,
  });
};

export { initJuriSlider, initReviewsSlider};
