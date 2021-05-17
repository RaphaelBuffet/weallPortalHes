import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import '../../../styles/filtre.scss';
import '../../../styles/button.scss';
import Select from 'react-select';
import { FaInfoCircle } from 'react-icons/fa';
import { FaTrash} from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

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
componentDidMount(){
  console.log("j'aime les gens")
}
  render() {
    return (<div>
      <div className="App">
        <Navbar />
      </div>
      <div className='main-page'>
        <div className='section'>
        <h1>Filtre de recherche</h1>
        <p>Sélectionnez les filtres de recherche pour découvrir des offres adaptées</p>
        </div>
        <div className='section'>
        <div className='form'>
          <div className='display'>
            <div className='select'>
            <p className="intituleProfil">Secteur d'activité</p>
              <Select
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
            <p className="intituleProfil">Canton</p>
              <Select
                theme={theme => ({
                  ...theme,
                  borderRadius: 0
                })}
                closeMenuOnSelect={false}
                defaultValue={[this.state.secteurs[2], this.state.secteurs[1]]}
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
            <p className="intituleProfil">Taux d'activité</p>
              <Select
                theme={theme => ({
                  ...theme,
                  borderRadius: 0
                })}
                closeMenuOnSelect={false}
                defaultValue={[this.state.secteurs[2], this.state.secteurs[1]]}
                isMulti
                name="colors"
                options={this.state.taux}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
            <div className='select'>
            <p className="intituleProfil">Contrat</p>
              <Select
                theme={theme => ({
                  ...theme,
                  borderRadius: 0
                })}
                closeMenuOnSelect={false}
                defaultValue={[this.state.secteurs[2], this.state.secteurs[1]]}
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
            <p className="intituleProfil">Disponibilité</p>
              <Select
                theme={theme => ({
                  ...theme,
                  borderRadius: 0
                })}
                closeMenuOnSelect={false}
                defaultValue={[this.state.secteurs[2], this.state.secteurs[1]]}
                isMulti
                name="colors"
                options={this.state.disponibilite}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
            <div className='select'>
            <p className="intituleProfil">Fourchette de salaire</p>
              <Select
                theme={theme => ({
                  ...theme,
                  borderRadius: 0
                })}
                closeMenuOnSelect={false}
                defaultValue={[this.state.secteurs[2], this.state.secteurs[1]]}
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
            <p className="intituleProfil">Type d'entreprise</p>
              <Select
                theme={theme => ({
                  ...theme,
                  borderRadius: 0
                })}
                closeMenuOnSelect={false}
                defaultValue={[this.state.secteurs[2], this.state.secteurs[1]]}
                isMulti
                name="colors"
                options={this.state.type}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
            <div className='select'>
            <p className="intituleProfil">Ethique</p>
              <Select
                theme={theme => ({
                  ...theme,
                  borderRadius: 0
                })}
                closeMenuOnSelect={false}
                defaultValue={[this.state.secteurs[2], this.state.secteurs[1]]}
                isMulti
                name="colors"
                options={this.state.ethique}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
          </div>
        </div>
        <div className="bottomDiv">
        <div className='btn-divRight'>
          <div className='info'>      
            <p>
              <FaInfoCircle className='icon'/>
              Vos filtres de recherche sont enregistrés même après votre déconnexion.
              <button className='btn-neutral'>
                Enregistrer les filtres
              </button>
            </p>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    );
  }
}