import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import './index.css';
import Accordion from '../../../components/Accordion/Accordion'

function App() {
  return (<div>
    <div className="Header">
      <Navbar />
    </div>
    <div className="main-page">
      <h1>Profil</h1>
      <div className="section">
      <Accordion title="Infomations Personelle">
          <p>hello</p>
        </Accordion>
      </div>
      <div className="section">
        <Accordion title="Formations">
          <p>hello</p>
        </Accordion>
      </div>
      <div className="section">
      <Accordion title="Experiences professionnelles">
          <p>hello</p>
        </Accordion>
      </div>
      <div className="section">
      <Accordion title="Compétences et Softskills">
          <p>hello</p>
          <button>test</button>
          <input></input>
        </Accordion>
      </div>
    </div>
  </div>
  );
}

export default App;