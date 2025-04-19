// Constants
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const menuMobile = document.querySelector("#menu_mobile");
const progressIndicator = document.querySelector("#progress-indicator");
const sections = document.querySelectorAll("section");
const navbar = document.querySelector("#Navbar");

// Mobile menu toggle
function switch_menu() {
    menuMobile.classList.toggle("display_none");
    document.body.classList.toggle('menu-open');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('#menu_mobile a').forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.add("display_none");
        document.body.classList.remove('menu-open');
    });
});

// Scroll progress indicator
function getScrollPercent() {
    const h = document.documentElement, 
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Hide/Show navbar on scroll
let lastScroll = 0;
const navbarHeight = navbar.offsetHeight;

function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Update progress indicator
    progressIndicator.style.marginLeft = Math.min(Math.max(getScrollPercent()-1,2),95)+"%";
    
    // Navbar show/hide logic
    if (currentScroll > lastScroll && currentScroll > navbarHeight) {
        // Scrolling down & past navbar
        navbar.style.transform = `translateY(-${navbarHeight}px)`;
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
}

// Throttle scroll event
let ticking = false;
window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Handle resize events
window.addEventListener('resize', () => {
    if (window.innerWidth > 740) {
        menuMobile.classList.add("display_none");
        document.body.classList.remove('menu-open');
    }
});

// Add touch event handling for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
}, false);

document.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].clientY;
    handleTouchMove();
}, false);

function handleTouchMove() {
    const difference = touchStartY - touchEndY;
    if (Math.abs(difference) > 50) { // Minimum swipe distance
        if (difference > 0) {
            // Swipe up - hide navbar
            navbar.style.transform = `translateY(-${navbarHeight}px)`;
        } else {
            // Swipe down - show navbar
            navbar.style.transform = 'translateY(0)';
        }
    }
}
