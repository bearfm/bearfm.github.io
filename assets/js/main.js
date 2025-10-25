// Main JavaScript for Geographic Journal Theme

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollEffects();
    initNavigation();
    initNewsletterForm();
    initImageLazyLoading();
    initTypographyEffects();
});

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        // Parallax effect for hero
        if (hero) {
            const scrolled = window.pageYOffset;
            const heroBackground = hero.querySelector('.hero-background img');
            if (heroBackground) {
                heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        }
    });
    
    // Fade in animation for articles
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe article cards
    document.querySelectorAll('.article-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
    
    // Mobile menu toggle (if needed)
    const createMobileMenu = () => {
        const navMenu = document.querySelector('.nav-menu');
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-toggle';
        menuButton.innerHTML = '☰';
        
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });
        
        document.querySelector('.navbar .container').appendChild(menuButton);
    };
    
    // Add mobile menu for small screens
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
}

// Newsletter form functionality
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button');
            const email = emailInput.value.trim();
            
            if (email) {
                // Simulate form submission
                submitButton.textContent = 'Subscribing...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    submitButton.textContent = 'Subscribed!';
                    submitButton.style.backgroundColor = '#4CAF50';
                    emailInput.value = '';
                    
                    setTimeout(() => {
                        submitButton.textContent = 'Subscribe';
                        submitButton.disabled = false;
                        submitButton.style.backgroundColor = '';
                    }, 2000);
                }, 1000);
            }
        });
    }
}

// Lazy loading for images
function initImageLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Typography effects
function initTypographyEffects() {
    // Add reading progress indicator
    const addReadingProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background-color: #ffcc00;
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    };
    
    // Add reading progress only on post pages
    if (document.querySelector('.post')) {
        addReadingProgress();
    }
    
    // Highlight current section in post
    const highlightCurrentSection = () => {
        const headings = document.querySelectorAll('.post-body h2, .post-body h3');
        const sections = Array.from(headings).map(heading => ({
            element: heading,
            offset: heading.offsetTop
        }));
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset + 200;
            
            sections.forEach(section => {
                if (scrollPosition >= section.offset) {
                    // Remove previous highlights
                    sections.forEach(s => s.element.classList.remove('current-section'));
                    // Add highlight to current section
                    section.element.classList.add('current-section');
                }
            });
        });
    };
    
    if (document.querySelector('.post-body')) {
        highlightCurrentSection();
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for dynamic effects
const additionalStyles = `
    .reading-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background-color: #ffcc00;
        z-index: 9999;
        transition: width 0.1s ease;
    }
    
    .current-section {
        color: #ffcc00 !important;
        transition: color 0.3s ease;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #333333;
            cursor: pointer;
        }
        
        .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active {
            display: flex;
        }
		
		body.night .mobile-menu-toggle {
			color: #f5f5f5;
		}
		
		body.night .nav-menu {
			background-color: #3b3d42;
		}
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);