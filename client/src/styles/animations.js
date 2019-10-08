import anime from 'animejs/lib/anime.es.js';

export const inflate = (e) => {
  anime({
    targets: e.target,
    scale: 1.2,
    // easing: 'easeInOutSine',
    // duration: 300
  });
}

export const deflate = (e) => {
  anime({
    targets: e.target,
    scale: 1,
    // easing: 'easeInOutSine',
    // duration: 300
  });
}