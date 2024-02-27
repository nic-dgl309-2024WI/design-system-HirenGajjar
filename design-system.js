let hamburger = document.querySelector(".header__icon");
let mobileSideBar = document.querySelector(".header__side-bar-mobile-view");
hamburger.addEventListener('click', () => {
    mobileSideBar.classList.toggle("openView");
    hamburger.classList.toggle("open");
})



window.addEventListener('resize', function() {
    mobileSideBar.classList.toggle("view");
});

window.dispatchEvent(new Event('resize'));