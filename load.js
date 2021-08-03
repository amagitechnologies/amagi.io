window.addEventListener("load", () => {
    const loader = document.querySelector("#loader");
    const loaderBg = document.querySelector("#loader-bg");
    loader.classList.add("hidden");
    loaderBg.classList.add("hidden");

    window.setTimeout(function(){
        loader.style.display = "none";
        loaderBg.style.display = "none";
    },1000);
});