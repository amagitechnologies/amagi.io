window.addEventListener("load", () => {
    // expands description of an item on-click
    const packageItem = document.querySelectorAll(".package__list--item .title")

    for (let packageExp of packageItem) {
        const packageDesc = $(packageExp).siblings('.description');

        packageExp.addEventListener("click", () => {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                return false;
            } else {
                packageDesc.fadeIn();
            }
        });

        packageDesc.children('.close').click(() => {
            packageDesc.fadeOut();
        });
    }
})