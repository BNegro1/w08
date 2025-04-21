// Script para mejorar la experiencia de usuario

document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Detección de visibilidad para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden-section');
        observer.observe(section);
    });
    
    // Mejora para el modal de Audiofilia
    const audiofiliaModal = document.getElementById('audiofiliaModal');
    if (audiofiliaModal) {
        audiofiliaModal.addEventListener('show.bs.modal', event => {
            // Añadir animaciones personalizadas cuando se abre el modal
            setTimeout(() => {
                const modalBody = audiofiliaModal.querySelector('.modal-body');
                const elements = modalBody.querySelectorAll('h4, p, ul');
                
                elements.forEach((el, index) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(20px)';
                    
                    setTimeout(() => {
                        el.style.transition = 'all 0.5s ease';
                        el.style.opacity = '1';
                        el.style.transform = 'translateX(0)';
                    }, 100 * (index + 1));
                });
            }, 300);
        });
    }
    
    // Efecto de parallax para el fondo
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
        
        document.body.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    });
});

// Mejorar la interactividad de la sección de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    const formInputs = document.querySelectorAll('form input, form textarea');
    
    formInputs.forEach(input => {
        // Efecto de enfoque mejorado
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('input-focused');
            }
        });
    });
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Animación de envío
            const submitButton = this.querySelector('button[type="submit"]');
            
            submitButton.innerHTML = '<span class="spinner"></span> Enviando...';
            submitButton.classList.add('sending');
            
            // Esta función simularía el envío
            // Aquí normalmente estaría la lógica de envío real
        });
    }
});
