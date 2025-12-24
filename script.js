
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const workBtn = document.getElementById('workBtn');
const skillsBtn = document.getElementById('skillsBtn');
const workDropdown = document.getElementById('workDropdown');
const skillsDropdown = document.getElementById('skillsDropdown');

const downloadCV = document.getElementById('downloadCV');
const contactBtn = document.getElementById('contactBtn');
const homeVideoBg = document.getElementById('homeVideoBg');
const navbar = document.getElementById('navbar');

const contactItems = document.querySelectorAll('.contact-item');
const statNumbers = document.querySelectorAll('.stat-number');
const progressBars = document.querySelectorAll('.progress');
const timelineItems = document.querySelectorAll('.timeline-item');
const passionCards = document.querySelectorAll('.passion-card');


if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        closeAllDropdowns();
    });
}


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const target = document.querySelector(href);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }

        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }

        homeVideoBg.style.display = href === '#home' ? 'block' : 'none';
        closeAllDropdowns();
    });
});


function closeAllDropdowns() {
    if (workDropdown) workDropdown.classList.remove('show');
    if (skillsDropdown) skillsDropdown.classList.remove('show');
}

if (workBtn) {
    workBtn.addEventListener('mouseenter', (e) => {
        e.stopPropagation();
        workDropdown.classList.toggle('show');
        skillsDropdown.classList.remove('show');
    });
}

if (skillsBtn) {
    skillsBtn.addEventListener('mouseenter', (e) => {
        e.stopPropagation();
        skillsDropdown.classList.toggle('show');
        workDropdown.classList.remove('show');
    });
}

document.addEventListener('click', (e) => {
    if (
        !workBtn?.contains(e.target) &&
        !skillsBtn?.contains(e.target) &&
        !workDropdown?.contains(e.target) &&
        !skillsDropdown?.contains(e.target)
    ) {
        closeAllDropdowns();
    }
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        const pageUrl = item.getAttribute('href');
        const projectType = item.dataset.project; 

        window.location.href = `${pageUrl}?project=${projectType}`;
    });
});

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop - 100,
                behavior: 'smooth'
            });
        }
        homeVideoBg.style.display = 'none';
    });
}


if (contactItems.length > 0) {
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('i');
            if (icon) icon.style.transform = 'scale(1.2)';
        });
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('i');
            if (icon) icon.style.transform = 'scale(1)';
        });
    });
}


window.addEventListener('scroll', () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        navbar.style.backdropFilter = 'blur(12px)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(6px)';
    }
});


const video = document.querySelector('.video-background video');
if (video) {
    video.play().catch(() => {
        
    });
}


if (downloadCV) {
    downloadCV.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('images/Samruddhi.pdf', '_blank');
    });
}


const yearEl = document.querySelector('.footer p');
if (yearEl) {
    yearEl.innerHTML = yearEl.innerHTML.replace('2024', new Date().getFullYear());
}


if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        const phoneNumber = '918459227101'; 
        const message = encodeURIComponent('Hello, we are interested to contact you. Please share more details.');

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    });
}


