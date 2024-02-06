let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    let sidebarMenu = document.querySelector(".sidebar-menu");
    let wideScreenSidebarMenu = document.querySelector(".wide-screen-sidebar-menu");
    sidebarMenu.classList.toggle("view");
    hamburger.classList.toggle("open");
    wideScreenSidebarMenu.classList.toggle("view");
};

window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        document.querySelector('.nav__links').style.display = 'block';
    } else {
        document.querySelector('.nav__links').style.display = 'none';
    }
});

window.dispatchEvent(new Event('resize'));