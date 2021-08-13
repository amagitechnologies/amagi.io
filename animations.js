window.addEventListener("load", () => {
  // Grabbing them animation elements to prep entrance animations
  const entryAnimations = document.querySelectorAll('.animation');

  // Initializing our IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    // Loop through sections to set up sequential entrance animations
    const sections = Array.from(document.querySelectorAll('.content'));
    for (let section of sections) {
      // ...only sequential for elements that need the delay, tho
      const fadeups = section.querySelectorAll('.animation.delay');
      for (let count = 0; count < fadeups.length; count++) {
          // delaying by 0.5s for that nice, flowing, "waterfall" kind of sequence.
          fadeups[count].setAttribute('style', 'transition-delay: ' + count * 100 + 'ms');
      }
    }

    entries.forEach(entry => {
      // once we've observed the entry "intersecting" (within
      // view of the viewport), toggle that visible class!
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  entryAnimations.forEach(el => {
    // observation time
    observer.observe(el);
  });
});
