import type { SwiperProps } from 'swiper/react';

export const swiperConfig: SwiperProps = {
  slidesPerView: 'auto',
  speed: 1000,
  watchSlidesProgress: true,
  breakpointsBase: 'container',
  centeredSlides: false,
  breakpoints: {
    0: {
      spaceBetween: 15,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    525: {
      spaceBetween: 15,
      slidesPerGroup: 2,
      allowTouchMove: true,
    },
    795: {
      spaceBetween: 15,
      slidesPerGroup: 3,
      allowTouchMove: true,
    },
    1065: {
      spaceBetween: 50,
      slidesPerGroup: 3,
      allowTouchMove: true,
    },
    1300: {
      spaceBetween: 50,
      slidesPerGroup: 3,
      allowTouchMove: false,
    },
  },
};
