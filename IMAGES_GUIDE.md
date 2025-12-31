# 📸 Guía de Imágenes - Pisos Eficientes Bogotá

Este documento detalla todas las imágenes utilizadas en el sitio web y cómo reemplazarlas con tus propias fotos.

---

## 🖼️ Imágenes Actuales (Placeholders)

El sitio actualmente usa imágenes de **Unsplash** como placeholders. Estas deben ser reemplazadas con fotos reales de tus proyectos.

---

## 📋 Lista de Imágenes por Sección

### 1. **Navegación / Header**
**Ubicación:** Navbar (parte superior)
**Imagen actual:** Icono Font Awesome (`<i class="fas fa-home">`)

**Recomendación:**
- **Archivo:** `images/logo.png`
- **Dimensiones:** 200x200px (mínimo)
- **Formato:** PNG con fondo transparente
- **Descripción:** Logo oficial de Pisos Eficientes Bogotá

**Código para reemplazar:**
```html
<!-- Buscar en index.html línea ~42 -->
<!-- ANTES: -->
<div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
    <i class="fas fa-home text-blue-900 text-2xl"></i>
</div>

<!-- DESPUÉS: -->
<div class="w-12 h-12 bg-white rounded-lg p-1">
    <img src="images/logo.png" alt="Logo Pisos Eficientes Bogotá" class="w-full h-full object-contain">
</div>
```

---

### 2. **Hero Section (Sección Principal)**
**Ubicación:** Primera sección grande al cargar la página
**Imagen actual:** `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop`

**Recomendación:**
- **Archivo:** `images/hero-instalacion-principal.jpg`
- **Dimensiones:** 600x600px (cuadrada) o 800x600px
- **Formato:** JPG optimizado (< 200KB)
- **Descripción:** Foto de una instalación en proceso o resultado final de alta calidad

**Código para reemplazar:**
```html
<!-- Buscar en index.html línea ~126 aproximadamente -->
<!-- ANTES: -->
<img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop" 
     alt="Instalación de pisos" class="rounded-2xl shadow-lg">

<!-- DESPUÉS: -->
<img src="images/hero-instalacion-principal.jpg" 
     alt="Instalación profesional de pisos en Bogotá" 
     class="rounded-2xl shadow-lg">
```

**Sugerencias de contenido:**
- ✅ Instalador trabajando profesionalmente
- ✅ Piso recién instalado con acabado perfecto
- ✅ Antes y después de una habitación
- ❌ NO usar fotos borrosas o de baja calidad
- ❌ NO incluir marcas de agua visibles

---

### 3. **Galería de Trabajos**
**Ubicación:** Sección "Nuestros Trabajos"
**Total de imágenes:** 6 fotos

#### Imagen 1 - Sala de Estar
**Actual:** `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=400&fit=crop`
- **Archivo sugerido:** `images/galeria/sala-estar-kennedy.jpg`
- **Dimensiones:** 500x400px
- **Descripción:** Sala de estar con piso laminado HDF instalado

#### Imagen 2 - Habitación Principal
**Actual:** `https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&h=400&fit=crop`
- **Archivo sugerido:** `images/galeria/habitacion-engativa.jpg`
- **Dimensiones:** 500x400px
- **Descripción:** Habitación con piso SPC

#### Imagen 3 - Cocina Moderna
**Actual:** `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop`
- **Archivo sugerido:** `images/galeria/cocina-suba.jpg`
- **Dimensiones:** 500x400px
- **Descripción:** Cocina con piso vinílico resistente al agua

#### Imagen 4 - Oficina Corporativa
**Actual:** `https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&h=400&fit=crop`
- **Archivo sugerido:** `images/galeria/oficina-teusaquillo.jpg`
- **Dimensiones:** 500x400px
- **Descripción:** Oficina con carpet tile

#### Imagen 5 - Comedor Familiar
**Actual:** `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop`
- **Archivo sugerido:** `images/galeria/comedor-usaquen.jpg`
- **Dimensiones:** 500x400px
- **Descripción:** Comedor con laminado HDF

#### Imagen 6 - Apartamento Completo
**Actual:** `https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=500&h=400&fit=crop`
- **Archivo sugerido:** `images/galeria/apartamento-soacha.jpg`
- **Dimensiones:** 500x400px
- **Descripción:** Vista general de apartamento con piso SPC

**Código para reemplazar (todas las imágenes de galería):**
```html
<!-- Buscar en index.html sección #galeria, línea ~494 aproximadamente -->
<!-- Reemplazar cada URL de Unsplash -->

<!-- Ejemplo Imagen 1: -->
<!-- ANTES: -->
<img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=400&fit=crop" 
     alt="Piso laminado instalado" class="w-full h-80 object-cover">

<!-- DESPUÉS: -->
<img src="images/galeria/sala-estar-kennedy.jpg" 
     alt="Sala de estar con piso laminado HDF en Kennedy" 
     class="w-full h-80 object-cover">
```

**Repetir para las 6 imágenes de la galería**

---

### 4. **Testimonios (Avatares de Clientes)**
**Ubicación:** Sección "Lo Que Dicen Nuestros Clientes"
**Total de imágenes:** 3 fotos de perfil

#### Avatar 1 - María González
**Actual:** `https://i.pravatar.cc/100?img=1`
- **Archivo sugerido:** `images/testimonios/maria-gonzalez.jpg`
- **Dimensiones:** 100x100px (circular)

#### Avatar 2 - Carolina Ramírez
**Actual:** `https://i.pravatar.cc/100?img=5`
- **Archivo sugerido:** `images/testimonios/carolina-ramirez.jpg`
- **Dimensiones:** 100x100px (circular)

#### Avatar 3 - Andrea López
**Actual:** `https://i.pravatar.cc/100?img=9`
- **Archivo sugerido:** `images/testimonios/andrea-lopez.jpg`
- **Dimensiones:** 100x100px (circular)

**Código para reemplazar:**
```html
<!-- Buscar en index.html sección #testimonios, línea ~573 aproximadamente -->
<!-- ANTES: -->
<img src="https://i.pravatar.cc/100?img=1" alt="Cliente" class="w-16 h-16 rounded-full mr-4">

<!-- DESPUÉS: -->
<img src="images/testimonios/maria-gonzalez.jpg" 
     alt="María González - Cliente satisfecha" 
     class="w-16 h-16 rounded-full mr-4">
```

**⚠️ IMPORTANTE:**
- Si no tienes fotos de clientes reales, puedes:
  - Usar iniciales en círculos de colores
  - Pedir permiso a clientes para usar sus fotos
  - Usar avatares genéricos (mantener pravatar.cc)

---

### 5. **Mascota "Beto" (Código Original)**
**Ubicación:** Código HTML original del usuario
**Imagen mencionada:** `MUÑEQUITO CASTOR_CANAL WHATSAPP.jpg`

**Recomendación:**
- **Archivo:** `images/beto-mascot.png`
- **Dimensiones:** 500x500px
- **Formato:** PNG con fondo transparente
- **Ubicación sugerida:** Agregar en la sección Hero o como icono flotante

**Código sugerido para agregar:**
```html
<!-- Opción 1: En el Hero Section junto al texto -->
<div class="text-center mb-8" data-aos="zoom-in">
    <img src="images/beto-mascot.png" alt="Beto, mascota de Pisos Eficientes" 
         class="w-64 mx-auto animate-bounce">
</div>

<!-- Opción 2: Como elemento decorativo flotante -->
<div class="fixed bottom-32 left-4 w-24 h-24 z-40 hidden lg:block">
    <img src="images/beto-mascot.png" alt="Beto" class="w-full animate-pulse">
</div>
```

---

## 📁 Estructura de Carpetas Recomendada

```
images/
├── logo.png                          # Logo principal
├── beto-mascot.png                   # Mascota del canal WhatsApp
├── hero-instalacion-principal.jpg    # Hero section
├── galeria/
│   ├── sala-estar-kennedy.jpg
│   ├── habitacion-engativa.jpg
│   ├── cocina-suba.jpg
│   ├── oficina-teusaquillo.jpg
│   ├── comedor-usaquen.jpg
│   └── apartamento-soacha.jpg
├── testimonios/
│   ├── maria-gonzalez.jpg
│   ├── carolina-ramirez.jpg
│   └── andrea-lopez.jpg
├── proceso/                          # Opcional: fotos del proceso
│   ├── evaluacion-tecnica.jpg
│   ├── preparacion-superficie.jpg
│   ├── instalacion-proceso.jpg
│   └── resultado-final.jpg
└── tipos-pisos/                      # Opcional: muestras de pisos
    ├── piso-spc-muestra.jpg
    ├── laminado-hdf-muestra.jpg
    ├── vinilico-muestra.jpg
    └── carpet-tile-muestra.jpg
```

---

## 🎨 Especificaciones Técnicas de Imágenes

### Formatos Recomendados
- **Fotos generales:** JPG (mejor compresión)
- **Logos e iconos:** PNG (transparencia)
- **Imágenes web modernas:** WebP (mejor calidad/tamaño)

### Tamaños Máximos Recomendados
- **Hero/destacadas:** < 300KB
- **Galería:** < 150KB por imagen
- **Avatares:** < 50KB
- **Logo:** < 30KB

### Herramientas de Optimización
1. **TinyPNG** (https://tinypng.com/) - Compresión sin pérdida
2. **Squoosh** (https://squoosh.app/) - Compresión avanzada
3. **ImageOptim** - App para Mac
4. **RIOT** - App para Windows

### Resolución Recomendada
- **Mínimo:** 72 DPI
- **Óptimo:** 150 DPI
- **Para impresión:** 300 DPI (no necesario para web)

---

## 🔄 Proceso de Reemplazo

### Paso 1: Preparar las Imágenes
1. Recolectar fotos de alta calidad de tus proyectos
2. Editar y recortar según dimensiones recomendadas
3. Optimizar para web (reducir tamaño sin perder calidad)
4. Nombrar archivos de forma descriptiva
5. Organizar en carpetas según estructura recomendada

### Paso 2: Subir las Imágenes
1. Crear la carpeta `images/` en la raíz del proyecto
2. Crear subcarpetas: `galeria/`, `testimonios/`, etc.
3. Subir todas las imágenes optimizadas

### Paso 3: Actualizar el Código
1. Abrir `index.html`
2. Buscar cada URL de Unsplash y Pravatar
3. Reemplazar con la ruta local correspondiente
4. Actualizar los atributos `alt` con descripciones precisas

### Paso 4: Verificar
1. Abrir el sitio en navegador
2. Verificar que todas las imágenes carguen correctamente
3. Probar en diferentes dispositivos (móvil, tablet, desktop)
4. Verificar tiempos de carga

---

## 📱 Imágenes Responsivas (Opcional Avanzado)

Para mejorar el rendimiento, puedes usar imágenes responsivas:

```html
<img 
    src="images/galeria/sala-estar-kennedy.jpg"
    srcset="images/galeria/sala-estar-kennedy-small.jpg 500w,
            images/galeria/sala-estar-kennedy-medium.jpg 800w,
            images/galeria/sala-estar-kennedy-large.jpg 1200w"
    sizes="(max-width: 600px) 500px,
           (max-width: 900px) 800px,
           1200px"
    alt="Sala de estar con piso laminado"
    loading="lazy"
    class="w-full h-80 object-cover">
```

**Ventajas:**
- ✅ Carga más rápida en móviles
- ✅ Ahorro de datos para usuarios
- ✅ Mejor experiencia de usuario

---

## ✅ Checklist de Imágenes

Usa esta lista para verificar que todas las imágenes estén listas:

### Imágenes Esenciales
- [ ] Logo principal (PNG transparente)
- [ ] Imagen Hero section (alta calidad)
- [ ] 6 imágenes de galería (proyectos reales)

### Imágenes Opcionales pero Recomendadas
- [ ] Mascota "Beto" (PNG transparente)
- [ ] 3 fotos de testimonios (o avatares genéricos)
- [ ] Favicon del sitio (16x16px, 32x32px)

### Imágenes Adicionales Futuras
- [ ] Fotos del proceso de trabajo
- [ ] Muestras de tipos de pisos
- [ ] Video promocional (para agregar más tarde)
- [ ] Certificaciones y documentos

---

## 🎯 Consejos para Fotos de Proyectos

### ✅ Buenas Prácticas
1. **Iluminación natural** - Tomar fotos con luz del día
2. **Ángulos amplios** - Mostrar todo el espacio renovado
3. **Limpieza** - Asegurar que el espacio esté ordenado
4. **Antes y después** - Capturar ambos estados si es posible
5. **Detalles** - Close-ups de acabados y uniones
6. **Contexto** - Incluir muebles para dar escala

### ❌ Evitar
1. Fotos borrosas o movidas
2. Iluminación artificial amarillenta
3. Desorden visible en el fondo
4. Marcas de agua muy evidentes
5. Ángulos distorsionados

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas para obtener o editar las imágenes:

1. **Fotógrafo profesional** - Considera contratar un servicio de fotografía de interiores
2. **Edición básica** - Usa apps como Canva, Snapseed o VSCO
3. **Banco de imágenes** - Si necesitas placeholders temporales:
   - Unsplash.com (gratis)
   - Pexels.com (gratis)
   - Pixabay.com (gratis)

---

## 🔜 Próximos Pasos

Una vez reemplazadas las imágenes:

1. **Optimización SEO**: Agregar atributos `alt` descriptivos
2. **Lazy Loading**: Ya implementado en el código
3. **CDN**: Considerar usar Cloudinary o ImageKit para hosting
4. **Backup**: Guardar copias de seguridad de todas las imágenes

---

**Última actualización:** Diciembre 2024

**¿Preguntas?** Contacta al equipo de desarrollo o consulta la documentación del proyecto.