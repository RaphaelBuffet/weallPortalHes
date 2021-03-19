import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import './index.css';
import Accordion from '../../../components/Accordion/Accordion'
import InfoEntreprise from './div/InfoEntreprise'
import PersonneDeContact from './div/PersonneDeContat'


function App() {
  return (<div>
    <div className="Header">
      <Navbar />
    </div>
    <div className="main-page">
      <h1>Profil</h1>
      <div className="section">
        <Accordion title="Infomations De l'entreprise">
          <InfoEntreprise />
        </Accordion>
      </div>
      <div className="section">
        <Accordion title="Coordonées de la personne de contact">
          <PersonneDeContact />
        </Accordion>
      </div>
      <div className="section">
      <button className='btn-enregistrer-less-margin'>Créer une offre</button>
      </div>
    </div>
  </div>
  );
}

export default App;