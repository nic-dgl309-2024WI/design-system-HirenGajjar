let iconHome = document.querySelector("#home-menu-icon");
iconHome.addEventListener('click', () => {
    if (window.innerWidth < 600) {
        document.querySelector(".home-nav__mob-links").classList.toggle("open");
    }
});

//Hero image
const heroDeskImg = document.getElementById('heroDeskImg');
let ticking = false;

function handleScroll() {
    const scrollPosition = window.scrollY;
    const triggerOffset = 150; // Adjust this value as needed
    let opacity;

    if (scrollPosition > triggerOffset) {
        // Calculate opacity based on scroll position
        opacity = 1 - (scrollPosition - triggerOffset) / 200; // Adjust the division factor for faster transition
        opacity = Math.max(0, opacity); // Ensure opacity is not negative
    } else {
        opacity = 1; // Show the image
    }

    heroDeskImg.style.opacity = opacity;

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
    }
});

//carousel
let slide = document.getElementById('slider');
let sliderBtn1 = document.getElementById('btn1');
let sliderBtn2 = document.getElementById('btn2');
let sliderBtn3 = document.getElementById('btn3');
let sliderBtn4 = document.getElementById('btn4');

sliderBtn1.onclick = function() {
    slide.style.transform = "translateX(0px)";
    sliderBtn1.classList.add("u-menu-slider-active");
    sliderBtn2.classList.remove("u-menu-slider-active");
    sliderBtn3.classList.remove("u-menu-slider-active");
    sliderBtn4.classList.remove("u-menu-slider-active");
};
sliderBtn2.onclick = function() {
    slide.style.transform = "translateX(-366px)";
    sliderBtn1.classList.remove("u-menu-slider-active");
    sliderBtn2.classList.add("u-menu-slider-active");
    sliderBtn3.classList.remove("u-menu-slider-active");
    sliderBtn4.classList.remove("u-menu-slider-active");
};
sliderBtn3.onclick = function() {
    slide.style.transform = "translateX(-732px)";
    sliderBtn1.classList.remove("u-menu-slider-active");
    sliderBtn2.classList.remove("u-menu-slider-active");
    sliderBtn3.classList.add("u-menu-slider-active");
    sliderBtn4.classList.remove("u-menu-slider-active");
};
sliderBtn4.onclick = function() {
    slide.style.transform = "translateX(-1098px)";
    sliderBtn1.classList.remove("u-menu-slider-active");
    sliderBtn2.classList.remove("u-menu-slider-active");
    sliderBtn3.classList.remove("u-menu-slider-active");
    sliderBtn4.classList.add("u-menu-slider-active");
};