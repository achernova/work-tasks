import {gsap} from '../vendor/gsap.min';

const introItemAnimation = () => {
  gsap.fromTo('[data-attribute="intro-item"]', {duration: 1, scale: 0, x: -100, y: -100, delay: 0.5}, {duration: 1, scale: 1, x: 0, y: 0});

  gsap.to('[data-element="title1"]', {duration: 1, y: 0, opacity: 1, ease: 'power3.out'});
  gsap.to('[data-element="title2"]', {duration: 1, y: 0, opacity: 1, ease: 'power3.out', delay: 0.3});

  gsap.to('[data-element="pargraph1"]', {duration: 1, y: 0, opacity: 1, ease: 'power3.out'});
  gsap.to('[data-element="pargraph2"]', {duration: 1, y: 0, opacity: 1, ease: 'power3.out', delay: 0.3});
  gsap.to('[data-element="pargraph3"]', {duration: 1, y: 0, opacity: 1, ease: 'power3.out', delay: 0.5});
};

export {introItemAnimation};
