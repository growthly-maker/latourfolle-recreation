document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile toggle
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            nav.classList.toggle('active');
            if (authButtons) {
                authButtons.classList.toggle('active');
            }
            this.classList.toggle('active');
        });
    }
    
    // Témoignages Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Fonction pour afficher un témoignage spécifique
    function showTestimonial(index) {
        // Masquer tous les témoignages
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        
        // Enlever la classe active de tous les points
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Afficher le témoignage actif et son point
        if (testimonials[index]) {
            testimonials[index].style.display = 'block';
        }
        
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentIndex = index;
    }
    
    // Configuration des événements pour les boutons précédent/suivant
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = testimonials.length - 1;
            }
            showTestimonial(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) {
                newIndex = 0;
            }
            showTestimonial(newIndex);
        });
    }
    
    // Configuration des événements pour les points
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Afficher le premier témoignage au chargement
    showTestimonial(0);
    
    // Auto rotation des témoignages
    setInterval(() => {
        if (nextBtn) {
            nextBtn.click();
        }
    }, 8000);
    
    // Animation scroll doux pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajustement pour le header fixe
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation d'apparition au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.feature-card, .course-card, .testimonial').forEach(el => {
        observer.observe(el);
    });
    
    // Gestion du formulaire de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Simuler l'envoi d'un formulaire (remplacer par une vraie API)
                console.log('Email soumis:', email);
                
                // Afficher un message de confirmation
                alert('Merci pour votre inscription à notre newsletter !');
                
                // Réinitialiser le formulaire
                this.reset();
            }
        });
    }
});
