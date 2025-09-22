import React, { useState } from 'react';
import './App.css';
import bannerImage from '../../public/images/banner-bootcamp.png';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const bootcampModules = [
    {
      title: "Introdução ao React",
      activities: 7,
      topics: [
        "Introdução ao Desenvolvimento Fullstack com a Akad",
        "Conhecendo o React",
        "Preparando o Ambiente de Desenvolvimento React",
        "Empacotadores e Compiladores no React",
        "Criando Aplicações React com Vite",
        "Componentes Funcionais no React",
        "Live de Lançamento Akad - Fullstack Developer"
      ]
    },
    {
      title: "Introdução ao .NET e Controle de Versão com Git",
      activities: 8,
      topics: [
        "Introdução ao .NET",
        "Introdução as IDEs e Configuração de Ambiente .NET",
        "Sintaxe e Tipos de Dados em C#",
        "Tipos de Operadores em C#",
        "Operadores Aritméticos em C#",
        "Versionamento de Código com Git e GitHub",
        "Desafios de Código: Aperfeiçoe Sua Lógica e Pensamento Computacional",
        "Explorando a Sintaxe em C# com Desafios de Código"
      ]
    },
    {
      title: "Estrutura de Dados com C#",
      activities: 6,
      topics: [
        "Conhecendo as Estruturas de Repetição em C#",
        "Conhecendo a Organização de um Programa C#",
        "Array e Listas em C#",
        "Desafios de Projetos: Crie Um Portfólio Vencedor",
        "Construindo um Sistema para um Estacionamento com C#",
        "Explorando Estrutura de Dados em C# com Desafios de Código"
      ]
    },
    {
      title: "Programação Orientada a Objetos com C#",
      activities: 10,
      topics: [
        "Propriedades, Métodos e Construtores com C#",
        "Manipulando Valores com C#",
        "Exceções e Coleções com C#",
        "Tuplas, Operador Ternário e Desconstrução de um Objeto com C#",
        "Nuget, Serializar e Atributos no C#",
        "Construindo um Sistema de Hospedagem de um Hotel no C#",
        "Introdução, Abstração e Encapsulamento com C#",
        "Herança e Polimorfismo com C#",
        "Classes Abstratas e Interfaces com C#",
        "Criando um Sistema e Abstraindo um Celular com POO em C#"
      ]
    },
    {
      title: "Desenvolvimento de APIs com .NET",
      activities: 4,
      topics: [
        "Introdução as APIs com C#",
        "Trabalhando com ASP.NET Minimals APIs",
        "Conhecendo e Instalando o Docker",
        "Primeiros Passos com o Docker"
      ]
    },
    {
      title: "Introdução à Engenharia de Prompts e GitHub Copilot",
      activities: 4,
      topics: [
        "Introdução à Engenharia de Prompts",
        "Técnicas de Engenharia de Prompt",
        "Conhecendo o GitHub Copilot: Aumentando sua Produtividade na Programação",
        "Configurando e Usando o GitHub Copilot"
      ]
    }
  ];

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
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <h1>Bootcamp <span className="brand-akad">akad</span></h1>
            <p className="subtitle">Fullstack Developer</p>
          </div>
          <ul className="nav-menu">
            <li>
              <button 
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'modules' ? 'active' : ''}`}
                onClick={() => setActiveTab('modules')}
              >
                Módulos
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                Projetos
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'home' && (
          <section className="hero-section">
            <div className="hero-content">
              <h2 className="hero-title">Sobre este bootcamp realizado</h2>
              <p className="hero-description">
                Explore desde os fundamentos de programação até a construção de aplicações completas 
                com React, .NET e IA com GitHub Copilot passando por estruturas de dados, programação 
                orientada a objetos, APIs, Docker, engenharia de prompts e todo o passo a passo para 
                se tornar um full stack de sucesso.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">79</span>
                  <span className="stat-label">Horas de conteúdo</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">04</span>
                  <span className="stat-label">Projetos para portfólio</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">02</span>
                  <span className="stat-label">Desafios de código</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="banner-placeholder">
                <img src={bannerImage} alt="Banner do Bootcamp Akad" style={{}} />
              </div>
            </div>
          </section>
        )}

        {activeTab === 'modules' && (
          <section className="modules-section">
            <h2 className="section-title">Módulos do Bootcamp</h2>
            <div className="modules-grid">
              {bootcampModules.map((module, index) => (
                <article key={index} className="module-card">
                  <header className="module-header">
                    <h3 className="module-title">{module.title}</h3>
                    <span className="module-activities">{module.activities} atividades</span>
                  </header>
                  <div className="module-content">
                    <ul className="topics-list">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="topic-item">{topic}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
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
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2025 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;