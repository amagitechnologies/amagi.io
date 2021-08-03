/* eslint-disable no-undef */
window.addEventListener("load", function() {
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  
    if (isMobile) {
      return;
    }
  
    // shows description of an element on-hover
    const bg = document.querySelector(".bg");
    const headlines = document.querySelectorAll(".headline");

    for (let headline of headlines) {
        const headlineDivs = document.querySelectorAll(".headlines");

        for (let headlineDiv of headlineDivs) {
            const title = headline.querySelector(".title");
            const description = headline.querySelectorAll(".description");
            console.log(description);

            hoverintent(title,
                () => {
                    for (let i = 0; i < description.length; i++) {
                        description[i].classList.add("visible")
                    }
                    title.classList.add("hovered");
                    bg.classList.add("blurred");
                },
                function() {
                    for (let i = 0; i < description.length; i++) {
                        description[i].classList.remove("visible")
                    }
                    title.classList.remove("hovered");
                }
            );

            hoverintent(headlineDiv,
                function() {},
                function() {
                    bg.classList.remove("blurred");
                }
            )
        }
    }
});