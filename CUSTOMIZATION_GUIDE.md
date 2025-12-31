# 🎨 Guía de Personalización - Pisos Eficientes Bogotá

Esta guía te ayudará a personalizar y adaptar el sitio web a tus necesidades específicas.

---

## 📋 Tabla de Contenidos

1. [Cambiar Información de Contacto](#cambiar-información-de-contacto)
2. [Personalizar Colores](#personalizar-colores)
3. [Modificar Textos y Contenido](#modificar-textos-y-contenido)
4. [Agregar/Eliminar Secciones](#agregareliminar-secciones)
5. [Activar Funcionalidades Opcionales](#activar-funcionalidades-opcionales)
6. [Integrar Redes Sociales](#integrar-redes-sociales)
7. [Configurar Analytics](#configurar-analytics)
8. [Personalizar Precios](#personalizar-precios)

---

## 1. 📞 Cambiar Información de Contacto

### WhatsApp

**Buscar y reemplazar:** `573159157491`

**Ubicaciones en `index.html`:**
- Línea ~117: Botón Hero "WhatsApp"
- Línea ~759: Botón de contacto final
- Línea ~809: Botón flotante de WhatsApp

**Ubicación en `js/main.js`:**
- Línea ~202: Función `validateWhatsAppLink()`
- Línea ~372: Función `sendWhatsAppQuote()`

**Ejemplo de cambio:**
```html
<!-- ANTES: -->
<a href="https://wa.me/573159157491?text=...">

<!-- DESPUÉS: -->
<a href="https://wa.me/57TU_NUMERO_AQUI?text=...">
```

### Email

**Buscar y reemplazar:** `info@pisoseficientes.co`

**Ubicaciones:**
- Línea ~771: Sección de contacto
- Footer: Información de contacto

**Ejemplo:**
```html
<!-- ANTES: -->
<div class="text-blue-200">info@pisoseficientes.co</div>

<!-- DESPUÉS: -->
<div class="text-blue-200">tu_email@tudominio.com</div>
```

### Horarios de Atención

**Ubicación:** Línea ~781 en `index.html`

```html
<!-- ANTES: -->
<div class="text-blue-200">Lun - Sáb: 8am - 6pm</div>

<!-- DESPUÉS: -->
<div class="text-blue-200">Lun - Vie: 9am - 5pm</div>
```

---

## 2. 🎨 Personalizar Colores

### Variables CSS Principales

**Ubicación:** `index.html` dentro de `<style>` (línea ~21)

```css
:root {
    --azul-oscuro: #2c3e50;           /* Azul oscuro general */
    --verde-whatsapp: #25d366;        /* Verde botones WhatsApp */
    --dorado: #d4af37;                /* Dorado detalles */
    --azul-gradient-start: #1e3a8a;   /* Inicio gradiente */
    --azul-gradient-end: #3b82f6;     /* Fin gradiente */
}
```

### Paletas de Colores Sugeridas

#### Paleta 1: Azul Profesional (Actual)
```css
--color-primario: #1e3a8a;
--color-secundario: #3b82f6;
--color-acento: #d4af37;
```

#### Paleta 2: Verde Natural
```css
--azul-gradient-start: #065f46;  /* Verde bosque */
--azul-gradient-end: #10b981;    /* Verde esmeralda */
--dorado: #fbbf24;               /* Amarillo dorado */
```

#### Paleta 3: Gris Corporativo
```css
--azul-gradient-start: #374151;  /* Gris oscuro */
--azul-gradient-end: #6b7280;    /* Gris medio */
--dorado: #f59e0b;               /* Naranja */
```

#### Paleta 4: Morado Moderno
```css
--azul-gradient-start: #7c3aed;  /* Morado */
--azul-gradient-end: #a78bfa;    /* Morado claro */
--dorado: #fbbf24;               /* Amarillo */
```

### Cambiar Color del Botón WhatsApp

**Ubicación:** Línea ~49 en `<style>`

```css
/* Color actual verde WhatsApp */
.whatsapp-float {
    background-color: #25d366;  /* Verde WhatsApp oficial */
}

/* Opciones alternativas: */
background-color: #128c7e;  /* Verde oscuro WhatsApp */
background-color: #34b7f1;  /* Azul Telegram */
background-color: #0088cc;  /* Azul corporativo */
```

---

## 3. ✏️ Modificar Textos y Contenido

### Título Principal (H1)

**Ubicación:** Línea ~103 en `index.html`

```html
<!-- Título actual -->
<h2 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
    Transformamos Tu Hogar en 
    <span class="text-yellow-300">1-2 Días</span>
</h2>

<!-- Ejemplos alternativos: -->
<h2>Pisos de Alta Calidad <span>en Tiempo Récord</span></h2>
<h2>Renovación Express <span>Sin Complicaciones</span></h2>
<h2>Tu Nuevo Piso <span>Instalado Hoy</span></h2>
```

### Tagline/Eslogan

**Ubicación:** Línea ~53 (navbar) y línea ~111

```html
<!-- Actual: -->
<p class="text-xs text-blue-200">Renovamos tu hogar sin alterar tu rutina</p>

<!-- Alternativas: -->
<p>Instalación profesional, resultados inmediatos</p>
<p>Calidad garantizada, servicio express</p>
<p>Tu piso perfecto en tiempo récord</p>
```

### Descripción de Servicios

**Ubicación:** Línea ~111-115

```html
<p class="text-xl mb-8 text-blue-100">
    <!-- Modifica aquí la descripción principal -->
    Instalación profesional de pisos SPC, laminados HDF y vinílicos 
    con garantía de 1 año. Sin desorden, sin estrés, 100% digital.
</p>
```

---

## 4. ➕ Agregar/Eliminar Secciones

### Eliminar una Sección

**Ejemplo: Eliminar sección de testimonios**

1. Buscar `<section id="testimonios">`
2. Seleccionar todo hasta `</section>`
3. Eliminar o comentar:

```html
<!-- Sección de testimonios desactivada temporalmente
<section id="testimonios" class="py-20 bg-white">
    ...contenido...
</section>
-->
```

### Agregar Nueva Sección

**Ejemplo: Agregar sección de Preguntas Frecuentes**

**Ubicación:** Después de la sección de testimonios (línea ~630)

```html
<!-- Sección FAQ -->
<section id="faq" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Preguntas Frecuentes
            </h2>
            <p class="text-gray-600 text-lg">Resolvemos tus dudas</p>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-4">
            <!-- Pregunta 1 -->
            <div class="bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                <h3 class="text-xl font-bold text-blue-900 mb-2">
                    ¿Cuánto tiempo toma la instalación?
                </h3>
                <p class="text-gray-600">
                    La mayoría de proyectos se completan en 1-2 días laborales, 
                    dependiendo del tamaño del área y la preparación necesaria.
                </p>
            </div>
            
            <!-- Pregunta 2 -->
            <div class="bg-white rounded-xl p-6 shadow-md" data-aos="fade-up">
                <h3 class="text-xl font-bold text-blue-900 mb-2">
                    ¿Incluyen el material del piso?
                </h3>
                <p class="text-gray-600">
                    Nuestro servicio es de instalación y mano de obra. 
                    El material se cotiza por separado según tu preferencia.
                </p>
            </div>
            
            <!-- Agregar más preguntas según necesites -->
        </div>
    </div>
</section>
```

---

## 5. 🔧 Activar Funcionalidades Opcionales

### Calculadora de Precios

**Ubicación:** `js/main.js` línea ~395

```javascript
// DESACTIVADA (por defecto):
// initPriceCalculator();

// ACTIVADA:
initPriceCalculator();
```

**Personalizar precios de la calculadora:**

Línea ~333 en `js/main.js`:
```javascript
function calculatePrice(area, includePetSafe = false, includePreparation = false) {
    const basePrice = 30000;  // ← Cambiar precio base aquí
    let total = area * basePrice;
    
    if (includePreparation) {
        total += area * 15000;  // ← Precio preparación
    }
    
    if (includePetSafe) {
        total += 225000;  // ← Precio Pet-Safe
    }
    
    return { ... };
}
```

### Botón "Scroll to Top"

**Ya activado por defecto** (línea ~262 en `js/main.js`)

Para desactivar, comentar:
```javascript
// const scrollToTopBtn = document.createElement('button');
// ... (todo el código del botón)
```

Para personalizar apariencia:
```javascript
scrollToTopBtn.className = 'fixed bottom-24 right-8 bg-blue-900...';
// Cambiar colores, posición, etc.
```

---

## 6. 📱 Integrar Redes Sociales

### Enlaces de Redes Sociales

**Ubicación:** Footer, línea ~825

```html
<!-- Actual (placeholders): -->
<a href="#" class="hover:text-yellow-300 transition">
    <i class="fab fa-facebook"></i>
</a>

<!-- Actualizar con tus URLs reales: -->
<a href="https://facebook.com/TuPaginaAqui" target="_blank" 
   class="hover:text-yellow-300 transition" 
   aria-label="Síguenos en Facebook">
    <i class="fab fa-facebook"></i>
</a>

<a href="https://instagram.com/TuCuentaAqui" target="_blank" 
   class="hover:text-yellow-300 transition"
   aria-label="Síguenos en Instagram">
    <i class="fab fa-instagram"></i>
</a>

<a href="https://wa.me/573159157491" target="_blank"
   class="hover:text-yellow-300 transition"
   aria-label="Contáctanos por WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>
```

### Agregar Más Redes Sociales

```html
<!-- TikTok -->
<a href="https://tiktok.com/@TuCuenta" target="_blank">
    <i class="fab fa-tiktok"></i>
</a>

<!-- YouTube -->
<a href="https://youtube.com/c/TuCanal" target="_blank">
    <i class="fab fa-youtube"></i>
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/company/TuEmpresa" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
```

---

## 7. 📊 Configurar Analytics

### Google Analytics 4 (GA4)

**Ubicación:** `index.html` antes del cierre de `</head>`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // ← Reemplazar con tu ID
</script>
```

**Pasos:**
1. Crear cuenta en Google Analytics (analytics.google.com)
2. Crear una propiedad GA4
3. Obtener tu ID (formato: G-XXXXXXXXXX)
4. Reemplazar en el código anterior

### Facebook Pixel

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID_AQUI');
fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=TU_PIXEL_ID_AQUI&ev=PageView&noscript=1"/>
</noscript>
```

### Google Tag Manager (GTM)

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) - Después del <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

---

## 8. 💰 Personalizar Precios

### Actualizar Precios en las Tarjetas de Servicio

**Ubicación:** Línea ~307-366 en `index.html`

```html
<!-- Instalación Base -->
<div class="price-badge text-lg">
    $30.000/m²  <!-- ← Cambiar aquí -->
</div>

<!-- Preparación Superficie -->
<div class="price-badge text-lg">
    $15.000/m²  <!-- ← Cambiar aquí -->
</div>

<!-- Módulo Pet-Safe -->
<div class="price-badge text-lg">
    $225.000  <!-- ← Cambiar aquí -->
</div>
```

### Actualizar Precio en Hero Section

**Ubicación:** Línea ~131

```html
<div class="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-6 rounded-2xl shadow-xl">
    <div class="text-4xl font-bold">$30.000</div>  <!-- ← Cambiar aquí -->
    <div class="text-sm font-semibold">Por m² instalado</div>
</div>
```

### Formato de Números

Para números grandes con separadores:
```html
<!-- Formato correcto colombiano: -->
$30.000 (punto como separador de miles)

<!-- Otros países: -->
$30,000 (coma como separador)
```

---

## 🎯 Personalización Avanzada

### Cambiar Fuente Tipográfica

**Ubicación:** `index.html` línea ~16

```html
<!-- Fuente actual: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Alternativas populares: -->

<!-- Montserrat (moderna y limpia) -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Roboto (versátil) -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">

<!-- Inter (profesional) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Y actualizar en CSS (línea ~23):
```css
* {
    font-family: 'Montserrat', sans-serif;  /* Cambiar nombre de fuente */
}
```

### Agregar Chat en Vivo

**Tawk.to (Gratis):**
```html
<!-- Agregar antes del </body> -->
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/TU_ID_AQUI/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
```

### Modo Oscuro (Dark Mode)

Agregar toggle en navbar:
```html
<button id="theme-toggle" class="text-white hover:text-yellow-300">
    <i class="fas fa-moon"></i>
</button>
```

JavaScript para modo oscuro:
```javascript
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});
```

---

## 📝 Lista de Verificación de Personalización

### Información Esencial
- [ ] Número de WhatsApp actualizado
- [ ] Email corporativo configurado
- [ ] Horarios de atención correctos
- [ ] Redes sociales enlazadas

### Contenido
- [ ] Títulos y textos adaptados
- [ ] Precios actualizados
- [ ] Servicios listados correctamente
- [ ] Zonas de cobertura verificadas

### Visual
- [ ] Colores de marca aplicados
- [ ] Logo principal agregado
- [ ] Imágenes de proyectos reales
- [ ] Favicon personalizado

### Funcionalidad
- [ ] Calculadora activada (opcional)
- [ ] Analytics configurado
- [ ] Enlaces probados
- [ ] Formularios funcionando

### SEO
- [ ] Meta tags actualizados
- [ ] Atributos alt en imágenes
- [ ] Sitemap generado
- [ ] Robots.txt configurado

---

## 🆘 Ayuda y Soporte

### Problemas Comunes

**1. Los colores no cambian:**
- Verificar que las variables CSS estén dentro de `:root`
- Limpiar caché del navegador (Ctrl+Shift+R)

**2. Las imágenes no cargan:**
- Verificar rutas relativas correctas
- Comprobar nombres de archivo (sensibles a mayúsculas)

**3. JavaScript no funciona:**
- Revisar consola del navegador (F12)
- Verificar que main.js esté vinculado correctamente

**4. No recibo mensajes de WhatsApp:**
- Verificar formato del número (código país + número)
- Asegurar que el número esté activo en WhatsApp

---

**¡Listo!** Con esta guía puedes personalizar completamente tu sitio web. 

**¿Necesitas más ayuda?** Consulta el README.md o la documentación técnica.