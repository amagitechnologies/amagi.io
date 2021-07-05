/* eslint-disable no-undef */
window.addEventListener("load", function() {
    // shows description of an element on-hover
    const bg = document.querySelector(".bg");
    const darkBg = document.querySelector('.dark-bg');
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
                    darkBg.classList.add("visible");
                    document.body.classList.add("dark");
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
                    darkBg.classList.remove("visible");
                    bg.classList.remove("blurred");
                    document.body.classList.remove("dark");
                }
            )
        }
    }
});