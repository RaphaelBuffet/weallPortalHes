import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import '../../../styles/parametre.scss';
import Accordion from '../../../components/Accordion/Accordion'
import Contact from './div/contact'
import Abonnement from './div/abonnement'

function App() {
  return (<div>
    <div className="App">
      <Navbar/>
    </div>
    <div className="main-page">
    <div className="section">
    <h1>Parametre</h1>
    </div>
    <div className="section">
      <Accordion title="Abonnement">
          <Abonnement/>
        </Accordion>
      </div>
    <div className="section">
      <Accordion title="Aide et contact">
          <Contact/>
        </Accordion>
      </div>
      <div className="section">
      <Accordion title="Condition d'utilisation">
          <p>ici mettre Condition d'utilisation</p>
        </Accordion>
      </div>
      <div className="section">
      <Accordion title="Politique de confidentialité">
          <p>ici mettre politique de confidentialité</p>
        </Accordion>
      </div>
      <div className="section">
      <Accordion title="Supprimer mon compte">
          <p className='text-bold'>En cliquant sur le bouton ci-dessous vous supprimerez votre compte définitivement (cette action est irréversible) si votre but et de ne plus être visible modifier simplement votre visibilité sur votre profil</p>
          <button className='btn-enregistrer'>Supprimez mon compte</button>
        </Accordion>
      </div>
    </div>
    </div>
  );
}

export default App;