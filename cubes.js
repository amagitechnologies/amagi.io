let Strut = {
  random: function (e, t) {
    return Math.random() * (t - e) + e;
  },
  arrayRandom: function (e) {
    return e[Math.floor(Math.random() * e.length)];
  },
  interpolate: function (e, t, n) {
    return e * (1 - n) + t * n;
  },
  rangePosition: function (e, t, n) {
    return (n - e) / (t - e);
  },
  clamp: function (e, t, n) {
    return Math.max(Math.min(e, n), t);
  },
  queryArray: function (e, t) {
    return t || (t = document.body), Array.prototype.slice.call(t.querySelectorAll(e));
  },
  ready: function (e) {
    document.readyState == 'complete' ? e() : document.addEventListener('DOMContentLoaded', e);
  } };

const reduceMotion = matchMedia("(prefers-reduced-motion)").matches;

{
  // =======
  // helpers
  // =======

  const setState = (state, speed) =>
  directions.forEach(axis => {
    state[axis] += speed[axis];
    if (Math.abs(state[axis]) < 360) return;
    const max = Math.max(state[axis], 360);
    const min = max == 360 ? Math.abs(state[axis]) : 360;
    state[axis] = max - min;
  });

  const cubeIsHidden = left => left > parentWidth + 30;


  // =================
  // shared references
  // =================

  let headerIsHidden = false;

  const template = document.getElementById("cube-template");

  const parent = document.querySelector(".bg");
  const getParentWidth = () => parent.getBoundingClientRect().width;
  let parentWidth = getParentWidth();
  window.addEventListener("resize", () => parentWidth = getParentWidth());

  const directions = ["x", "y"];

  const palette = {
    white: {
      color: [255, 255, 255],
      shading: [200, 200, 200] },

    orange: {
      color: [255, 250, 230],
      shading: [255, 120, 50] },

    green: {
      color: [205, 255, 204],
      shading: [0, 211, 136] } };




  // ==============
  // cube instances
  // ==============

  const setCubeStyles = ({ cube, size, left, top }) => {
    Object.assign(cube.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}px`,
      top: `${top}px` });


    Object.assign(cube.querySelector(".shadow").style, {
      filter: `blur(${Math.round(size * .6)}px)`,
      opacity: Math.min(size / 120, .4) });

  };

  const createCube = size => {
    const fragment = document.importNode(template.content, true);
    const cube = fragment.querySelector(".cube");

    const state = {
      x: 0,
      y: 0 };


    const speed = directions.reduce((object, axis) => {
      const max = size > sizes.m ? .3 : .6;
      object[axis] = Strut.random(-max, max);
      return object;
    }, {});

    const sides = Strut.queryArray(".sides div", cube).reduce((object, side) => {
      object[side.className] = {
        side,
        hidden: false,
        rotate: {
          x: 0,
          y: 0 } };


      return object;
    }, {});

    sides.top.rotate.x = 90;
    sides.bottom.rotate.x = -90;
    sides.left.rotate.y = -90;
    sides.right.rotate.y = 90;
    sides.back.rotate.y = -180;

    return { fragment, cube, state, speed, sides: Object.values(sides) };
  };

  const sizes = {
    xs: 15,
    s: 25,
    m: 40,
    l: 100,
    xl: 120 };


  const cubes = [
  {
    tint: palette.white,
    size: sizes.m,
    left: window.innerWidth - 230,
    top: 120 },
  {
    tint: palette.white,
    size: sizes.xl,
    left: 140,
    top: 400 },
  {
    tint: palette.white,
    size: sizes.m,
    left: 230,
    top: 155 },
  {
    tint: palette.white,
    size: sizes.l,
    left: window.innerWidth - 376,
    top: 255 },
  {
    tint: palette.white,
    size: sizes.xl,
    left: 452,
    top: 120 },
  {
    tint: palette.white,
    size: sizes.l,
    left: 900,
    top: 465 },
  {
    tint: palette.white,
    size: sizes.m,
    left: -200,
    top: 200 }].

  map(object => Object.assign(createCube(object.size), object));

  cubes.forEach(setCubeStyles);


  // =======================
  // cube rotating animation
  // =======================

  const getDistance = (state, rotate) =>
  directions.reduce((object, axis) => {
    object[axis] = Math.abs(state[axis] + rotate[axis]);
    return object;
  }, {});

  const getRotation = (state, size, rotate) => {
    const axis = rotate.x ? "Z" : "Y";
    const direction = rotate.x > 0 ? -1 : 1;

    return `
      rotateX(${state.x + rotate.x}deg)
      rotate${axis}(${direction * (state.y + rotate.y)}deg)
      translateZ(${size / 2}px)
    `;
  };

  const getShading = (tint, rotate, distance) => {
    const darken = directions.reduce((object, axis) => {
      const delta = distance[axis];
      const ratio = delta / 180;
      object[axis] = delta > 180 ? Math.abs(2 - ratio) : ratio;
      return object;
    }, {});

    if (rotate.x)
    darken.y = 0;else
    {
      const { x } = distance;
      if (x > 90 && x < 270)
      directions.forEach(axis => darken[axis] = 1 - darken[axis]);
    }

    const alpha = (darken.x + darken.y) / 2;
    const blend = (value, index) => Math.round(Strut.interpolate(value, tint.shading[index], alpha));
    const [r, g, b] = tint.color.map(blend);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const shouldHide = (rotateX, x, y) => {
    if (rotateX)
    return x > 90 && x < 270;
    if (x < 90)
    return y > 90 && y < 270;
    if (x < 270)
    return y < 90;
    return y > 90 && y < 270;
  };

  const updateSides = ({ state, speed, size, tint, sides, left }) => {
    if (headerIsHidden || cubeIsHidden(left)) return;

    const animate = object => {
      const { side, rotate, hidden } = object;
      const distance = getDistance(state, rotate);

      // don't animate hidden sides
      if (shouldHide(rotate.x, distance.x, distance.y)) {
        if (!hidden) {
          side.hidden = true;
          object.hidden = true;
        }
        return;
      }

      if (hidden) {
        side.hidden = false;
        object.hidden = false;
      }

      side.style.transform = getRotation(state, size, rotate);
      side.style.backgroundColor = getShading(tint, rotate, distance);
    };

    setState(state, speed);
    sides.forEach(animate);
  };

  const tick = () => {
    cubes.forEach(updateSides);
    if (reduceMotion) return;
    requestAnimationFrame(tick);
  };


  // ===============
  // parallax scroll
  // ===============

  // give it some extra space to account for the parallax and the shadows of the cubes
  const parallaxLimit = document.querySelector(".bg").getBoundingClientRect().height + 80;

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll < parallaxLimit) {
      headerIsHidden = false;
      cubes.forEach(({ cube, speed }) =>
      cube.style.transform = `translateY(${Math.abs(speed.x * .5) * scroll}px)`);
      return;
    }
    headerIsHidden = true;
  });


  // ==========
  // initialize
  // ==========

  const container = document.createElement("div");
  container.className = "cubes";
  cubes.forEach(({ fragment }) => container.appendChild(fragment));

  const start = () => {
    tick();
    parent.appendChild(container);
  };

  'requestIdleCallback' in window ? requestIdleCallback(start) : start();
}