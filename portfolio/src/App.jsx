import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Database, Globe } from 'lucide-react';
import ContactForm from './componentes/contacto';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioData = {
    name: "Tiziano Maceda",
    title: "Desarrollador Front-End",
    description: "Creando experiencias web modernas y funcionales",
    about: "Soy un desarrollador apasionado por crear soluciones digitales innovadoras. Me especializo en React, Node.js y tecnologías modernas de desarrollo web. Siempre estoy aprendiendo y buscando nuevos desafíos.",
    skills: [
      { name: "Frontend", icon: <Code className="w-8 h-8" />, techs: ["React", "JavaScript", "CSS3", "HTML5"] },
      { name: "Backend", icon: <Database className="w-8 h-8" />, techs: ["Node.js", "Express", "MongoDB"] },
      { name: "Diseño", icon: <Palette className="w-8 h-8" />, techs: ["Tailwind", "Bootstrap", "Responsive Design"] },
      { name: "Herramientas", icon: <Globe className="w-8 h-8" />, techs: ["Git", "Vercel"] }
    ],
    projects: [
      {
        title: "Tienda Tecnológica",
        description: "Aplicación de comercio electrónico completa con carrito de compras, autenticación y pasarela de pagos.",
        image: "/techZone.png", 
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/tizianodk/tienda-ecommerce",
        demo: "#"
      },
      {
        title: "Sistema Bar",
        description: "Aplicación interactiva para bar. "+
        "Los usuarios pueden explorar el menú y consultar recomendaciones a traves de nuestro WhatsApp con IA,"+
        " el menú incluye etiquetas informativas para personas con necesidades específicas como celíacos, diabéticos o veganos"+ 
        ", facilitando una experiencia inclusiva y segura para todos los clientes.",
        image: "/elParador.png",
        tech: ["React", "Express", "MongoDB"],
        github: "https://github.com/tizianodk/elParador",
        demo: "#"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              {portfolioData.name.split(' ')[0]}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item === 'home' ? 'Inicio' : 
                   item === 'about' ? 'Sobre mí' :
                   item === 'skills' ? 'Habilidades' :
                   item === 'projects' ? 'Proyectos' : 'Contacto'}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
                >
                  {item === 'home' ? 'Inicio' : 
                   item === 'about' ? 'Sobre mí' :
                   item === 'skills' ? 'Habilidades' :
                   item === 'projects' ? 'Proyectos' : 'Contacto'}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>












      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-black-600 to-black-500">








        <div className="text-center text-white px-4">
          {/* Foto de perfil */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Opción 1: Con imagen real */}
              {/* <img 
                src="/tu-foto.jpg" 
                alt={portfolioData.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 shadow-2xl object-cover"
              /> */}
              
              {/* Opción 2: Avatar con iniciales (actual) */}
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 backdrop-blur-sm rounded-full border-4 border-white/30 shadow-2xl flex items-center justify-center text-4xl md:text-5xl font-bold">
                {portfolioData.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-black">
            {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 text-black">
            {portfolioData.title}
          </p>
          <p className="text-lg mb-8 opacity-80 text-black">
            {portfolioData.description}
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/tizianodk" className="text-black hover:text-blue-200 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/tiziano-maceda" className="text-black hover:text-blue-200 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a onClick={() => scrollToSection('contact')} className="text-black hover:text-blue-200 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver mis proyectos
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {portfolioData.about}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  React Developer
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  UI/UX Enthusiast
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              {/* Opción 1: Con imagen real */}
              {/* <img 
                src="/tu-foto-about.jpg" 
                alt={portfolioData.name}
                className="w-64 h-64 rounded-2xl shadow-2xl object-cover"
              /> */}
              
              {/* Opción 2: Avatar estilizado (actual) */}
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                {portfolioData.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Habilidades</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioData.skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{skill.name}</h3>
                <div className="space-y-2">
                  {skill.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3" >
                {/* Imagen del proyecto con overlay */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-50 h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{borderRadius:"50%",marginLeft:"90px",marginTop:"15px"}}
                      />
                      {/* Overlay con botones */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                          <a
                            href={project.github}
                            className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-center hover:bg-white/30 transition-colors flex items-center justify-center space-x-2"

                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium" >Código</span>
                          </a>
                          <a
                            href={project.demo}
                            className="flex-1 bg-blue-500/80 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600/80 transition-colors flex items-center justify-center space-x-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Demo</span>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Fallback con diseño moderno
                    <div className="h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-white text-lg font-semibold">{project.title}</h4>
                      </div>
                      {/* Elementos decorativos */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white/20 rounded-lg rotate-12"></div>
                    </div>
                  )}
                </div>
                
                {/* Contenido de la card */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3" style={{height:"200px",display:'flex',alignItems:'center'}}>
                    {project.description}
                  </p>
                  
                  {/* Tags de tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enlaces (solo visibles en hover en desktop) */}
                  <div className="flex space-x-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-500 hover:text-gray-700 transition-colors text-sm"
                    />
                    
                    <a
                      href={project.demo}
                      className="flex items-center text-blue-500 hover:text-blue-700 transition-colors text-sm"
                    />
                  </div>
                </div>
                
                {/* Barra inferior decorativa */}
                <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">¡Trabajemos juntos!</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Conectemos</h3>
                <div className="space-y-4">
                  <a
                    href="tizianomaceda24@gmail.com"
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">tizianomaceda24@gmail.com</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/tiziano-maceda"
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                      <p className="text-gray-600">Conectemos profesionalmente</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/tizianodk"
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="bg-gray-100 p-3 rounded-full group-hover:bg-gray-200 transition-colors">
                      <Github className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">GitHub</h4>
                      <p className="text-gray-600">Revisa mi código</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Envíame un mensaje</h3>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 {portfolioData.name}. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;