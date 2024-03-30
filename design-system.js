let icon = document.querySelector("#menu-icon");
icon.addEventListener('click', () => {
    if (window.innerWidth < 600) {
        document.querySelector(".mobile-sidebar").classList.toggle("open");
    }
});

// copy class
const copyClass = document.querySelectorAll('.copyClass');
copyClass.forEach(paragraph => {
    paragraph.addEventListener('click', function() {
        const tempInput = document.createElement('input');
        tempInput.value = this.textContent;
        document.body.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);

        document.execCommand('copy');
        document.body.removeChild(tempInput);
        copyNotification.style.top = `${event.clientY}px`;
        copyNotification.style.left = `${event.clientX}px`;
        copyNotification.style.display = 'block';
        setTimeout(() => {
            copyNotification.style.display = 'none';
        }, 500);

    });
});


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




window.onload = function() {
    sliderBtn1.classList.add("u-menu-slider-active")
    deskBtn1.classList.add("u-menu-slider-desk-active");
};



//Desk
let deskSlider = document.getElementById('carousel-slider');
let deskBtn1 = document.getElementById('car-btn1');
let deskBtn2 = document.getElementById('car-btn2');
let deskBtn3 = document.getElementById('car-btn3');
let deskBtn4 = document.getElementById('car-btn4');

window.onload = function() {
    
    deskBtn1.classList.add("u-menu-slider-desk-active");
};


deskBtn1.onclick = function() {
    deskSlider.style.transform = "translateX(0)";
    deskBtn1.classList.add("u-menu-slider-desk-active");
    deskBtn2.classList.remove("u-menu-slider-desk-active");
    deskBtn3.classList.remove("u-menu-slider-desk-active");
    deskBtn4.classList.remove("u-menu-slider-desk-active");
};
deskBtn2.onclick = function() {
    deskSlider.style.transform = "translateX(-100px)";
    deskBtn1.classList.remove("u-menu-slider-desk-active");
    deskBtn2.classList.add("u-menu-slider-desk-active");
    deskBtn3.classList.remove("u-menu-slider-desk-active");
    deskBtn4.classList.remove("u-menu-slider-desk-active");
};
deskBtn3.onclick = function() {
    deskSlider.style.transform = "translateX(-200px)";
    deskBtn1.classList.remove("u-menu-slider-desk-active");
    deskBtn2.classList.remove("u-menu-slider-desk-active");
    deskBtn3.classList.add("u-menu-slider-desk-active");
    deskBtn4.classList.remove("u-menu-slider-desk-active");
};
deskBtn4.onclick = function() {
    deskSlider.style.transform = "translateX(-300px)";
    deskBtn1.classList.remove("u-menu-slider-desk-active");
    deskBtn2.classList.remove("u-menu-slider-desk-active");
    deskBtn3.classList.remove("u-menu-slider-desk-active");
    deskBtn4.classList.add("u-menu-slider-desk-active");
};
