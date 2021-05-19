import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import '../../../styles/swipe.scss'
import '../../../styles/profil.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Formation from './div/formations';
import Experience from './div/experience';
import Competences from './div/competences';
import Langue from './div/langue';
import Softskill from './div/softskill'
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offre: {
        nom: 'Comptable',
        id: 1
      }
    }
  }
  render() {
    return (<div>
      <div className="App">
        <Navbar />
      </div>
      <div className='main-page'>
        <div className='section'>
          <h1>{this.state.offre.nom}</h1>
          <p>Swipez pour découvrir les profils des candidats</p>
        </div>
        <div className='swipeSection'>
          <div className='backgroundSwipe'>
            <div className='profil'>
              <div className='explication'>
              <table class="tg">
                    <thead>
                        <tr rowspan="2">
                          <FaInfoCircle className='icon' />
                        </tr>
                        <tr>
                          <p className="info">Matchez pour discutez avec le candidat ! Attention, vous ne pourrez découvrir son profil complet que lors d'un entretien !</p>
                        </tr>
                      <tr>
                        <td>
                        <p className="info">Informations confidentiel jusqu'à l'entretien: Nom, prénom, âge, sexe</p>
                          </td>
                      </tr>
                    </thead>
                  </table>
              </div>
              <div className='block'>
                <p className="intituleProfil">Formations</p>
                <div className="accordion">
                  <div className="subForm">
                    <Formation />
                  </div>
                </div>
              </div>
              <div className='block'>
                <p className="intituleProfil">Expérience professionnelles</p>
                <div className="accordion">
                  <div className="subForm">
                    <Experience />
                  </div>
                </div>
              </div>
              <div className='block'>
                <p className="intituleProfil">Langues</p>
                <div className="accordion">
                  <div className="subForm">
                    <Langue />
                  </div>
                </div>
              </div>
              <div className='block'>
                <p className="intituleProfil">Compétences</p>
                <div className="accordion">
                  <div className="subForm">
                    <p className="swipeSubtitle">Compétences techniques</p>
                    <Competences />
                    <p className="swipeSubtitle">Softskills</p>
                    <Softskill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='block'>
      <table className="tableSwipe">
          <thead>
            <tr>
              <th rowspan="2" className='btn-column-left'>
              <button className='btn-refus' onClick={() => alert("droite")}>
                <FaThumbsDown size="50" />
                </button>
              </th>
              <th rowspan="2" className='btn-column-center'>
              <button className='btn-later'>
                  Revoir plus tard
              </button>
              </th>
              <th rowspan="2" className='btn-column-right'>
              <button className='btn-accepter' onClick={() => alert("gauche")}>
                  <FaThumbsUp size="50" />
                </button>
              </th>
            </tr>
            <tr>
            </tr>
          </thead>
      </table>
          </div>
    </div>
    );
  }
}

export default App;