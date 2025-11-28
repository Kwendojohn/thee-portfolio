
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.getElementById(this.getAttribute('href').slice(1));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


const sections = document.querySelectorAll('section');

const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-section');
    observer.observe(section);
});

// ===== Lightbox for Project Images =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

const projectImgs = document.querySelectorAll('.project-images img');

projectImgs.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

// Close lightbox when clicking the X
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }
});
