// Limpiar Formulario al enviar datos
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function() {
        setTimeout(() => {
            form.reset();
        }, 500);
    });

// Dark Mode