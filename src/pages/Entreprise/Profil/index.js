import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import Accordion from '../../../components/Accordion/Accordion'

import '../../../styles/profil.scss'
import '../../../styles/button.scss';

import InfoEntreprise from './div/InfoEntreprise'
import PersonneDeContact from './div/PersonneDeContat'
import { useHistory } from 'react-router-dom';



function App() {
  const history = useHistory();
    return (<div>
      <div className="Header">
        <Navbar />
      </div>
      <div className="main-page">
      <div className="section">
          <h1>Votre Profil</h1>
          <p>Créez le profil de votre entreprise</p>
          </div>
          <div className="section">   
          <Accordion title="Infomations De l'entreprise">
            <InfoEntreprise />
          </Accordion>
          <Accordion title="Personne de contact">
            <PersonneDeContact />
          </Accordion>
        </div>
        <div className="section">
        <button onClick={() => {history.push('/entreprise/offre')}} className='btn-neutral'>Créer une offre</button>
        </div>
      </div>
    </div>
    );
  }

export default App;