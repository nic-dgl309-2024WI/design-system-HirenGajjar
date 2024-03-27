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
window.onload = function() {
    sliderBtn1.classList.add("u-menu-slider-active");
};
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

//Accordian

let acc = document.querySelectorAll('.faq-acc');
acc.forEach(accordian => {
    let accIcon = accordian.querySelector('.faq-acc__que-icon');
    let accAns = accordian.querySelector('.faq-acc__ans');
    accordian.addEventListener('click', () => {
        acc.forEach(otherAccordion => {
            if (otherAccordion !== accordian) {
                otherAccordion.querySelector('.faq-acc__ans').classList.remove('expand');
                otherAccordion.querySelector('.faq-acc__que-icon').textContent = '+';
            }
        });
        accAns.classList.toggle('expand');
        accIcon.textContent = accIcon.textContent === '+' ? '-' : '+';
    });
});

//Desk
let deskSlider = document.getElementById('desk-slider');
let deskBtn1 = document.getElementById('desk-btn1');
let deskBtn2 = document.getElementById('desk-btn2');
let deskBtn3 = document.getElementById('desk-btn3');
let deskBtn4 = document.getElementById('desk-btn4');
window.onload = function() {
    deskBtn1.classList.add("u-menu-slider-active");
};
deskBtn1.onclick = function() {
    deskSlider.style.transform = "translateX(0px)";
    deskBtn1.classList.add("u-menu-slider-active");
    deskBtn2.classList.remove("u-menu-slider-active");
    deskBtn3.classList.remove("u-menu-slider-active");
    deskBtn4.classList.remove("u-menu-slider-active");
};
deskBtn2.onclick = function() {
    deskSlider.style.transform = "translateX(-110px)";
    deskBtn1.classList.remove("u-menu-slider-active");
    deskBtn2.classList.add("u-menu-slider-active");
    deskBtn3.classList.remove("u-menu-slider-active");
    deskBtn4.classList.remove("u-menu-slider-active");
};
deskBtn3.onclick = function() {
    deskSlider.style.transform = "translateX(-300px)";
    deskBtn1.classList.remove("u-menu-slider-active");
    deskBtn2.classList.remove("u-menu-slider-active");
    deskBtn3.classList.add("u-menu-slider-active");
    deskBtn4.classList.remove("u-menu-slider-active");
};
deskBtn4.onclick = function() {
    deskSlider.style.transform = "translateX(-400px)";
    deskBtn1.classList.remove("u-menu-slider-active");
    deskBtn2.classList.remove("u-menu-slider-active");
    deskBtn3.classList.remove("u-menu-slider-active");
    deskBtn4.classList.add("u-menu-slider-active");
};