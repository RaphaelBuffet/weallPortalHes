import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import '../../../styles/filtre.scss';
import '../../../styles/button.scss';
import Select from 'react-select';
import { FaInfoCircle } from 'react-icons/fa';
import { data } from './data'


export default class Filtres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secteurs:data.secteurs,
      canton:data.canton,
      taux:data.taux,
      contrat:data.contrat,
      disponibilite:data.disponibilite,
      salaire:data.salaire,
      type:data.type,
      ethique:data.ethique
    }
  }

  render() {
    return (<div>
      <div className="App">
        <Navbar />
      </div>
      <div className='main-page'>
        <div className='section'>
        <h1>Filtre de recherche</h1>
        <p>&gt; Sélectionnez les filtres de recherche pour découvrir des offres adaptées</p>
        </div>
        <div className='section'>
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
              <h2>Canton</h2>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[this.state.canton[2], this.state.canton[1]]}
                isMulti
                name="colors"
                options={this.state.canton}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
          </div>
          <div className='display'>
            <div className='select'>
              <h2>Taux d'activité</h2>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[this.state.taux[2], this.state.taux[1]]}
                isMulti
                name="colors"
                options={this.state.taux}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
            <div className='select'>
              <h2>Contrat</h2>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[this.state.contrat[2], this.state.contrat[1]]}
                isMulti
                name="colors"
                options={this.state.contrat}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
          </div>
          <div className='display'>
            <div className='select'>
              <h2>Disponibilité</h2>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[this.state.disponibilite[2], this.state.disponibilite[1]]}
                isMulti
                name="colors"
                options={this.state.disponibilite}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
            <div className='select'>
              <h2>Fourchette de salaire</h2>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[this.state.salaire[2], this.state.salaire[1]]}
                isMulti
                name="colors"
                options={this.state.salaire}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
          </div>
          <div className='display'>
            <div className='select'>
              <h2>Type d'entreprise</h2>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[this.state.type[2], this.state.type[1]]}
                isMulti
                name="colors"
                options={this.state.type}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
            <div className='select'>
              <h2>Ethique</h2>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[this.state.ethique[2], this.state.ethique[1]]}
                isMulti
                name="colors"
                options={this.state.ethique}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
          </div>
          <div className='info'>
            <FaInfoCircle className='icon' />
            <p>Vos filtres de recherche sont enregistrés même après votre déconnexion.</p>
          </div>
        </div>
        <button className='btn-neutral'>
          enregistrer les filtres
        </button>
      </div>
      </div>
    </div>
    );
  }
}