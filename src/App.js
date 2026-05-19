import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className="tag">// Portfólio pessoal</div>
        <h1>Tiago<br /><span>Evaristo</span> Condack</h1>
        <p className="role">
          <span className="dot"></span>Desenvolvedor Junior · Full Stack
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}> 
            <a href="https://github.com/tcondack" target="_blank" rel="noreferrer" className="footer-link">GitHub</a> 
            <a href="https://www.linkedin.com/in/tiago-condack-a1515b219/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a> </div> 
      </header>

      <section>
        <div className="sec-label">sobre</div>
        <p className="about-text">
          Estudando React, Node.js, Firebase, Python, Django, Linux e MySQL.
          Construindo soluções reais com foco em qualidade e aprendizado contínuo.
        </p>
        <div className="stack">
          <span className="chip purple">React</span>
          <span className="chip purple">Node.js</span>
          <span className="chip purple">Firebase</span>
          <span className="chip green">Python</span>
          <span className="chip green">Django</span>
          <span className="chip green">MongoDB</span>
          <span className="chip">Ubuntu Linux</span>
          <span className="chip">Git</span>
          <span className="chip">GitHub</span>
        </div>
      </section>

      <div className="projects">
        <div className="sec-label">projetos</div>

        <div className="card">
          <div className="card-num">FRONTEND</div>
          <div>
            <div className="card-title">Agenda Fácil NAF</div>
            <div className="card-desc">MVP do Núcleo de atendimento da Unifeso em que é criado um sistema que permita a população local realizar agendamento para atendimento com mais facilidade, para gerenciar os adgendamentos e a distribuição de atendimentos NAF, melhorando e trazendo uma boa experiencia a todos os envolvidos.</div>
            <span className="badge">HTML, CSS e JAVASCRIPT</span>
          </div>
        </div>

        <div className="card">
          <div className="card-num">BACKEND</div>
          <div>
            <div className="card-title">Outro Projeto</div>
            <div className="card-desc">Uma página para gerenciamento dos parques da cidade de Teresópolis, para dar enfoque nas suas belezas naturais, diversidade de trilhas e eventos. Uma cidade envolvida em três Parques que vão proporcionar uma experiencia incrível para os amantes da natureza.</div>
            <span className="badge">Django · MongoDB</span>
          </div>
        </div>
        <div className="card">
          <div className="card-num">Fullstack</div>
          <div>
            <div className="card-title">Esta Página</div>
            <div className="card-desc">Deploy em Firebase desta página que demonstra meus aprendizados e progresso. Tendo como base matéria da faculdade sobre PWAs, em react rodando em node.js na máquina local, fazendo build e firebase deploy, tendo meu sistema principal de uso sendo o Ubuntu 26.04,  </div>
            <span className="badge">React, Node.js, Firebase, Ubuntu</span>
          </div>
        </div>
      </div>
        <footer> 
          <span className="footer-text">© 2026 Tiago Condack</span>
        </footer> 
    </div>
  );
}


export default App;