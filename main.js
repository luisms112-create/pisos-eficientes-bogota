// Inicializar librería de animaciones (AOS)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Desplazamiento suave al hacer clic en el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Ajuste para que el menú fijo no tape el título (-80px)
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Cambiar sombra del menú al bajar (Scroll)
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Animación de contadores (Estadísticas)
const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;
    
    // Verificar si la sección de estadísticas es visible
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16);
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
        hasAnimated = true;
    }
}
window.addEventListener('scroll', animateCounters);

// Validación y rastreo de clics en WhatsApp
document.querySelectorAll('a[href*="wa.me"]').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Cliente contactando por WhatsApp...');
        // Aquí se podría conectar con Google Analytics
    });
});

// Mensaje de bienvenida en consola
console.log('%c¡Bienvenido a Pisos Eficientes Bogotá! 🏠', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
