import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import './index.css';
import Select from 'react-select';
import { data } from './data'
import { FaInfoCircle } from 'react-icons/fa';
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
        <div>
          <div className='line'>
            <div className='column'>
              <h2 className='intitulé'>Langue</h2>
              <select value={this.state.langue[i].nom} onChange={(value) => this.handleLangueName(i, value)} className='input'>
                <option value='0'>Français</option>
                <option value='1'>Allemand</option>
                <option value='2'>Anglais</option>
              </select>
            </div>
            <div className='column'>
              <h2 className='intitulé'>Niveau</h2>
              <select value={this.state.langue[i].niveau} onChange={(value) => this.handleLangueNiveau(i, value)} className='input'>
                <option value="0">A1</option>
                <option value="1">A2</option>
                <option value="2">B1</option>
                <option value="3">B2</option>
                <option value="4">C1</option>
                <option value="5">C2</option>
              </select>
            </div>

          </div>
          <div className='line'>
            <button className='btn-enregistrer'>supprimer</button>
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
        <h1>Filtre de recherche</h1>
        <p>&gt; Sélectionnez les filtres de recherche pour découvrir des postulant adaptées</p>
        <div className='form'>
          <div className='display'>
            <div className='select'>
              <h2>Secteur d'activité</h2>
              <Select
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
              <h2>Année d'expérience</h2>
              <Select
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
              <h2>Cursus</h2>
              <Select
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
              <h2>Degré d'étude</h2>
              <Select
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
          {langues}
          <div>
            <button className='btn-full' onClick={() => this.addLangue()}>ajouter une langue</button>
          </div>
          <div className='info'>
            <FaInfoCircle className='icon' />
            <p>Vos filtres de recherche sont enregistrés même après votre déconnexion.</p>
          </div>
        </div>
        <button className='btn-enregistrer-less-margin'>
          enregistrer les filtres
        </button>
      </div>
    </div>
    );
  }
}