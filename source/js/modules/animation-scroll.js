import {ScrollTrigger} from '../vendor/scroll-trigger.min';
import {gsap} from '../vendor/gsap.min';

// const intro = document.querySelector('[data-element="intro"]');
const introItem = document.querySelector('[data-attribute="intro-item"]');
gsap.registerPlugin(ScrollTrigger);

const initAnimationScroll = () => {
  gsap.to(introItem, {
    scrollTrigger: {
      trigger: introItem,
      start: top},
    rotation: 360});
};

export {initAnimationScroll};
