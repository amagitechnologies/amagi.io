import * as TWEEN from 'es6-tween';

export default ({
  from = {},
  to = {},
  duration = 1000,
  delay = 0,
  easing = TWEEN.Easing.Linear.None,
  repeat = 0,
  yoyo = false,
  update = () => null,
  start = () => null,
  complete = () => null,
  autoStart = true,
}) => {
  const tween = new TWEEN.Tween(from)
    .to(to, duration)
    .delay(delay)
    .easing(easing)
    .repeat(repeat)
    .yoyo(yoyo)
    .on('update', update)
    .on('start', start)
    .on('complete', complete);

  if (autoStart) {
    tween.start();
  }

  return tween;
};
