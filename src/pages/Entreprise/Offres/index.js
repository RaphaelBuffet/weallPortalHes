import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import './index.css';
import { data } from './data'
import Accordion from '../../../components/Accordion/Accordion'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
var offres = []
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offre: data
    }
  }
  handlePoste(index, value) {
    let newvalue = this.state.offre
    newvalue[index].poste = value.target.value
    this.setState({ offre: newvalue })
  }
  handleLocalite(index, value) {
    let newvalue = this.state.offre
    newvalue[index].localite = value.target.value
    this.setState({ offre: newvalue })
  }
  handleTaux(index, value) {
    let newvalue = this.state.offre
    newvalue[index].taux = value.target.value
    this.setState({ offre: newvalue })
  }
  handleContrat(index, value) {
    let newvalue = this.state.offre
    newvalue[index].contrat = value.target.value
    this.setState({ offre: newvalue })
  }
  handleDuree(index, value) {
    let newvalue = this.state.offre
    newvalue[index].duree = value.target.value
    this.setState({ offre: newvalue })
  }
  handleDisponibilite(index, value) {
    let newvalue = this.state.offre
    newvalue[index].dispo = value.target.value
    this.setState({ offre: newvalue })
  }
  handleSalaire(index, value) {
    let newvalue = this.state.offre
    newvalue[index].salaire = value.target.value
    this.setState({ offre: newvalue })
  }
  handleUrl(index, value) {
    let newvalue = this.state.offre
    newvalue[index].url = value.target.value
    this.setState({ offre: newvalue })
  }
  handleToogle(index) {
    let newoffre = this.state.offre
    newoffre[index].publish = !newoffre[index].publish
    this.setState({ offre: newoffre })
    console.log("test")
  }
  addOffre() {
    let newoffre = this.state.offre
    newoffre.push({
      poste: 'Nouvelle offre',
      taux: 0,
      contrat: 0,
      duree: 0,
      dispo: '2021-01-01',
      salaire: 0,
      url: '',
      publish: false,
      localite: ''
    }
    )
    this.setState({ offre: newoffre })
  }
  removeOffre(index) {
    let newoffre = this.state.offre
    newoffre.splice(index, 1)
    this.setState({ offre: newoffre })
  }
  handleEnregistrer(){
    alert("offre enregistrer")
  }
  DisplayOffre() {
    offres = []
    for (let i = 0; i < data.length; i++) {
      offres.push(
        <div id={i}>
          <Accordion title={this.state.offre[i].poste}>
            <div className='form'>
              <div className='line'>
                <div className='column'>
                  <p className='intitulé'>Titre du poste</p>
                  <input type="text" value={this.state.offre[i].poste} onChange={(value) => this.handlePoste(i, value)} className='input' />
                </div>
                <div className='column'>
                  <p className='intitulé'>Taux d'activité</p>
                  <select value={this.state.offre[i].taux} onChange={(value) => this.handleTaux(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
              </div>
              <div className='line'>
                <div className='column'>
                  <p className='intitulé'>Contrat</p>
                  <select value={this.state.offre[i].contrat} onChange={(value) => this.handleContrat(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
                <div className='column'>
                  <p className='intitulé'>Durée</p>
                  <select value={this.state.offre[i].duree} onChange={(value) => this.handleDuree(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
              </div>
              <div className='line'>
                <div className='column'>
                  <p className='intitulé'>Disponibilité</p>
                  <input type="date" value={this.state.offre[i].dispo} onChange={(value) => this.handleDisponibilite(i, value)} className='input' />
                </div>
                <div className='column'>
                  <p className='intitulé'>Fourchette de salaire</p>
                  <select value={this.state.offre[i].salaire} onChange={(value) => this.handleSalaire(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
              </div>
              <div className='line'>
                <div className='column'>
                  <p className='intitulé'>Lien de votre cahier des charges</p>
                  <input type="text" value={this.state.offre[i].url} onChange={(value) => this.handleUrl(i, value)} className='input' />
                </div>
                <div className='column'>
                  <p className='intitulé'>Localite</p>
                  <select value={this.state.offre[i].localite} onChange={(value) => this.handleLocalite(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
              </div>
              <div className='toogle'>
                    <FormControlLabel
                      control={<Switch checked={this.state.offre[i].publish} onChange={() => this.handleToogle(i)} name="checkedA" />}
                      label={this.state.offre[i].publish ? 'offre actuellement active' : 'offre actuellement inactive'}
                    />
                  </div>
              <div className='flex-div'>
                <button className='btn-supprimer' onClick={() => this.removeOffre(i)}> Supprimer cette offre</button>
                <button className='btn-selection' onClick={()=> this.changeCurrentOffre(i)}>Sélectionner cette offre</button>
                <button className='btn-enregistrer' onClick={this.handleEnregistrer}> Enregistrer cette offre</button>
              </div>
            </div>
          </Accordion>
        </div>
      )
    }
  }
  render() {
    this.DisplayOffre()
    return (
      <div>
        <div className="App">
          <Navbar />
        </div>
        <div className="main-page">
        <div className="section">
          <h1>Vos Offres</h1>
          <p>&gt; Créez vos offres d'emplois</p>
          </div>
          <div className="section">
            {this.state.offre.length===0
            ?<p className='text-bold'>Vous n'avez aucune offre répertorié</p>
            :offres}
          </div>
          <div className="section">
            <button className='btn-full' onClick={() => this.addOffre()}>ajouter une nouvelle offre</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;