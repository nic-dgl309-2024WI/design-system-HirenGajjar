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