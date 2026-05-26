/**
 * Gestión de Formularios y Estados de Envío
 * Maneja el envío asíncrono (AJAX) para el formulario de contacto y la newsletter.
 */

// --- SECCIÓN: FORMULARIO DE CONTACTO (Formspree) ---
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    // Referencia al párrafo donde se mostrará el mensaje de éxito/error
    const contactStatus = document.getElementById('contact-status');

    contactForm.addEventListener('submit', async function (event) {
        // Evita que el navegador abra la página de agradecimiento de Formspree
        event.preventDefault();

        // Recopila los datos de los inputs (name, email, message)
        const data = new FormData(event.target);

        try {
            // Envía los datos al servidor de Formspree de forma silenciosa
            const response = await fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json' // Especifica que esperamos una respuesta JSON
                }
            });

            if (response.ok) {
                // Si el servidor responde correctamente
                contactStatus.textContent = "El mensaje fue enviado con éxito!";
                contactStatus.className = "form-status success";
                contactStatus.style.display = "block";
                contactForm.reset(); // Limpia los campos del formulario

                // Oculta el mensaje de éxito automáticamente después de 5 segundos
                setTimeout(() => {
                    contactStatus.style.display = "none";
                }, 5000);
            } else {
                // Si hubo un problema controlado (ej. error 404 o 500)
                contactStatus.textContent = "Ocurrió un error al enviar el mensaje.";
                contactStatus.style.color = "red";
                contactStatus.style.display = "block";
            }
        } catch (error) {
            // Si hubo un problema de red (sin internet, servidor caído)
            contactStatus.textContent = "Error de conexión con el servidor.";
            contactStatus.style.color = "red";
            contactStatus.style.display = "block";
        }
    });
}

// --- SECCIÓN: NEWSLETTER (Mailchimp) ---
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    // Referencia al párrafo de estado específico para la newsletter
    const newsletterStatus = document.getElementById('newsletter-status');

    newsletterForm.addEventListener('submit', async function (event) {
        // Evita que se abra la pestaña de confirmación de Mailchimp
        event.preventDefault();

        const data = new FormData(event.target);

        try {
            /**
             * Envío a Mailchimp:
             * Se usa 'no-cors' porque Mailchimp no permite peticiones AJAX directas desde dominios externos.
             * Con 'no-cors' la petición se envía, pero no podemos leer la respuesta del servidor.
             */
            await fetch(event.target.action, {
                method: 'POST',
                body: data,
                mode: 'no-cors'
            });

            // Asumimos éxito al no haber errores de red y mostramos el feedback
            newsletterStatus.textContent = "Suscrito con éxito!";
            newsletterStatus.className = "form-status success";
            newsletterStatus.style.display = "block";
            newsletterForm.reset(); // Limpia el campo de email

            // Oculta el mensaje después de 5 segundos
            setTimeout(() => {
                newsletterStatus.style.display = "none";
            }, 5000);

        } catch (error) {
            // Si falla el envío (ej. sin conexión)
            newsletterStatus.textContent = "Ocurrió un error. Inténtalo de nuevo.";
            newsletterStatus.style.color = "red";
            newsletterStatus.style.display = "block";
        }
    });
}
