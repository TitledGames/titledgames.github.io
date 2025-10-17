/**
 * TITLED GAMES WEBSITE JAVASCRIPT
 * 
 * This script handles all interactive features of the website:
 * - Mobile navigation menu
 * - Smooth scrolling
 * - Back to top button
 * - Particle animation system
 * - Scroll-based animations
 * 
 * Well-documented for easy maintenance by the team
 */

// ============================================
// INITIALIZATION
// Wait for DOM to be fully loaded before running scripts
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initParticles();
    initScrollAnimations();
    initBackToTop();
});

// ============================================
// NAVIGATION FUNCTIONALITY
// Handles mobile menu toggle and smooth scrolling
// ============================================
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// PARTICLE ANIMATION SYSTEM
// Creates floating particles in the hero section
// ============================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;
    
    // Configuration for particle system
    const particleCount = 50; // Number of particles to create
    const colors = [
        'rgba(108, 99, 255, 0.5)',  // Primary purple
        'rgba(255, 101, 132, 0.5)', // Secondary pink
        'rgba(0, 217, 255, 0.5)'    // Accent cyan
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer, colors);
    }
}

/**
 * Creates a single particle with random properties
 * @param {HTMLElement} container - The container to add the particle to
 * @param {Array} colors - Array of possible colors for the particle
 */
function createParticle(container, colors) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties for variety
    const size = Math.random() * 5 + 2; // 2-7px
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * 100; // 0-100% from left
    const startY = Math.random() * 100; // 0-100% from top
    const duration = Math.random() * 20 + 15; // 15-35s animation
    const delay = Math.random() * 10; // 0-10s delay
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;
    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    container.appendChild(particle);
}

// ============================================
// SCROLL ANIMATIONS
// Adds fade-in effects when elements come into view
// ============================================
function initScrollAnimations() {
    // Elements to animate on scroll
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element enters viewport
    };
    
    // Callback function for intersection observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };
    
    // Create observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.value-item, .game-card, .team-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ============================================
// BACK TO TOP BUTTON
// Shows/hides button based on scroll position
// ============================================
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// Helper functions that can be used throughout the site
// ============================================

/**
 * Debounce function to limit how often a function can be called
 * Useful for scroll and resize events
 * @param {Function} func - The function to debounce
 * @param {number} wait - Time to wait in milliseconds
 */
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

/**
 * Checks if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// PERFORMANCE OPTIMIZATION
// Optimize animations for better performance
// ============================================

// Pause animations when tab is not visible
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause heavy animations when tab is hidden
        document.querySelectorAll('.particle').forEach(particle => {
            particle.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when tab is visible
        document.querySelectorAll('.particle').forEach(particle => {
            particle.style.animationPlayState = 'running';
        });
    }
});

// ============================================
// CONSOLE MESSAGE
// Fun message for developers who inspect the site
// ============================================
console.log('%c🎮 Titled Games', 'font-size: 24px; font-weight: bold; color: #6C63FF;');
console.log('%cWe Do Games', 'font-size: 16px; color: #FF6584;');
console.log('%cInterested in joining our team? Check out github.com/titledgames', 'font-size: 12px; color: #00D9FF;');
