let hamburger = document.querySelector(".header__icon");
hamburger.onclick = function() {
    let mobileSideBar = document.querySelector(".header__side-bar-mobile-view");
    mobileSideBar.classList.toggle("view");
};

window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
        document.querySelector('.nav__links').style.display = 'block';
    } else {
        document.querySelector('.nav__links').style.display = 'none';
    }
});

window.dispatchEvent(new Event('resize'));