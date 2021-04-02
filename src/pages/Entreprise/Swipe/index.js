import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import './index.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
                <p>Matchez pour découvrir de nouvelles informations sur le candidat !</p>
                <p>Attention, vous ne pourrez découvrir son profil complet que lors d'un entretien !</p>
              </div>
              <div className='paragraphe'>
                <p>Informations confidentiel jusqu'à l'entretien:</p>
                <p>Nom, prénom, âge, sexe</p>
              </div>
              <div className='paragraphe'>
                <p>Informations révélées après le match:</p>
                <p>Description, image et le numéro de téléphone</p>
              </div>
            </div>
            <div className='section-bordered'>
              <h3>Formations</h3>
            </div>
            <div className='section-bordered'>
              <h3>Expérience professionnelles</h3>
            </div>
            <div className='section-bordered'>
              <h3>Compétences</h3>
            </div>
            <div className='section-bordered'>
              <h3>Langues</h3>
            </div>
            <div className='section-bordered'>
              <h3>Softskills (Compétences non techniques)</h3>
            </div>
          </div>
          <button className='btn-refus' onClick={() => alert("droite")}>
            <ArrowForwardIosIcon />
          </button>
        </div>

      </div>
    </div>

    );
  }
}

export default App;