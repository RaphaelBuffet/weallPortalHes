import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import '../../../styles/filtre.scss';
import '../../../styles/profil.scss';
import '../../../styles/button.scss';
//import Select from '../../../components/Multiselect/Multiselect.js'
import Select from 'react-select';
import { data } from './data'
import { FaInfoCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { MdBatteryCharging20 } from 'react-icons/md';

var langues = []
export default class Filtres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secteurs: data.secteurs,
      annee: data.annee,
      cursus: data.cursus,
      etude: data.etude,
      langue: data.langue
    }
  }
  addLangue() {
    let newLangue = this.state.langue
    newLangue.push({
      nom: '0',
      niveau: '0'
    })
    this.setState({ langues: newLangue })
  }
  deleteLangue(index) {
    let newLangue = this.state.langue
    newLangue.splice(index, 1)
    this.setState({ langues: newLangue })
  }
  handleLangueName(index, value) {
    let newlangue = this.state.langue
    newlangue[index].nom = value.target.value
    this.setState({ langues: newlangue })
  }
  handleLangueNiveau(index, value) {
    let newlangue = this.state.langue
    newlangue[index].niveau = value.target.value
    this.setState({ langues: newlangue })
  }
  createLangue() {
    langues = []
    for (let i = 0; i < this.state.langue.length; i++) {
      langues.push(
        <div key={i} className='select'>
          <div className="table-small">
            <table class="tg">
              <thead>
                <tr>
                  <th class="tg-nrix">
                    <h2 className='intituleFiltre'>Langue</h2>
                  </th>
                  <th class="tg-nrix">
                    <select value={this.state.langue[i].nom} onChange={(value) => this.handleLangueName(i, value)} className='input'>
                      <option value='0'>Français</option>
                      <option value='1'>Allemand</option>
                      <option value='2'>Anglais</option>
                    </select>
                  </th>
                  <th class="tg-button" rowspan="2">
                    <button className='btn-formRemove' onClick={() => this.deleteLangue(i)}>
                      <FaTrash />
                    </button>
                  </th>
                </tr>
                <tr>
                  <td class="tg-nrix">
                    <h2 className='intituleFiltre'>Niveau</h2>
                  </td>
                  <td class="tg-nrix">
                    <select value={this.state.langue[i].niveau} onChange={(value) => this.handleLangueNiveau(i, value)} className='input'>
                      <option value="0">A1</option>
                      <option value="1">A2</option>
                      <option value="2">B1</option>
                      <option value="3">B2</option>
                      <option value="4">C1</option>
                      <option value="5">C2</option>
                    </select>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      )
    }

  }
  render() {
    this.createLangue()
    return (<div>
      <div className="App">
        <Navbar />
      </div>
      <div className='main-page'>
        <div className='section'>
          <h1>Filtre de recherche</h1>
          <p>Sélectionnez les filtres de recherche pour découvrir des postulant adaptées</p>
        </div>
        <div className='section'>
          <div className='form'>
            <div className='display'>
              <div className='select'>
                <p className="intituleProfil">Secteur d'activité</p>
                <Select
                  label="Single select"
                  theme={theme => ({
                    ...theme,
                    borderRadius: 0
                  })}
                  closeMenuOnSelect={false}
                  defaultValue={[this.state.secteurs[2], this.state.secteurs[1]]}
                  isMulti
                  name="colors"
                  options={this.state.secteurs}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder='Choisir'
                />
              </div>
              <div className='select'>
                <p className="intituleProfil">Année d'expérience</p>
                <Select
                  label="Single select"
                  theme={theme => ({
                    ...theme,
                    borderRadius: 0
                  })}
                  closeMenuOnSelect={false}
                  defaultValue={[this.state.annee[2], this.state.annee[1]]}
                  isMulti
                  name="colors"
                  options={this.state.annee}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder='Choisir'
                />
              </div>
            </div>
            <div className='display'>
              <div className='select'>
                <p className="intituleProfil">Cursus</p>
                <Select
                  label="Single select"
                  theme={theme => ({
                    ...theme,
                    borderRadius: 0
                  })}
                  closeMenuOnSelect={false}
                  defaultValue={[this.state.cursus[2], this.state.cursus[1]]}
                  isMulti
                  name="colors"
                  options={this.state.cursus}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder='Choisir'
                />
              </div>
              <div className='select'>
                <p className="intituleProfil">Degré d'étude</p>
                <Select
                  label="Single select"
                  theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    marginTop:0,
                  })}
                  closeMenuOnSelect={false}
                  defaultValue={[this.state.etude[2], this.state.etude[1]]}
                  isMulti
                  name="colors"
                  options={this.state.etude}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder='Choisir'
                />
              </div>
            </div>
            <div>
              <p className='subtitle'>Langues</p>
              <button className='btn-formAdd' onClick={() => this.addLangue()}>
                <FaPlus />
              </button>
            </div>
            {langues}
          </div>
          <button className='btn-neutral'>
            enregistrer les filtres
        </button>
          <div className='info'>
            <p>
              <FaInfoCircle className='icon' />
              Vos filtres de recherche sont enregistrés même après votre déconnexion.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}