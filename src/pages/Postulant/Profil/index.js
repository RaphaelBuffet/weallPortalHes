import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import './index.css';
import Accordion from '../../../components/Accordion/Accordion'
import InfoPersonelle from './div/InfoPersonelle'
import Formation from './div/Formation'
import Experience from './div/Experience'
import Competence from './div/Competence'
import Langue from './div/Langue'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publish: true
    };
  }
  handleToogle() {
    let publish = !this.state.publish
    this.setState({ publish: publish })
    console.log("test")
  }
  render() {
    return (
      <div>
        <div className="Header">
          <Navbar />
        </div>
        <div className="main-page">
        <div className="section">
          <h1>Votre Profil</h1>
          <p>&gt; Créez votre profil pour commencer vos recherches !</p>
          </div>
          <div className="section">
            <Accordion title="Infomations Personelle">
              <InfoPersonelle />
            </Accordion>
          </div>
          <div className="section">
            <Accordion title="Formations">
              <Formation />
            </Accordion>
          </div>
          <div className="section">
            <Accordion title="Experiences professionnelles">
              <Experience />
            </Accordion>
          </div>
          <div className="section">
            <Accordion title="Langues">
              <Langue />
            </Accordion>
          </div>
          <div className="section">
            <Accordion title="Compétences et Softskills">
              <Competence />
            </Accordion>
          </div>
          <div className='section'>
            <button className='btn-enregistrer-less-margin'>Aperçus profil</button>
            <button className='btn-enregistrer-less-margin'>Commencer la recherche</button>
          </div>
          <div className='section'>
            <div className='recherche'>
              <div>
                <FormControlLabel
                  control={<Switch checked={this.state.publish} onChange={() => this.handleToogle()} name="checkedA" />}
                  label={this.state.publish ? 'Profil actif et disponible à la recherche' : 'Profil indipsonible à la recheche'}
                />
              </div>
              <p>Si cette option est désactivée, vous ne figurez pas dans la pile de candidature. Vous avez toujours accès au chat et pouvez discuter avec les entreprises matchées.</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default Profil;