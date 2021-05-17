import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import Accordion from '../../../components/Accordion/Accordion'

import '../../../styles/profil.scss'
import '../../../styles/button.scss';
import { data } from './data'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { FaSave } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaHandPointer } from 'react-icons/fa';


var offres = []
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offre: data
    }
  }
  componentDidMount() {
    let profil = JSON.parse(localStorage.getItem("offre"))
    console.log(profil.offre[0])
    this.setState({ 
     offre: profil.offre
     });
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
  handleEnregistrer() {
    alert("offre enregistrer")
  }
  DisplayOffre() {
    offres = []
    if(this.state.offre.length===0){
      return
    }
    console.log(this.state.offre[0].poste)
    for (let i = 0; i < this.state.offre.length; i++) {
      offres.push(
        <div id={i}>
          <Accordion title={this.state.offre[i].poste}>
            <div className='form'>
              <div className='line'>
                <div className='column'>
                  <p className='intituleProfil'>Titre du poste</p>
                  <input type="text" value={this.state.offre[i].poste} onChange={(value) => this.handlePoste(i, value)} className='input' />
                </div>
                <div className='column'>
                  <p className='intituleProfil'>Taux d'activité</p>
                  <select value={this.state.offre[i].taux} onChange={(value) => this.handleTaux(i, value)} className='input'>
                    <option value="0">100%</option>
                    <option value="1">80%</option>
                    <option value="2">70%</option>
                    <option value="2">60%</option>
                    <option value="2">50%</option>
                    <option value="2">40%</option>
                    <option value="2">30%</option>
                    <option value="2">20%</option>
                    <option value="2">10%</option>
                  </select>
                </div>
              </div>
              <div className='line'>
                <div className='column'>
                  <p className='intituleProfil'>Contrat</p>
                  <select value={this.state.offre[i].contrat} onChange={(value) => this.handleContrat(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
                <div className='column'>
                  <p className='intituleProfil'>Durée</p>
                  <select value={this.state.offre[i].duree} onChange={(value) => this.handleDuree(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
              </div>
              <div className='line'>
                <div className='column'>
                  <p className='intituleProfil'>Disponibilité</p>
                  <input type="date" value={this.state.offre[i].dispo} onChange={(value) => this.handleDisponibilite(i, value)} className='input' />
                </div>
                <div className='column'>
                  <p className='intituleProfil'>Fourchette de salaire</p>
                  <select value={this.state.offre[i].salaire} onChange={(value) => this.handleSalaire(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
              </div>
              <div className='line'>
                <div className='column'>
                  <p className='intituleProfil'>Lien de votre cahier des charges</p>
                  <input type="text" value={this.state.offre[i].url} onChange={(value) => this.handleUrl(i, value)} className='input' />
                </div>
                <div className='column'>
                  <p className='intituleProfil'>Localite</p>
                  <select value={this.state.offre[i].localite} onChange={(value) => this.handleLocalite(i, value)} className='input'>
                    <option value="0">Sion</option>
                    <option value="1">Sierre</option>
                    <option value="2">Autre</option>
                  </select>
                </div>
              </div>
              <div className='toogle'>
              </div>
              <div className='btn-div'>
                <table>
                  <thead>
                    <tr>
                      <th className="btn-divRight" title="Activer l'offre permet de la rendre accessibleaux postulants">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.offre[i].publish}
                              onChange={() => this.handleToogle(i)} name="checkedA"
                              color="primary"
                              
                            />
                          }
                          label={this.state.offre[i].publish ? 'Offre active' : 'Offre inactive'}
                          labelPlacement="start"
                        />
                      </th>
                      <th>
                        <button title="Enregistrer les modifications faites à l'offre" className='btn-formAdd' onClick={this.handleEnregistrer}>
                          <FaSave />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="btn-divRight" title="Sélectionner l'offre permet d'y faire correspondre la partie Filtre">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={this.state.offre[i].publish}
                              onChange={() => this.changeCurrentOffre(i)} name="checkedA"
                              color="primary"
                            />
                          }
                          label={this.state.offre[i].publish ? 'Offre sélectionnée' : 'Offre désélectionnée'}
                          labelPlacement="start"
                        />
                      </td>
                      <td>
                        <button title="Supprimer l'offre" className='btn-formRemove' onClick={() => this.removeOffre(i)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion>
        </div>
      )
    }
  }
  render() {
    console.log(this.state.offre)
    this.DisplayOffre()
    return (
      <div>
        <div className="Header">
          <Navbar />
        </div>
        <div className="main-page">
          <div className="section">
            <table class="tg">
              <thead>
                <tr>
                  <th class="tg-cly1">
                    <h1>Vos Offres</h1>
                  </th>
                  <th class="tg-nrix" rowspan="2">
                    <button className='btn-formAdd' title="Nouvelle offre" onClick={() => this.addOffre()}>
                      <FaPlus />
                    </button>
                  </th>
                </tr>
                <tr>
                  <td class="tg-cly1"><p>Créez vos offres d'emplois</p>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div className="section">
            {this.state.offre.length === 0
              ? <p className='text-bold'>Vous n'avez aucune offre répertoriée</p>
              : offres}
          </div>
        </div>
      </div>
    );
  }
}

export default App;