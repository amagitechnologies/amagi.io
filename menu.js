customElements.define(
    "navigation-menu",
    class extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {
        const nav = document.createElement("nav");
        nav.classList.add("navigation");
        nav.innerHTML = `
            <a class="navigation__item" href="/">
              <div class="navigation__item--logo">AMAGI</div>
            </a>
            <a class="navigation__hamburger">
              <i class="fas fa-bars"></i>
            </a>
            <ul class="navigation__list mobile-hidden">
              <li class="navigation__item">
                <a class="navigation__item--link" href="/">Home</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__item--link" href="/services">Services</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__item--link" href="/industries">Industries</a>
              </li>
              <li class="navigation__item">
                <a class="navigation__item--link" href="/contact">Contact Us</a>
              </li>
            </ul>
        `;
  
        this.append(nav);
      }
    }
  );
  
  window.addEventListener("load", () => {
    /* HAMBURGER MENU */
    // drop down menu on hamburger icon click
    const hamburgerEl = document.getElementsByClassName(
      "navigation__hamburger"
    )[0];
    const navListEl = document.getElementsByClassName("navigation__list")[0];
    const navLinks = document.getElementsByClassName("navigation__item--link");
  
    const toggleHamburger = () => {
      const isVisible = navListEl.style.display === "flex";
      if (isVisible) {
        navListEl.style.display = "none";
        document.body.style.height = "100%";
        document.body.style.overflow = "auto";
      } else {
        navListEl.style.display = "flex";
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      }
    };
  
    // toggle hamburger visibility on click
    hamburgerEl.addEventListener("click", () => {
      toggleHamburger();
    });
  
    // hide hamburger when a navlink is pressed
    for (const item of navLinks) {
      item.addEventListener("click", () => {
        const isVisible = navListEl.style.display === "flex";
  
        if (isVisible) toggleHamburger();
      });
    }
  
    // reset nav list and body styles on resize
    window.addEventListener("resize", () => {
      navListEl.style.display = "";
      document.body.style.height = "";
      document.body.style.overflow = "";
    });
  });