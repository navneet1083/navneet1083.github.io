/* ============================================
   Navigation — Sticky, Mobile, Active Links
   ============================================ */

(function() {
    'use strict';

    window.Portfolio = window.Portfolio || {};

    window.Portfolio.initNavigation = function() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const scrollProgress = document.getElementById('scrollProgress');
        const navLinks = document.querySelectorAll('.navbar__link');
        const sections = document.querySelectorAll('section[id]');

        // Sticky navbar on scroll
        function handleScroll() {
            const scrollY = window.scrollY;

            // Navbar background
            if (scrollY > 50) {
                navbar.classList.add('navbar--scrolled');
            } else {
                navbar.classList.remove('navbar--scrolled');
            }

            // Scroll progress bar
            if (scrollProgress) {
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (scrollY / docHeight) * 100;
                scrollProgress.style.width = progress + '%';
            }
        }

        // Active section highlighting
        function updateActiveLink() {
            const scrollY = window.scrollY + 100;

            sections.forEach(function(section) {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach(function(link) {
                        link.classList.remove('navbar__link--active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('navbar__link--active');
                        }
                    });
                }
            });
        }

        // Mobile menu toggle
        function toggleMobile() {
            hamburger.classList.toggle('navbar__hamburger--active');
            mobileMenu.classList.toggle('navbar__mobile--open');
            document.body.style.overflow = mobileMenu.classList.contains('navbar__mobile--open') ? 'hidden' : '';
        }

        // Close mobile menu on link click
        function closeMobile() {
            hamburger.classList.remove('navbar__hamburger--active');
            mobileMenu.classList.remove('navbar__mobile--open');
            document.body.style.overflow = '';
        }

        // Event listeners
        window.addEventListener('scroll', function() {
            handleScroll();
            updateActiveLink();
        }, { passive: true });

        if (hamburger) {
            hamburger.addEventListener('click', toggleMobile);
        }

        // Close mobile menu when clicking a link
        var mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.navbar__link') : [];
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', closeMobile);
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobile();
            }
        });

        // Close mobile menu on click outside
        document.addEventListener('click', function(e) {
            if (mobileMenu && mobileMenu.classList.contains('navbar__mobile--open')) {
                if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                    closeMobile();
                }
            }
        });

        // Run once on load
        handleScroll();
        updateActiveLink();
    };
})();
