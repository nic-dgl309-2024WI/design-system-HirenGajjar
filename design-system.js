let icon = document.querySelector("#menu-icon");
icon.addEventListener('click', () => {
    if (window.innerWidth < 600) {
        document.querySelector(".mobile-sidebar").classList.toggle("open");
    }
});