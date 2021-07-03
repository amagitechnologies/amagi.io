window.addEventListener("load", () => {
    // expands description of an item on-click
    const packageItem = document.querySelectorAll(".package__list--item .title")

    for (let packageExp of packageItem) {
        const packageDesc = $(packageExp).siblings('.description');

        packageExp.addEventListener("click", () => {
            packageDesc.fadeIn();
        });

        packageDesc.children('.close').click(() => {
            packageDesc.fadeOut();
        });
    }
})