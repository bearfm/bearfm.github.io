// Main JavaScript for Geographic Journal Theme

// Night Mode Functionality
function switchNightMode() {
    const night = getCookie('night') || '0';
    if (night === '0') {
        document.body.classList.add('night');
        setCookie('night', '1', 365);
        console.log('夜间模式开启');
    } else {
        document.body.classList.remove('night');
        setCookie('night', '0', 365);
        console.log('夜间模式关闭');
    }
}

function initNightMode() {
    const nightCookie = getCookie('night');
    
    if (nightCookie === '') {
        // Auto night mode between 9 PM and 5 AM
        const currentHour = new Date().getHours();
        if (currentHour > 21 || currentHour < 5) {
            document.body.classList.add('night');
            setCookie('night', '1', 365);
            console.log('夜间模式自动开启');
        } else {
            document.body.classList.remove('night');
            setCookie('night', '0', 365);
            console.log('夜间模式自动关闭');
        }
    } else {
        if (nightCookie === '0') {
            document.body.classList.remove('night');
        } else if (nightCookie === '1') {
            document.body.classList.add('night');
        }
    }
}

// Cookie Utilities
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return '';
}

// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    initNightMode();
    initScrollEffects();
    initNavigation();
    initArchiveFilter();
    initImageLazyLoading();
    initTypographyEffects();
});

// Scroll Effects
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    // Parallax effect for hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = hero.querySelector('.hero-background img');
        
        if (heroBackground) {
            heroBackground.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
        }
        
        // Navbar background on scroll
        if (navbar && scrolled > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else if (navbar) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
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
    document.querySelectorAll('.article-card, .archive-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.querySelector('.nav-menu');
    
    // Mobile menu toggle
    const createMobileMenu = () => {
        if (document.querySelector('.mobile-menu-toggle')) return;
        
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-toggle';
        menuButton.innerHTML = '☰';
        menuButton.setAttribute('aria-label', 'Toggle menu');
        
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
            this.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
        
        document.querySelector('.navbar .container').appendChild(menuButton);
    };
    
    // Add mobile menu for small screens
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    // Update on resize
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth <= 768) {
            createMobileMenu();
        } else {
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (toggle) toggle.remove();
            if (navMenu) navMenu.classList.remove('active');
        }
    }, 250));
}

// Archive Filter
function initArchiveFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const archiveCards = document.querySelectorAll('.archive-card');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            archiveCards.forEach(card => {
                const shouldShow = filter === 'all' || card.dataset.category === filter;
                
                if (shouldShow) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Lazy loading for images
function initImageLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver(function(entries) {
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
    } else {
        // Fallback for older browsers
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Typography effects
function initTypographyEffects() {
    // Add reading progress indicator only on post pages
    if (document.querySelector('.post')) {
        addReadingProgress();
    }
    
    // Highlight current section in post
    if (document.querySelector('.post-body')) {
        highlightCurrentSection();
    }
}

function addReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

function highlightCurrentSection() {
    const headings = document.querySelectorAll('.post-body h2, .post-body h3');
    if (headings.length === 0) return;
    
    const sections = Array.from(headings).map(heading => ({
        element: heading,
        offset: heading.offsetTop
    }));
    
    let currentSection = sections[0];
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            if (scrollPosition >= section.offset) {
                currentSection = section;
            }
        });
        
        // Remove previous highlights
        sections.forEach(s => s.element.classList.remove('current-section'));
        // Add highlight to current section
        if (currentSection) {
            currentSection.element.classList.add('current-section');
        }
    });
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
        background-color: var(--primary-color, #fc0);
        z-index: 9999;
        transition: width 0.1s ease;
    }
    
    .current-section {
        color: var(--primary-color, #fc0) !important;
        transition: color 0.3s ease;
    }
    
    .social-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .social-links a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        opacity: 0.8;
    }
    
    .social-links a:hover {
        opacity: 1;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #333;
            cursor: pointer;
            padding: 0.5rem;
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
            z-index: 1000;
        }
        
        .nav-menu.active {
            display: flex;
        }
        
        .nav-menu a {
            padding: 0.75rem 0;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .nav-menu a:last-child {
            border-bottom: none;
        }
        
        body.night .mobile-menu-toggle {
            color: var(--dark-text, #f5f5f5);
        }
        
        body.night .nav-menu {
            background-color: var(--dark-bg, #252627);
        }
        
        body.night .nav-menu a {
            border-bottom-color: #444;
        }
        
        .social-links {
            gap: 0.75rem;
        }
    }
    
    @media (max-width: 480px) {
        .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }
`;

// Add styles to document
if (!document.querySelector('#dynamic-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'dynamic-styles';
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
}