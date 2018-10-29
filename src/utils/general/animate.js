import * as TWEEN from 'es6-tween';

export default ({
  from = {},
  to = {},
  duration = 1000,
  delay = 0,
  easing = TWEEN.Easing.Linear.None,
  update = () => null,
  start = () => null,
}) => {
  new TWEEN.Tween(from)
    .to(to, duration)
    .delay(delay)
    .easing(easing)
    .on('update', update)
    .on('start', start)
    .start();
};
