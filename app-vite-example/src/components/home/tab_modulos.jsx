export default function Tab_modulos() {
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

  return (
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
  )
}