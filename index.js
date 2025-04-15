document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Seleccionamos todos los enlaces
  const sections = document.querySelectorAll("section"); // Seleccionamos todas las secciones
  const inicioSection = document.getElementById("inicio"); // Sección de inicio
  const serviciosSection = document.getElementById("servicios"); // Sección de servicios
  const caracteristicasSection = document.getElementById("caracteristicas"); // Sección de características

  // Ocultar la sección de Servicios al principio
  serviciosSection.style.display = "none"; // Ocultar la sección de Servicios inicialmente

  // Mostrar tanto la sección de Inicio como la de Características al cargar
  caracteristicasSection.style.display = "block"; // Asegurarnos de que Características esté visible
  inicioSection.style.display = "block"; // Aseguramos que Inicio también esté visible

  // Función para cambiar la clase 'active' en los enlaces
  function setActiveLink(target) {
    // Eliminamos la clase 'active' de todos los enlaces
    navLinks.forEach(link => link.classList.remove('active'));
    // Agregamos la clase 'active' al enlace clickeado
    target.classList.add('active');
  }

  // Añadimos eventos de clic a los enlaces
  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevenimos el comportamiento por defecto de desplazamiento

      // Determinamos qué enlace fue clickeado
      const targetId = link.getAttribute("href").substring(1); // Obtenemos el ID de la sección objetivo
      const targetElement = document.getElementById(targetId); // Encontramos el elemento por ID

      // Ocultamos todas las secciones y mostramos la sección correspondiente
      sections.forEach(section => section.style.display = "none");
      targetElement.style.display = "block"; // Mostramos la sección correspondiente

      // Si el enlace es "Inicio", mostramos también la sección de "Características"
      if (targetId === "inicio") {
        caracteristicasSection.style.display = "block"; // Aseguramos que Características esté visible
      }

      // Cambiamos la clase 'active' después de hacer el cambio de sección
      setActiveLink(link);
    });
  });

});

function verMas(id) {
  // Ocultar la sección de servicios
  document.getElementById("servicios").style.display = "none";
  // Mostrar la sección detallada
  document.getElementById("detalle-servicio").style.display = "block";

  // Datos de los servicios
  const serviciosData = {
    1: {
      titulo: "Desarrollo de Software a la medida",
      descripcion: `Nuestro servicio de Desarrollo de Software a la Medida está diseñado para proporcionar soluciones tecnológicas personalizadas que se adaptan perfectamente a las necesidades y objetivos específicos de su negocio, garantizando que cada proyecto sea único, eficiente y alineado con los requerimientos operacionales de su empresa.

      Trabajamos de la mano con nuestros clientes para entender sus procesos, identificar áreas de mejora y desarrollar soluciones tecnológicas que optimicen la productividad, aumenten la competitividad y proporcionen una experiencia de usuario intuitiva. Nuestra metodología ágil permite una implementación rápida y flexible, adaptándose a los cambios y desafíos del entorno empresarial.`,
      imagenBanner: "resources/software_dev_img.webp",
      imagenServicio: "resources/services_img/software_medida_img.webp",
      lista: [
        `Personalización total:
        Se construye desde cero o se adapta totalmente a lo que el cliente necesita.`,
        `Integración con sistemas existentes:
        Puede conectarse con bases de datos, ERP, CRM, entre otros. `,
        `Escalabilidad:
         Está preparado para crecer o adaptarse conforme evoluciona el negocio. `,
        `Soporte y mantenimiento personalizado:
         Se ofrece asistencia especializada según la solución creada. `
      ],
      planes: [
        { nombre: "Plan Básico", descripcion: "Desarrollo de software básico con características estándar." },
        { nombre: "Plan Avanzado", descripcion: "Desarrollo completo con integración de características personalizadas." },
        { nombre: "Plan Premium", descripcion: "Desarrollo de software con soporte completo y mantenimiento." }
      ]
    },
    2: {
      titulo: "Desarrollo Web",
      descripcion: `Nuestro servicio de Desarrollo Web se enfoca en la creación de soluciones digitales personalizadas que permiten a las empresas establecer una presencia en línea efectiva y alineada con sus objetivos estratégicos. Nos especializamos en diseñar y desarrollar sitios web y aplicaciones web innovadoras, adaptadas a las necesidades específicas de cada cliente, con el fin de proporcionar una plataforma robusta, segura y fácil de usar, que se adapte a cualquier tipo de dispositivo.

      Trabajamos de la mano con nuestros clientes para entender sus requerimientos y transformar sus ideas en soluciones web funcionales, optimizando la experiencia del usuario, mejorando la accesibilidad y asegurando la integración fluida con otros sistemas. Nuestro enfoque ágil y flexible permite una implementación rápida, que se adapta continuamente a las necesidades cambiantes del mercado y del entorno tecnológico, garantizando que cada proyecto web sea competitivo, escalable y capaz de evolucionar conforme a los avances del sector.`,
      imagenBanner: "resources/web_dev_img.webp",
      imagenServicio: "resources/services_img/web_img.WEBP",
      lista: [
        `Presencia online efectiva:
        Diseños que representan tu marca y transmiten confianza.`,
        `Responsive Design:
        Adaptabilidad total a móviles, tabletas y pantallas grandes.`,
        `Optimización de velocidad:
        Sitios rápidos y eficientes para mejorar la experiencia del usuario.`,
        `Integración de herramientas:
        Formularios, chat, redes sociales, y más conectados a tu sistema.`,
        `SEO técnico:
        Código limpio y estructurado para mejorar tu posicionamiento en buscadores.`
      ],
      planes: [] // No tiene planes, por lo que esta sección se ocultará
    },
    3: {
      titulo: "Diseño UX/UI",
      descripcion: `Nuestro servicio de Diseño UX/UI se enfoca en crear experiencias digitales centradas en el usuario, mediante soluciones visuales intuitivas y atractivas que optimizan la interacción con las plataformas digitales. Nos dedicamos a entender profundamente las necesidades y comportamientos de los usuarios para diseñar interfaces que sean tanto funcionales como visualmente agradables.

      En caso de ser necesario, nos especializamos en realizar propuestas visuales detalladas, dejando la implementación y desarrollo de las soluciones a su equipo técnico. Nuestro trabajo consiste en entregar un diseño completo con prototipos interactivos, especificaciones claras y recomendaciones que guíen a los desarrolladores en la creación de una experiencia coherente y efectiva. Con un enfoque ágil y flexible, nos aseguramos de que la propuesta visual se alinee perfectamente con los objetivos del negocio y las expectativas del usuario, proporcionando un diseño que se pueda ejecutar fácilmente en la fase de desarrollo.`,
      imagenBanner: "resources/diseño_ux_img.webp",
      imagenServicio: "resources/services_img/ux-ui_img.webp",
      lista: [
        `Diseño centrado en el usuario:
        Creamos experiencias digitales intuitivas y funcionales.`,
        `Interfaces atractivas:
        Estética moderna y coherente con la identidad de tu marca.`,
        `Investigación y validación:
        Basamos el diseño en datos reales y pruebas con usuarios.`,
        `Prototipado interactivo:
        Visualiza la navegación antes de desarrollarla.`,
        `Documentación clara:
        Permite un desarrollo preciso por parte del equipo de desarrollo.`
      ],
      planes: [
        { nombre: "Plan UX", descripcion: "Investigación y diseño de UX." },
        { nombre: "Plan UI", descripcion: "Diseño de interfaces visualmente atractivas." }
      ]
    },
    4: {
      titulo: "Asesoría Integral en Marketing y Redes Sociales",
      descripcion: `Nuestro servicio de Asesoría Integral en Marketing y Redes Sociales está diseñado para ayudar a las empresas a maximizar su presencia en línea y optimizar sus estrategias digitales. Ofrecemos una combinación de asesoría experta y gestión completa de redes sociales, adaptándonos a las necesidades específicas de cada cliente.

      Además de brindar orientación estratégica sobre marketing digital, proporcionamos un enfoque práctico al tomar la responsabilidad de gestionar y actualizar sus redes sociales de manera profesional. Nos encargamos de la creación de contenido, la planificación de publicaciones, la interacción con la comunidad y el análisis de resultados, todo con el objetivo de mejorar su visibilidad, generar mayor engagement y alcanzar los objetivos comerciales. Nuestro enfoque flexible y personalizado garantiza que cada acción se alinee con los valores de su marca y las expectativas de su audiencia, asegurando una presencia efectiva y coherente en las plataformas digitales.`,
      imagenBanner: "resources/asesoria_img.webp",
      imagenServicio: "resources/services_img/manejo_redes_sociales.webp",
      lista: [
        `Estrategia digital personalizada:
        Planificamos acciones alineadas con tus objetivos de negocio.`,
        `Gestión de redes sociales:
        Publicaciones, contenido y respuesta a tu audiencia.`,
        `Optimización de marca:
        Mejoramos tu presencia visual y coherencia en medios digitales.`,
        `Asesoría estratégica:
        Guíamos la toma de decisiones para potenciar tu presencia digital.`,
        `Contenido enfocado:
        Diseñamos mensajes que conectan con tu público ideal.`
      ],
      planes: [
        {
          nombre: "Paquete Básico",
          descripcion: "Desarrollo de software básico con características estándar.",
          imagen: "resources/plan_basic_img.webp",
          beneficios: [
            "Diseño, creación y optimización de perfil en 2 redes sociales (Facebook e Instagram)",
            "Estrategia de contenido básica (tono de comunicación y línea gráfica inicial)",
            "3 publicaciones semanales (estáticas o carruseles)",
            "3 historias semanales",
            "1 reel mensual",
            "Reporte básico mensual (alcance e interacción)"
          ]
        },
        {
          nombre: "Paquete Crecimiento",
          descripcion: "Desarrollo completo con integración personalizada.",
          imagen: "resources/plan_crecimiento_img.webp",
          beneficios: [
            "Diseño, creación y optimización de perfil en 3 redes sociales (Facebook, Instagram y una a elegir)",
            "Estrategia de contenido avanzada (segmentación de audiencia y calendario de publicaciones)",
            "4 publicaciones semanales (con diseño profesional)",
            "5 historias semanales",
            "2 reels mensuales",
            "Reporte detallado mensual (alcance, interacciones y sugerencias de mejora)"
          ]
        },
        {
          nombre: "Plan Premium",
          descripcion: "Software robusto, escalable y con soporte completo.",
          imagen: "resources/plan_premium_img.webp",
          beneficios: [
            "Diseño, creación y optimización de perfil en 3 redes sociales (Facebook, Instagram y una a elegir)",
            "Estrategia de contenido avanzada (segmentación de audiencia y calendario de publicaciones)",
            "5 publicaciones semanales (con diseño profesional)",
            "7 historias semanales",
            "4 reels mensuales",
            "Reporte detallado mensual (alcance, interacciones y sugerencias de mejora)",
            "1 sesión fotográfica mensual (hasta 15 imágenes editadas y 1 video corto promocional)"
          ]
        }
      ]
    },
    5: {
      titulo: "Identidad Coorporativa",
      descripcion: `Nuestro servicio de Identidad Corporativa está diseñado para ayudar tanto a empresas establecidas como a pequeñas empresas y cualquier persona en general a crear una imagen sólida y coherente que refleje sus valores, misión y visión. Nos especializamos en el desarrollo de una identidad visual única que permita a su marca destacarse en el mercado, sin importar su tamaño o fase de emprendimiento.

      Trabajamos estrechamente con nuestros clientes para entender sus necesidades, cultura y objetivos específicos, creando una identidad corporativa personalizada que se adapte a su esencia. Desde el diseño de logotipos y la selección de paletas de colores hasta la definición de tipografía y elementos gráficos, nos aseguramos de que cada componente visual sea consistente y apropiado para el público al que se dirigen. Además, proporcionamos manuales de marca para garantizar la correcta aplicación de estos elementos en todos los canales de comunicación. Nuestro enfoque flexible y adaptado a cada cliente busca establecer una imagen fuerte y memorable que impulse su crecimiento y conexión con la audiencia, independientemente de su tamaño o sector.`,
      imagenBanner: "resources/identidad_coorp_img.webp",
      imagenServicio: "resources/services_img/identida_img.webp",
      lista: [
        `Análisis de marca:
        Identificamos los valores y esencia que deben reflejarse visualmente.`,
        `Diseño de logotipo:
        Creamos un símbolo único y representativo para tu marca.`,
        `Definición visual:
        Selección de colores, tipografías y estilos coherentes.`,
        `Adaptación a diferentes medios:
        Aseguramos que tu imagen sea sólida en cualquier plataforma.`
      ],
      planes: [
        { nombre: "Plan UX", descripcion: "Investigación y diseño de UX." },
        { nombre: "Plan UI", descripcion: "Diseño de interfaces visualmente atractivas." }
      ]
    },
    6: {
      titulo: "Producción de contenido gráfico",
      descripcion: `Nuestro servicio de Producción de Contenido Gráfico está diseñado para ofrecer soluciones creativas y personalizadas que ayuden a las personas y empresas o negocios a comunicar de manera efectiva su mensaje visual. Nos especializamos en la creación de una amplia gama de materiales gráficos, tales como invitaciones, tarjetas de presentación, anuncios, lonas, playeras, banners, y otros productos promocionales, todos diseñados para reflejar la identidad de su marca y captar la atención de su audiencia.

      Trabajamos de cerca con nuestros clientes para entender sus necesidades y objetivos, asegurándonos de que cada pieza gráfica sea visualmente atractiva y esté alineada con la imagen corporativa de la marca. Desde el concepto inicial hasta el diseño final, nos encargamos de todo el proceso creativo, garantizando que cada material sea único, profesional y de alta calidad. Ya sea para eventos, campañas publicitarias o merchandising, nuestra producción de contenido gráfico proporciona soluciones efectivas para mejorar la visibilidad y el impacto de su marca en cualquier formato o plataforma.`,
      imagenBanner: "resources/contenido_graf_img.webp",
      imagenServicio: "resources/services_img/material_diseño.webp",
      lista: [
        `Material promocional: 
        Flyers, posters, lonas, banners y otros elementos para difusión.`,
        `Invitaciones y tarjetas:
        Diseños especiales para eventos sociales o corporativos.`,
        `Sublimados y productos físicos:
        Gráficos listos para impresión en tazas, playeras, stickers, etc.`,
        `Entrega en formatos adecuados:
        Archivos listos para impresión profesional o uso digital.`
      ],
      planes: [
        { nombre: "Plan UX", descripcion: "Investigación y diseño de UX." },
        { nombre: "Plan UI", descripcion: "Diseño de interfaces visualmente atractivas." }
      ]
    }
  };

  // Obtener los datos del servicio
  const servicio = serviciosData[id];

  // Llenar la sección de detalles
  document.getElementById("titulo-servicio").innerText = servicio.titulo;
  document.getElementById("descripcion-servicio").innerText = servicio.descripcion;
  document.getElementById("imagen-servicio").src = servicio.imagenServicio;

  // Llenar la URL del banner dinámicamente
  const banner = document.getElementById("banner");
  banner.style.backgroundImage = `url('${servicio.imagenBanner}')`;

  // Llenar la lista de características
  const listaElement = document.getElementById("lista-servicios");
  listaElement.innerHTML = ''; // Limpiar la lista antes de agregar
  listaElement.classList.add("lista-iconos"); // 👈 AÑADIR ESTA CLASE

  servicio.lista.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    listaElement.appendChild(li);
  });

  // Verificar si hay planes y mostrarlos, si aplica
  const planListElement = document.getElementById("plan-list");
  const planesSection = document.getElementById("planes");

  // Si hay planes, los mostramos, si no, ocultamos la sección
  if (servicio.planes.length > 0) {
    planesSection.style.display = "block"; // Mostrar la sección de planes
    planListElement.innerHTML = ''; // Limpiar los planes antes de agregar
    servicio.planes.forEach(plan => {
      const col = document.createElement("div");
      col.classList.add("col-md-4", "d-flex", "justify-content-center");
    
      const beneficios = plan.beneficios.map(item => `<li>${item}</li>`).join("");
    
      col.innerHTML = `
        <div class="card text-center p-3" style="width: 100%; max-width: 320px;">
          <img src="${plan.imagen}" class="plan-img" alt="Imagen del ${plan.nombre}" style="height: 180px;">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${plan.nombre}</h5>
            <p class="card-text">${plan.descripcion}</p>
            <ul class="text-start mx-auto px-3 small">${beneficios}</ul>
          </div>
        </div>
      `;
      planListElement.appendChild(col);
    });
  } else {
    planesSection.style.display = "none"; // Ocultar la sección de planes si no aplica
  }

  // Actualizar las migas de pan
  document.getElementById("miga-titulo").innerText = servicio.titulo;
}

function regresar() {
  // Regresar a la vista de servicios
  document.getElementById("detalle-servicio").style.display = "none";
  document.getElementById("servicios").style.display = "block";
}
