// ===================================
// NAVIGATION & HAMBURGER MENU
// ===================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLL TO SECTION
// ===================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(102, 126, 234, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeIn 0.6s ease-out forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===================================
// FORM SUBMISSION
// ===================================

const contactForm = document.querySelector('.contact-form');

function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
    
    // Create mailto link
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Reset form
    event.target.reset();
    
    // Show success message
    showNotification('Message sent! Check your mail client.');
}

// ===================================
// NOTIFICATION SYSTEM
// ===================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        z-index: 2000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// ===================================
// ANIMATED COUNTER FOR STATS
// ===================================

const stats = document.querySelectorAll('.stat h3');

function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Trigger counter animation when section is visible
const statsSection = document.querySelector('.about');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            stats.forEach(stat => animateCounter(stat));
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// PARALLAX EFFECT
// ===================================

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const stars = document.querySelector('.stars');
    
    if (stars) {
        stars.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ===================================
// MOUSE FOLLOW EFFECT ON CARDS
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(102, 126, 234, 0.2) 0%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(102, 126, 234, 0.05) 100%
            )
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(102, 126, 234, 0.05) 100%)';
    });
});

// ===================================
// TYPING EFFECT (Optional - for hero subtitle)
// ===================================

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    const words = text.split(' ');
    
    heroSubtitle.textContent = '';
    let wordIndex = 0;
    
    function typeWord() {
        if (wordIndex < words.length) {
            const word = document.createElement('span');
            word.style.animation = `fadeIn 0.5s ease-out`;
            word.textContent = (wordIndex > 0 ? ' ' : '') + words[wordIndex];
            heroSubtitle.appendChild(word);
            wordIndex++;
            setTimeout(typeWord, 200);
        }
    }
    
    window.addEventListener('load', typeWord);
}

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const revealElements = document.querySelectorAll('.project-card, .skill-category, .stat');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `bentoEntry 0.6s ease-out forwards`;
            entry.target.style.animationDelay = `${index * 0.05}s`;
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Add the animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes bentoEntry {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;
document.head.appendChild(style);

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add active styling
const styleActive = document.createElement('style');
styleActive.textContent = `
    .nav-link.active {
        color: #667eea;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(styleActive);

// ===================================
// GRADIENT ANIMATION FOR BUTTONS
// ===================================

const buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

// ===================================
// PAGE LOAD ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===================================
// SMOOTH SCROLL BEHAVIOR ENHANCEMENT
// ===================================

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link') || 
        e.target.closest('.nav-link') ||
        e.target.classList.contains('btn') ||
        e.target.closest('.btn')) {
        
        const href = e.target.getAttribute('href') || e.target.closest('a')?.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
});

// ===================================
// LAZY LOAD IMAGES (if any)
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// CURSOR ANIMATION (Optional)
// ===================================

const cursor = document.createElement('div');
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid rgba(102, 126, 234, 0.5);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 10) + 'px';
    cursor.style.top = (e.clientY - 10) + 'px';
    cursor.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

// ===================================
// RESPONSIVE BREAKPOINT HANDLER
// ===================================

function handleResponsive() {
    const width = window.innerWidth;
    
    if (width <= 768) {
        // Mobile adjustments
        document.body.style.fontSize = '14px';
    } else {
        document.body.style.fontSize = '16px';
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();

// ===================================
// LOCAL STORAGE FOR THEME (Dark/Light)
// ===================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

initTheme();

console.log('Portfolio website loaded successfully! 🚀');
