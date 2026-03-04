document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Stop observing once animated
            }
        });
    }, observerOptions);

    // Add animation classes to elements you want to fade in
    // For now we just add a basic setup, you could add CSS classes like .fade-in to elements
    const animateElements = document.querySelectorAll('.section-title, .proof-card, .compare-card, .pricing-card');
    
    animateElements.forEach(el => {
        // el.style.opacity = '0';
        // el.style.transform = 'translateY(20px)';
        // el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        // You can uncomment the above lines or manage it entirely in CSS by adding a .fade-up class
    });
});
