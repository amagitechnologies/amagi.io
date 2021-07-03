window.addEventListener("load", function(){
  const consultingNav = document.querySelector("#nav-consulting");
  const consultingCarousel = document.querySelector("#tabs-consulting");

  const platformNav = document.querySelector("#nav-platform");
  const platformCarousel = document.querySelector("#tabs-platform");

  new Flickity(consultingCarousel, {
    // options
    prevNextButtons: false,
    draggable: false,
    pageDots: false
  });

  new Flickity(consultingNav, {
    asNavFor: '#tabs-consulting',
    pageDots: false,
    prevNextButtons: false,
    draggable: true,
    groupCells: '100%'
  });

  new Flickity(platformCarousel, {
    // options
    prevNextButtons: false,
    draggable: false,
    pageDots: false
  });

  new Flickity(platformNav, {
    asNavFor: '#tabs-platform',
    pageDots: false,
    prevNextButtons: false,
    draggable: true,
    groupCells: '100%'
  });
});