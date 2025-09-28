import bannerImage from '../../assets/images/banner-bootcamp.png';

export default function Tab_home() {
  return (
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
    )
}