document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    const formFeedback = document.getElementById('form-feedback');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate form submission
            setTimeout(() => {
                formFeedback.textContent = 'Thank you for subscribing!';
                formFeedback.className = 'success';
                this.reset();
                
                // Clear feedback after 3 seconds
                setTimeout(() => {
                    formFeedback.textContent = '';
                    formFeedback.className = '';
                }, 3000);
            }, 500);
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const subject = this.querySelector('#subject').value;
            const message = this.querySelector('#message').value;
            
            // Simulate form submission
            setTimeout(() => {
                contactFeedback.textContent = `Thank you, ${name}! Your message has been sent.`;
                contactFeedback.className = 'success';
                this.reset();
                
                // Clear feedback after 5 seconds
                setTimeout(() => {
                    contactFeedback.textContent = '';
                    contactFeedback.className = '';
                }, 5000);
            }, 500);
        });
    }
    
    // Form submission
    const commentForm = document.getElementById('comment-form');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get values
            const name = this.querySelector('#comment-name').value;
            const email = this.querySelector('#comment-email').value;
            const comment = this.querySelector('#comment-text').value;
            
            // Simulate form submission
            setTimeout(() => {
                alert(`Thank you, ${name}! Your comment has been submitted for review.`);
                this.reset();
            }, 500);
        });
    }
    
    // Smooth scrolling - anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});