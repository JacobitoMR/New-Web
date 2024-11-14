// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del scroll suave para los enlaces de navegación
    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            // Prevenir el comportamiento predeterminado del enlace
            e.preventDefault();
            
            // Obtener el elemento al que se quiere desplazar
            const seccionDestino = document.querySelector(this.getAttribute('href'));
            
            // Realizar el scroll suave
            window.scrollTo({
                top: seccionDestino.offsetTop - 80, // Ajuste para el header fijo
                behavior: 'smooth'
            });
        });
    });

    // Detectar la sección visible actual para resaltarla en el menú
    const secciones = document.querySelectorAll('section');
    const itemsMenu = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let seccionActual = '';
        
        // Detectar qué sección está visible
        secciones.forEach(seccion => {
            const distanciaTop = seccion.offsetTop;
            const altoSeccion = seccion.clientHeight;
            
            if (pageYOffset >= distanciaTop - 150) {
                seccionActual = seccion.getAttribute('id');
            }
        });

        // Actualizar clase 'active' en el menú
        itemsMenu.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === seccionActual) {
                item.classList.add('active');
            }
        });
    });

    // Configuración de las animaciones de aparición
    const opcionesObservador = {
        threshold: 0.2 // Porcentaje de visibilidad necesario para activar
    };

    // Crear el observador para las animaciones
    const observador = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, opcionesObservador);

    // Aplicar el observador a todas las secciones
    secciones.forEach(seccion => {
        seccion.classList.add('fade-in');
        observador.observe(seccion);
    });

    // Función para manejar el botón "Volver arriba" (opcional)
    function mostrarBotonVolverArriba() {
        const botonArriba = document.createElement('button');
        botonArriba.innerHTML = '↑';
        botonArriba.className = 'boton-arriba';
        document.body.appendChild(botonArriba);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                botonArriba.style.display = 'block';
            } else {
                botonArriba.style.display = 'none';
            }
        });

        botonArriba.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Inicializar el botón de volver arriba
    mostrarBotonVolverArriba();
});
