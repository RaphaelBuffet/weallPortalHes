import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import '../../../styles/swipe.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Formation from './div/formations';
import Experience from './div/experience';
import Competences from './div/competences';
import Langue from './div/langue';
import Softskill from './div/softskill'

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
        <div className='titre'>
          <h1>{this.state.offre.nom} - Swipe</h1>
          <label>&gt; Swipez pour découvrir les profils des candidats</label>
        </div>
        <div className='test'>
          <button className='btn-accepter' onClick={() => alert("gauche")}>
            <ArrowBackIosIcon />
          </button>
          <div className='profil'>
            <div className='explication'>
              <div className='paragraphe'>
                <p>Matchez pour discutez avec le candidat ! Attention, vous ne pourrez découvrir son profil complet que lors d'un entretien !</p>
                <p></p>
              </div>
              <div className='paragraphe'>
                <p>Informations confidentiel jusqu'à l'entretien: Nom, prénom, âge, sexe</p>
                <p></p>
              </div>
            </div>
            <div className='section-bordered'>
              <h3>Formations</h3>
              <Formation/>
            </div>
            <div className='section-bordered'>
              <h3>Expérience professionnelles</h3>
              <Experience/>
            </div>
            <div className='section-bordered'>
              <h3>Langues</h3>
              <Langue/>
            </div>
            <div className='section-bordered'>
              <h3>Compétences</h3>
              <Competences/>
              <h3>Softskills</h3>
              <Softskill/>
            </div>
          </div>
          <button className='btn-refus' onClick={() => alert("droite")}>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div>
        <button className='btn-full'>
          Revoir plus tard
        </button>
        </div>
        

      </div>
    </div>

    );
  }
}

export default App;