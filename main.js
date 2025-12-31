// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Gallery modal functionality
const galleryItems = document.querySelectorAll('.gallery-item');
let currentImageIndex = 0;
let galleryImages = [];

galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    galleryImages.push({
        src: img.src,
        alt: img.alt
    });
    
    item.addEventListener('click', () => {
        openGalleryModal(index);
    });
});

function openGalleryModal(index) {
    currentImageIndex = index;
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <button class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition z-10" onclick="closeGalleryModal()">
            <i class="fas fa-times"></i>
        </button>
        <button class="absolute left-4 text-white text-4xl hover:text-gray-300 transition z-10" onclick="previousImage()">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="absolute right-4 text-white text-4xl hover:text-gray-300 transition z-10" onclick="nextImage()">
            <i class="fas fa-chevron-right"></i>
        </button>
        <div class="max-w-6xl max-h-screen">
            <img id="modal-image" src="${galleryImages[index].src}" alt="${galleryImages[index].alt}" class="max-w-full max-h-screen rounded-lg shadow-2xl">
            <p class="text-white text-center mt-4 text-lg">${galleryImages[index].alt}</p>
        </div>
    `;
    modal.id = 'gallery-modal';
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleKeyboard);
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateModalImage();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage();
}

function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    if (modalImage) {
        modalImage.src = galleryImages[currentImageIndex].src;
        modalImage.alt = galleryImages[currentImageIndex].alt;
        modalImage.nextElementSibling.textContent = galleryImages[currentImageIndex].alt;
    }
}

function handleKeyboard(e) {
    if (e.key === 'Escape') {
        closeGalleryModal();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        previousImage();
    }
}

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.md\\:hidden button');
const navLinks = document.querySelector('nav .hidden.md\\:flex');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        // Create mobile menu if it doesn't exist
        let mobileMenu = document.getElementById('mobile-menu');
        
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.id = 'mobile-menu';
            mobileMenu.className = 'md:hidden bg-blue-900 shadow-lg';
            mobileMenu.innerHTML = `
                <div class="px-4 py-6 space-y-4">
                    <a href="#inicio" class="block text-white hover:text-yellow-300 transition py-2">Inicio</a>
                    <a href="#servicios" class="block text-white hover:text-yellow-300 transition py-2">Servicios</a>
                    <a href="#proceso" class="block text-white hover:text-yellow-300 transition py-2">Proceso</a>
                    <a href="#galeria" class="block text-white hover:text-yellow-300 transition py-2">Galería</a>
                    <a href="#testimonios" class="block text-white hover:text-yellow-300 transition py-2">Testimonios</a>
                    <a href="#contacto" class="block text-white hover:text-yellow-300 transition py-2">Contacto</a>
                </div>
            `;
            navbar.appendChild(mobileMenu);
        } else {
            mobileMenu.remove();
        }
    });
}

// WhatsApp button animation enhancement
const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    whatsappButton.addEventListener('mouseenter', () => {
        whatsappButton.style.animation = 'none';
        setTimeout(() => {
            whatsappButton.style.animation = 'pulse 2s infinite';
        }, 10);
    });
}

// Testimonial carousel functionality
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    if (testimonials.length > 0 && window.innerWidth < 768) {
        testimonials.forEach((testimonial, index) => {
            if (index === currentTestimonial) {
                testimonial.style.display = 'block';
            } else {
                testimonial.style.display = 'none';
            }
        });
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
}

// Auto-rotate testimonials on mobile every 5 seconds
setInterval(rotateTestimonials, 5000);

// Service cards hover effect enhancement
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#3b82f6';
        card.style.borderWidth = '2px';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'transparent';
        card.style.borderWidth = '0';
    });
});

// Form validation (if you add a contact form later)
function validateWhatsAppLink() {
    const phoneNumber = '573159157491';
    const message = encodeURIComponent('Hola, quisiera cotizar una instalación de pisos con Pisos Eficientes Bogotá');
    return `https://wa.me/${phoneNumber}?text=${message}`;
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'fixed bottom-24 right-8 bg-blue-900 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110 opacity-0 pointer-events-none z-40';
scrollToTopBtn.style.transition = 'opacity 0.3s, transform 0.3s';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.pointerEvents = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Price calculator functionality (optional enhancement)
function calculatePrice(area, includePetSafe = false, includePreparation = false) {
    const basePrice = 30000;
    let total = area * basePrice;
    
    if (includePreparation) {
        total += area * 15000;
    }
    
    if (includePetSafe) {
        total += 225000;
    }
    
    return {
        subtotal: area * basePrice,
        preparation: includePreparation ? area * 15000 : 0,
        petSafe: includePetSafe ? 225000 : 0,
        total: total
    };
}

// Add interactive price calculator if needed
function initPriceCalculator() {
    const calculatorSection = document.createElement('div');
    calculatorSection.className = 'fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-6 transform translate-y-full transition-transform duration-300 z-30';
    calculatorSection.id = 'price-calculator';
    calculatorSection.innerHTML = `
        <div class="container mx-auto max-w-2xl">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-2xl font-bold text-blue-900">Calculadora de Precio</h3>
                <button onclick="toggleCalculator()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Área (m²)</label>
                    <input type="number" id="calc-area" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Ej: 50" min="1">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Servicios adicionales</label>
                    <div class="space-y-2">
                        <label class="flex items-center">
                            <input type="checkbox" id="calc-preparation" class="mr-2">
                            <span class="text-sm">Preparación superficie</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" id="calc-petsafe" class="mr-2">
                            <span class="text-sm">Módulo Pet-Safe</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 mb-4">
                <div class="flex justify-between mb-2">
                    <span>Instalación base:</span>
                    <span id="calc-base">$0</span>
                </div>
                <div class="flex justify-between mb-2">
                    <span>Preparación:</span>
                    <span id="calc-prep-cost">$0</span>
                </div>
                <div class="flex justify-between mb-2">
                    <span>Pet-Safe:</span>
                    <span id="calc-pet-cost">$0</span>
                </div>
                <div class="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span id="calc-total" class="text-blue-900">$0</span>
                </div>
            </div>
            <button onclick="sendWhatsAppQuote()" class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition">
                <i class="fab fa-whatsapp mr-2"></i>
                Solicitar esta cotización
            </button>
        </div>
    `;
    document.body.appendChild(calculatorSection);
    
    // Add event listeners for real-time calculation
    const areaInput = document.getElementById('calc-area');
    const prepCheckbox = document.getElementById('calc-preparation');
    const petCheckbox = document.getElementById('calc-petsafe');
    
    function updateCalculation() {
        const area = parseFloat(areaInput.value) || 0;
        const includePrep = prepCheckbox.checked;
        const includePet = petCheckbox.checked;
        
        const result = calculatePrice(area, includePet, includePrep);
        
        document.getElementById('calc-base').textContent = `$${result.subtotal.toLocaleString('es-CO')}`;
        document.getElementById('calc-prep-cost').textContent = `$${result.preparation.toLocaleString('es-CO')}`;
        document.getElementById('calc-pet-cost').textContent = `$${result.petSafe.toLocaleString('es-CO')}`;
        document.getElementById('calc-total').textContent = `$${result.total.toLocaleString('es-CO')}`;
    }
    
    areaInput.addEventListener('input', updateCalculation);
    prepCheckbox.addEventListener('change', updateCalculation);
    petCheckbox.addEventListener('change', updateCalculation);
}

window.toggleCalculator = function() {
    const calculator = document.getElementById('price-calculator');
    if (calculator) {
        if (calculator.style.transform === 'translateY(0%)') {
            calculator.style.transform = 'translateY(100%)';
        } else {
            calculator.style.transform = 'translateY(0%)';
        }
    }
};

window.sendWhatsAppQuote = function() {
    const area = document.getElementById('calc-area').value;
    const includePrep = document.getElementById('calc-preparation').checked;
    const includePet = document.getElementById('calc-petsafe').checked;
    
    if (!area || area <= 0) {
        alert('Por favor ingresa un área válida');
        return;
    }
    
    const result = calculatePrice(parseFloat(area), includePet, includePrep);
    
    let message = `Hola, quisiera cotizar una instalación de pisos:\n\n`;
    message += `📏 Área: ${area} m²\n`;
    message += `💰 Instalación base: $${result.subtotal.toLocaleString('es-CO')}\n`;
    if (includePrep) message += `🔧 Preparación superficie: $${result.preparation.toLocaleString('es-CO')}\n`;
    if (includePet) message += `🐾 Módulo Pet-Safe: $${result.petSafe.toLocaleString('es-CO')}\n`;
    message += `\n💵 TOTAL ESTIMADO: $${result.total.toLocaleString('es-CO')}`;
    
    const whatsappURL = `https://wa.me/573159157491?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
};

// Initialize calculator on page load
// initPriceCalculator(); // Uncomment to enable calculator

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Console welcome message
console.log('%c¡Bienvenido a Pisos Eficientes Bogotá! 🏠', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%c¿Interesado en ver el código? ¡Contáctanos para colaboraciones!', 'color: #6b7280; font-size: 14px;');

// Analytics event tracking (ready for Google Analytics)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track button clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('WhatsApp', 'Click', 'Contact Button');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const section = e.target.getAttribute('href').replace('#', '');
        trackEvent('Navigation', 'Click', section);
    });
});

// Page load complete
window.addEventListener('load', () => {
    console.log('✅ Página cargada completamente');
    trackEvent('Page', 'Load', 'Complete');
});