import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import './index.css';
import Accordion from '../../../components/Accordion/Accordion'
import InfoPersonelle from './div/InfoPersonelle'
import Formation from './div/Formation'
import Experience from './div/Experience'
import Competence from './div/Competence'
import Langue from './div/Langue'

function App() {
  return (<div>
    <div className="Header">
      <Navbar />
    </div>
    <div className="main-page">
      <h1>Profil</h1>
      <div className="section">
      <Accordion title="Infomations Personelle">
          <InfoPersonelle/>
        </Accordion>
      </div>
      <div className="section">
        <Accordion title="Formations">
          <Formation/>
        </Accordion>
      </div>
      <div className="section">
      <Accordion title="Experiences professionnelles">
          <Experience/>
        </Accordion>
      </div>
      <div className="section">
      <Accordion title="Langues">
          <Langue/>
        </Accordion>
      </div>
      <div className="section">
      <Accordion title="Compétences et Softskills">
         <Competence/>
        </Accordion>
      </div>
    </div>
  </div>
  );
}

export default App;