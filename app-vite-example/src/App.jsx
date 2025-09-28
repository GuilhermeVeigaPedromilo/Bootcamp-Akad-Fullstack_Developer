import React, { useState } from 'react';
import './App.css';
import Tab_home from './components/home/tab_home';
import Tab_modulos from './components/home/tab_modulos';
import Tab_projects from './components/home/tab_projects';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // EXAMPLE OF ACESS ENVIROMENT VARIABLES IN VITE
  if (import.meta.env.MODE === 'development') {
    console.log("MODE: ", import.meta.env.MODE)
    console.log("PROD: ", import.meta.env.PROD)
    console.log("API_URL: ", import.meta.env.VITE_API_URL)
  } else {
    console.log("MODE: ", import.meta.env.MODE)
    console.log("BASE_URL: ", import.meta.env.BASE_URL)
  }

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
          <Tab_home></Tab_home>
        )}

        {activeTab === 'modules' && (
          <Tab_modulos></Tab_modulos>
        )}

        {activeTab === 'projects' && (
          <Tab_projects></Tab_projects>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2025 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;