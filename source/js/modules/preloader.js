import {ScrollLock} from '../utils/scroll-lock';

const initLoader = () => {
  const loaderElement = document.querySelector('[data-loader]');

  if (!loaderElement) {
    return;
  }

  const scrollLock = new ScrollLock();

  window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.classList.remove('scroll-lock');
        scrollLock.disableScrolling();
        loaderElement.classList.remove('is-active');
      }, 500);
      setTimeout(() => {
        scrollLock.enableScrolling();
        loaderElement.classList.add('is-loaded');
      }, 1000);
    });
  });
};

export {initLoader};
