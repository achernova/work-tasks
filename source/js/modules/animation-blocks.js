import {gsap} from '../vendor/gsap.min';
import {ScrollTrigger} from '../vendor/scroll-trigger.min';

gsap.registerPlugin(ScrollTrigger);


const animateBlocks = () => {
  gsap.to('[data-element="fade"]', {
    scrollTrigger: {
      trigger: '[data-element="fade"]',
      start: 'top 50%',
    },
    opacity: 1,
    duration: 1,
  });

  gsap.to('[data-element="fade-in"]', {
    scrollTrigger: {
      trigger: '[data-element="fade-in"]',
      markers: true,
      start: 'top 60%',
    },
    duration: 1,
    opacity: 1,
    y: 0,
  });
};

export {animateBlocks};
