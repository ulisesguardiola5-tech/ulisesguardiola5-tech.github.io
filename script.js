document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Alternador de Tema (Dark/Light Mode) con localStorage ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Revisar si hay preferencia guardada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.replace('light-mode', 'dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        }
    });

    // --- 2. Menú Hamburguesa ---
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggleBtn.addEventListener('click', () => {
        // Intercala la clase que oculta/muestra el menú en móviles
        mainNav.classList.toggle('nav-hidden');
    });

    // --- 3. Validación de Formulario en el DOM ---
    const contactForm = document.getElementById('contact-form');
    const formAlerts = document.getElementById('form-alerts');

    contactForm.addEventListener('submit', (evento) => {
        // Prevenir que la página se recargue al enviar
        evento.preventDefault(); 
        
        // Limpiar alertas previas
        formAlerts.innerHTML = '';

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Expresión regular para validar formato de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errores = [];

        // Validaciones
        if (nombre === '') {
            errores.push('El campo Nombre no puede estar vacío.');
        }
        if (correo === '') {
            errores.push('El campo Correo no puede estar vacío.');
        } else if (!emailRegex.test(correo)) {
            errores.push('Por favor, ingresa un formato de correo electrónico válido.');
        }
        if (mensaje === '') {
            errores.push('El campo Mensaje no puede estar vacío.');
        }

        // Mostrar errores en el DOM o simular envío exitoso
        if (errores.length > 0) {
            formAlerts.innerHTML = errores.join('<br>');
        } else {
            formAlerts.style.color = 'green';
            formAlerts.innerHTML = '¡Mensaje enviado correctamente!';
            contactForm.reset(); // Limpiar el formulario
        }
    });
});