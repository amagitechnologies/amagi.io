// import { logo } from "./amagi.module.js";

var text = ["Software Development", "DevOps Engineering", "Quality Assurance", "Cybersecurity", "Technical Support", "Project Management", "Technical Recruitment", "Expert Training", "Modern Technology"];
var counter = 0;
var title = document.getElementById("clip__title");

window.addEventListener("load", () => {
    setInterval(change, 1000);

    function change() {
        title.innerHTML = text[counter];
        counter++;
        if(counter > text.length) {
            title.remove();

            // logo();
        }
    }
})