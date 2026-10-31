// Force scroll to top on page load for home page
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/nordpore/')) {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }
}

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .application-card, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation (for contact page)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        let isValid = true;
        Object.keys(data).forEach(key => {
            if (!data[key] && form.querySelector(`[name="${key}"]`).hasAttribute('required')) {
                isValid = false;
                form.querySelector(`[name="${key}"]`).classList.add('error');
            } else {
                form.querySelector(`[name="${key}"]`).classList.remove('error');
            }
        });
        
        if (isValid) {
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Initialize form validation
validateForm('contactForm');
validateForm('evaluationForm');

// Hero Background Carousel functionality
let currentSlideIndex = 0;
let autoSlideInterval;

function showHeroSlide(index) {
    const slides = document.querySelectorAll('.hero-carousel-slide');
    
    if (!slides.length) return;
    
    // Wrap around
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    slides[currentSlideIndex].classList.add('active');
}

function autoSlide() {
    showHeroSlide(currentSlideIndex + 1);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000); // Auto-advance every 5 seconds
}

// Initialize hero background carousel
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hero-carousel-slide')) {
        showHeroSlide(0);
        resetAutoSlide();
    }
});

