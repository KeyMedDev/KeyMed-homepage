# KeyMed Homepage

Rpositorio de la página web de **KeyMedDev**. Este proyecto es una landing page moderna, minimalista y funcional, diseñada para mostrar un portafolio de proyectos, información profesional y canales de contacto.

## 🚀 Características

- **Glassmorphism:** Navegación superior con efecto de desenfoque moderno.
- **Gestión de Proyectos:** Sistema de tarjetas (Cards) con etiquetas categorizadas (Web, App, Game, Hardware).
- **Integraciones de Formularios:**
  - Formulario de contacto integrado con **Formspree**.
  - Suscripción a Newsletter conectada con **Mailchimp**.
- **Micro-interacciones:** Animaciones fluidas en botones, tarjetas y campos de entrada.

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica.
- **CSS3:** Diseño personalizado utilizando variables, Flexbox y CSS Grid.
- **JavaScript:** Lógica de envío asíncrono y manipulación del DOM.
- **Google Fonts:** Tipografías 'Poppins' e 'Inter'.

## 📁 Estructura del Proyecto

```text
KeyMed-homepage/
├── css/
│   ├── style.css         # Estilos globales y variables.
│   ├── components.css    # UI Kit (Botones, Tarjetas, Formularios).
│   └── animations.css    # Transiciones y efectos hover.
├── js/
│   └── main.js           # Lógica de formularios y AJAX.
├── index.html            # Página principal.
└── README.md             # Documentación del proyecto.
```

## ⚙️ Configuración

Para que los formularios funcionen correctamente, asegúrate de actualizar los atributos `action` en el HTML:

1. **Contacto:** Reemplaza el endpoint de Formspree en el formulario con clase `.contact-form`.
2. **Newsletter:** Reemplaza la URL de suscripción de Mailchimp en el formulario con clase `.newsletter-form`.

## ✒️ Autor

**KeyMedDev**  
*Desarrollador y Diseñador del sitio.*
