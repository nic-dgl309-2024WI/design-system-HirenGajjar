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