document.addEventListener('DOMContentLoaded', () => {
    // Variables para elementos de la pantalla de bienvenida y el contenido principal
    const enterButton = document.getElementById('enter-button');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    // Mostrar el contenido principal al hacer clic en el botón "Entrar"
    enterButton.addEventListener('click', () => {
        welcomeScreen.style.display = 'none'; // Ocultar pantalla de bienvenida
        mainContent.style.display = 'block';  // Mostrar contenido principal
    });

    // Efecto de animación para cada sección al hacer scroll (con Intersection Observer)
    const secciones = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    secciones.forEach(seccion => observer.observe(seccion));

    // Botón "Volver arriba" que aparece al hacer scroll
    const botonArriba = document.querySelector('.boton-arriba');
    window.addEventListener('scroll', () => {
        botonArriba.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // Acción del botón "Volver arriba"
    botonArriba.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});