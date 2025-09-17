// Main JavaScript for Bali Travel Blog

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavbar();
    initScrollAnimations();
    initTimelineNavigation();
    initSmoothScrolling();
    initHeroEffects();
    initPhotoGallery();
});

// Navbar scroll effects
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink(); 
    });
}

// Smooth scroll animations for sections
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
        observer.observe(section);
    });
}

// Timeline navigation functionality
function initTimelineNavigation() {
    const dayMarkers = document.querySelectorAll('.day-marker');
    const dayEntries = document.querySelectorAll('.day-entry');
    
    // Highlight current day marker based on scroll position
    window.addEventListener('scroll', throttle(function() {
        let current = '';
        
        dayEntries.forEach(entry => {
            const rect = entry.getBoundingClientRect();
            const offset = window.innerHeight / 3;
            
            if (rect.top <= offset && rect.bottom >= offset) {
                current = entry.id;
            }
        });
        
        // Update active marker
        dayMarkers.forEach(marker => {
            marker.classList.remove('active');
            if (marker.getAttribute('href') === '#' + current) {
                marker.classList.add('active');
            }
        });
    }, 100));
    
    // Smooth scroll to day when marker is clicked
    dayMarkers.forEach(marker => {
        marker.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Scroll to the day header (beginning of the day section)
                const dayHeader = targetElement.querySelector('.day-header');
                const scrollTarget = dayHeader || targetElement;
                // Use getBoundingClientRect for more accurate positioning
                const rect = scrollTarget.getBoundingClientRect();
                const offsetTop = window.pageYOffset + rect.top - 100; // Offset for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Smooth scrolling for all internal links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or already handled by timeline navigation
            if (href === '#' || this.classList.contains('day-marker')) {
                return;
            }
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 140; // Increased offset for header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Hero banner effects with image fade
function initHeroEffects() {
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    
    // Fade out hero image and content as user scrolls
    window.addEventListener('scroll', throttle(function() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (heroImage && heroContent) {
            // Calculate opacity based on scroll position
            const opacity = Math.max(0, 1 - (scrolled / (windowHeight * 0.8)));
            
            heroImage.style.opacity = opacity;
            heroContent.style.opacity = opacity;
        }
    }, 16));
    
    // Auto-scroll hint animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Photo gallery with lazy loading and lightbox functionality
function initPhotoGallery() {
    const photos = document.querySelectorAll('.clickable-image, .day-timeline-image');
    
    photos.forEach(photo => {
        // Set up lazy loading with thumbnails
        setupLazyImage(photo);
        
        photo.addEventListener('click', function() {
            const fullResSrc = this.dataset.fullres || this.src;
            createLightbox(fullResSrc, this.alt);
        });
    });
}

// Setup lazy loading for images with thumbnail support
function setupLazyImage(img) {
    const originalSrc = img.src;
    
    // Create thumbnail version by adding a query parameter or using a smaller version
    // For now, we'll use CSS to create a lower quality initial load
    img.style.filter = 'blur(2px)';
    img.style.transition = 'filter 0.3s ease';
    
    // Store full resolution source
    img.dataset.fullres = originalSrc;
    
    // Create a new image to preload the full resolution
    const fullResImg = new Image();
    fullResImg.onload = function() {
        img.style.filter = 'none';
        img.classList.add('loaded');
    };
    
    // Use Intersection Observer to load full resolution when image comes into view
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fullResImg.src = originalSrc;
                imageObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    imageObserver.observe(img);
}

// Create lightbox for photo viewing with full resolution loading
function createLightbox(src, alt) {
    // Remove existing lightbox if any
    const existingLightbox = document.querySelector('.lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }
    
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <div class="lightbox-loading">Loading...</div>
            <img class="lightbox-image" style="display: none;" alt="${alt}">
            <button class="lightbox-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    
    // Load full resolution image
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const loadingDiv = lightbox.querySelector('.lightbox-loading');
    
    lightboxImg.onload = function() {
        loadingDiv.style.display = 'none';
        lightboxImg.style.display = 'block';
    };
    
    lightboxImg.src = src;
    
    // Animate in
    setTimeout(() => {
        lightbox.classList.add('show');
    }, 10);
    
    // Close functionality
    function closeLightbox() {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (lightbox.parentNode) {
                lightbox.parentNode.removeChild(lightbox);
            }
        }, 300);
    }
    
    // Close button
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', closeLightbox);
    
    // Click outside to close (including clicking on the lightbox background)
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-content')) {
            closeLightbox();
        }
    });
    
    // Close on escape key
    const escapeHandler = function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Update active navigation link based on current section
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], main[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = 'home'; // default
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

// Utility function to throttle scroll events
function throttle(func, wait) {
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

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create placeholder for missing images
            this.style.background = 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.color = '#999';
            this.style.fontSize = '14px';
            this.style.minHeight = '200px';
            this.alt = 'Image placeholder - ' + (this.alt || 'Photo coming soon');
        });
    });
});

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
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

// Initialize lazy loading if data-src attributes are present
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Mobile navigation improvements
function initMobileNav() {
    const navbar = document.querySelector('.navbar');
    const timelineNav = document.querySelector('.timeline-nav-inline');
    
    // Hide timeline navigation on mobile when scrolling
    if (window.innerWidth <= 1200) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', throttle(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                if (timelineNav) {
                    timelineNav.style.opacity = '0.5';
                }
            } else {
                // Scrolling up
                if (timelineNav) {
                    timelineNav.style.opacity = '1';
                }
            }
            lastScrollTop = scrollTop;
        }, 100));
    }
}

// Initialize mobile navigation
document.addEventListener('DOMContentLoaded', initMobileNav);

// Smooth reveal animations for photos
function initPhotoAnimations() {
    const photoRows = document.querySelectorAll('.photo-row');
    
    const photoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const photos = entry.target.querySelectorAll('.story-photo');
                photos.forEach((photo, index) => {
                    setTimeout(() => {
                        photo.style.opacity = '1';
                        photo.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.2 });
    
    photoRows.forEach(row => {
        const photos = row.querySelectorAll('.story-photo');
        photos.forEach(photo => {
            photo.style.opacity = '0';
            photo.style.transform = 'translateY(20px)';
            photo.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });
        photoObserver.observe(row);
    });
}

// Initialize photo animations
document.addEventListener('DOMContentLoaded', initPhotoAnimations);

// Apply throttling to scroll-heavy functions
window.addEventListener('scroll', throttle(function() {
    // Any additional scroll-based functionality can be added here
}, 16)); // ~60fps

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create placeholder for missing images
            this.style.background = 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.color = '#999';
            this.style.fontSize = '14px';
            this.alt = 'Image placeholder - ' + (this.alt || 'Photo coming soon');
        });
    });
});
