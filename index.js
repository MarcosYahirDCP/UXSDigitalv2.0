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
      imagenServicio: "resources/software_dev_img.webp",
      lista: [
        "Desarrollo de aplicaciones web",
        "Optimización de procesos",
        "Soluciones móviles",
        "Consultoría personalizada"
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
      imagenServicio: "resources/web_dev_img.webp",
      lista: [
        "Desarrollo de sitios responsivos",
        "Optimización para SEO",
        "Diseño de interfaces amigables",
        "Mantenimiento web"
      ],
      planes: [] // No tiene planes, por lo que esta sección se ocultará
    },
    3: {
      titulo: "Diseño UX/UI",
      descripcion: `Nuestro servicio de Diseño UX/UI se enfoca en crear experiencias digitales centradas en el usuario, mediante soluciones visuales intuitivas y atractivas que optimizan la interacción con las plataformas digitales. Nos dedicamos a entender profundamente las necesidades y comportamientos de los usuarios para diseñar interfaces que sean tanto funcionales como visualmente agradables.

      En caso de ser necesario, nos especializamos en realizar propuestas visuales detalladas, dejando la implementación y desarrollo de las soluciones a su equipo técnico. Nuestro trabajo consiste en entregar un diseño completo con prototipos interactivos, especificaciones claras y recomendaciones que guíen a los desarrolladores en la creación de una experiencia coherente y efectiva. Con un enfoque ágil y flexible, nos aseguramos de que la propuesta visual se alinee perfectamente con los objetivos del negocio y las expectativas del usuario, proporcionando un diseño que se pueda ejecutar fácilmente en la fase de desarrollo.`,
      imagenBanner: "resources/diseño_ux_img.webp",
      imagenServicio: "resources/diseño_ux_img.webp",
      lista: [
        "Diseño de interfaces web y móviles",
        "Investigación de usuarios",
        "Prototipos interactivos",
        "Pruebas de usabilidad"
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
      imagenBanner: "resources/diseño_ux_img.webp",
      imagenServicio: "resources/diseño_ux_img.webp",
      lista: [
        "Diseño de interfaces web y móviles",
        "Investigación de usuarios",
        "Prototipos interactivos",
        "Pruebas de usabilidad"
      ],
      planes: [
        { nombre: "Plan UX", descripcion: "Investigación y diseño de UX." },
        { nombre: "Plan UI", descripcion: "Diseño de interfaces visualmente atractivas." }
      ]
    },
    5: {
      titulo: "Identidad Coorporativa",
      descripcion: `Nuestro servicio de Identidad Corporativa está diseñado para ayudar tanto a empresas establecidas como a pequeñas empresas y cualquier persona en general a crear una imagen sólida y coherente que refleje sus valores, misión y visión. Nos especializamos en el desarrollo de una identidad visual única que permita a su marca destacarse en el mercado, sin importar su tamaño o fase de emprendimiento.

      Trabajamos estrechamente con nuestros clientes para entender sus necesidades, cultura y objetivos específicos, creando una identidad corporativa personalizada que se adapte a su esencia. Desde el diseño de logotipos y la selección de paletas de colores hasta la definición de tipografía y elementos gráficos, nos aseguramos de que cada componente visual sea consistente y apropiado para el público al que se dirigen. Además, proporcionamos manuales de marca para garantizar la correcta aplicación de estos elementos en todos los canales de comunicación. Nuestro enfoque flexible y adaptado a cada cliente busca establecer una imagen fuerte y memorable que impulse su crecimiento y conexión con la audiencia, independientemente de su tamaño o sector.`,
      imagenBanner: "resources/diseño_ux_img.webp",
      imagenServicio: "resources/diseño_ux_img.webp",
      lista: [
        "Diseño de interfaces web y móviles",
        "Investigación de usuarios",
        "Prototipos interactivos",
        "Pruebas de usabilidad"
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
      imagenBanner: "resources/diseño_ux_img.webp",
      imagenServicio: "resources/diseño_ux_img.webp",
      lista: [
        "Diseño de interfaces web y móviles",
        "Investigación de usuarios",
        "Prototipos interactivos",
        "Pruebas de usabilidad"
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
      col.classList.add("col-md-4");
      col.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${plan.nombre}</h5>
            <p class="card-text">${plan.descripcion}</p>
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
