import {gsap} from '../vendor/gsap.min';
import {ScrollTrigger} from '../vendor/scroll-trigger.min';

gsap.registerPlugin(ScrollTrigger);

const initScrollSlider = () => {
  const slide = document.querySelectorAll('[data-element="scrollSlider"]');
  for (let i = 0; i < slide.length; i++) {
    gsap.to(slide[i], {
      scrollTrigger: {
        trigger: slide[i],
        start: 'center center',
        end: 'top top',
        scrub: true,
        markers: true,
      },
      opacity: 1,
      // stagger: 0.5,
    });
  }
};

export {initScrollSlider};

