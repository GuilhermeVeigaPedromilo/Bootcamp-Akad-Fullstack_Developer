export default function Tab_projects() {
    const projects = [
    {
      title: "Sistema de Estacionamento",
      description: "Aplicação em C# para gerenciar veículos em estacionamento",
      tech: "C#, .NET"
    },
    {
      title: "Sistema de Hospedagem de Hotel",
      description: "Sistema completo para gestão hoteleira com POO",
      tech: "C#, .NET, POO"
    },
    {
      title: "Sistema de Celular com POO",
      description: "Abstração de um celular utilizando conceitos de OOP",
      tech: "C#, Abstração, Interfaces"
    },
    {
      title: "Portfólio Profissional",
      description: "Desenvolvimento de portfólio para apresentar projetos",
      tech: "React, JavaScript, CSS"
    }
  ];

  return (
    <section className="projects-section">
            <h2 className="section-title">Projetos do Bootcamp</h2>
            <p className="section-subtitle">
              Construa um portfólio sólido com projetos práticos que demonstram suas habilidades
            </p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article key={index} className="project-card">
                  <header className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-tech">{project.tech}</span>
                  </header>
                  <p className="project-description">{project.description}</p>
                  <button className="project-btn">Ver Detalhes</button>
                </article>
              ))}
            </div>
          </section>
  )
}