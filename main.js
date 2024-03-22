let iconHome = document.querySelector("#home-menu-icon");
iconHome.addEventListener('click', () => {
    if (window.innerWidth < 600) {
        document.querySelector(".home-nav__mob-links").classList.toggle("open");
    }
});