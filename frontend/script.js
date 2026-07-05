
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {

    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const allNavLinks = navLinks.querySelectorAll('.nav-link');

for (let i = 0; i < allNavLinks.length; i++) {
    allNavLinks[i].addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
}

const typewriterEl = document.getElementById('typewriter');
const phrases = ['Web Developer', 'CSE Student', 'Problem Solver'];
let phraseIndex = 0;  
let charIndex = 0;    
let isDeleting = false; 

function typewrite() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {

        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {

        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000; 
        isDeleting = true;
    } 

    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; 
    }

    setTimeout(typewrite, typingSpeed);
}

typewrite();

const elementsToAnimate = document.querySelectorAll('.about-grid, .skill-category, .project-card, .timeline-item, .contact-grid, .section-header');

for (let i = 0; i < elementsToAnimate.length; i++) {
    elementsToAnimate[i].classList.add('reveal');
}

function checkReveal() {
    for (let i = 0; i < elementsToAnimate.length; i++) {

        const elementTop = elementsToAnimate[i].getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            elementsToAnimate[i].classList.add('visible');
        }
    }
}

checkReveal();

window.addEventListener('scroll', checkReveal);

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const buttonText = contactForm.querySelector('.btn-submit span');

    buttonText.textContent = 'Message Sent! ✓';

    setTimeout(() => {
        buttonText.textContent = 'Send Message';
        contactForm.reset(); 
    }, 3000);
});
