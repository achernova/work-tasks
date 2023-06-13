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
    stagger: 0.5,
  });

  gsap.to('[data-element="fade-in"]', {
    scrollTrigger: {
      trigger: '[data-element="fade-in"]',
      start: 'top 50%',
    },
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.5,
  });

  gsap.to('[data-element="fade-scale"]', {
    scrollTrigger: {
      trigger: '[data-element="fade-scale"]',
      start: 'top 50%',
    },
    y: 1,
    duration: 1,
    scale: 1,
    stagger: 0.5,
    ease: 'back.out(1.7)',
  });

  gsap.to('[data-element="fade-in1"]', {
    scrollTrigger: {
      trigger: '[data-element="fade-in1"]',
      start: 'bottom bottom',
      end: 'top center',
      scrub: true,
    },
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.5,
  });

  gsap.to('[data-element="fade-scale1"]', {
    scrollTrigger: {
      trigger: '[data-element="fade-scale1"]',
      start: 'bottom bottom',
      end: 'top center',
      scrub: true,
    },
    y: 1,
    duration: 1,
    scale: 1,
    stagger: 0.5,
  });
};


export {animateBlocks};
