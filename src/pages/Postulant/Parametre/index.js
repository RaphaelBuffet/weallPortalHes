import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import '../../../styles/parametre.scss';
import '../../../styles/profil.scss';
import Accordion from '../../../components/Accordion/Accordion'
import Contact from './div/contact'

import { FaExclamation } from 'react-icons/fa';

function App() {
  return (<div>
    <div className="App">
      <Navbar/>
    </div>
    <div className="main-page">
    <div className="section">
    <h1>Paramètre</h1>
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
          <table>
            <tbody>
              <tr>
                <td rowspan="2">
                  <FaExclamation />
                </td>
                <td>
                  <p className='intituleFiltre'>En cliquant sur le bouton ci-dessous vous supprimerez votre compte définitivement (Action irréversible)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className='intituleFiltre'>Si vous souhaitez uniquement ne plus être visible, modifiez simplement votre visibilité sur votre profil</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='btn-div'>
              <button className='btn-reject'>Supprimez mon compte</button>
          </div>
        </Accordion>
      </div>
    </div>
    </div>
  );
}

export default App;