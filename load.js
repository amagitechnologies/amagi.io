window.addEventListener("load", () => {
    const loader = document.querySelector("#loader");
    const loaderBg = document.querySelector("#loader-bg");
    loader.classList.remove("visible"); 
    loaderBg.classList.remove("visible");
    loader.classList.add("hidden"); 
    loaderBg.classList.add("hidden"); // adds hidden class for fade-out animation

    window.setTimeout(function(){ 
        loader.style.display = "none";
        loaderBg.style.display = "none";
    }, 1000); // delays removing the loading element until fade animation is complete
});