import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import '../../../styles/filtre.scss';
import '../../../styles/button.scss';
import Select from 'react-select';
import { FaInfoCircle } from 'react-icons/fa';
import { FaTrash} from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios'
import config from '../../../config'

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
      ethique:data.ethique,
      chooseSecteurs:'',
      chooseCanton:'',
      chooseTaux:'',
      chooseContrat:'',
      chooseDisponibilite:'',
      chooseSalaire:'',
      chooseType:'',
      chooseEthique:''
    }
     // changement des input
     this.handleTaux = this.handleTaux.bind(this);
     this.handleSecteur = this.handleSecteur.bind(this);
     this.handleCanton = this.handleCanton.bind(this);
     this.handleContrat = this.handleContrat.bind(this);
     this.handleDispo = this.handleDispo.bind(this);
     this.handleSalaire = this.handleSalaire.bind(this);
     this.handleType = this.handleType.bind(this);
     this.handleEthique = this.handleEthique.bind(this);
  }
  handleTaux(event) {
    this.setState({ chooseTaux: event });
  }
  handleCanton(event) {
    this.setState({ chooseCanton: event });
  }
  handleContrat(event) {
    this.setState({ chooseContrat: event });
  }
  handleDispo(event) {
    this.setState({ chooseDisponibilite: event });
  }
  handleSalaire(event) {
    this.setState({ chooseSalaire: event });
  }
  handleType(event) {
    this.setState({ chooseType: event });
  }
  handleEthique(event) {
    this.setState({ chooseEthique: event });
  }
  handleSecteur(event) {
    this.setState({ chooseSecteurs: event });
  }
  createFiltre(data,type){
    console.log(type)
    let result=[]
    for(let i=0;i<data.length;i++){
      result.push(type[data[i].id])
    }
    return result
  }
componentDidMount(){
  console.log("j'aime les gens")
  let profil = JSON.parse(localStorage.getItem("postulant"))
  let user = JSON.parse(localStorage.getItem("user"))
  let userSecteur,userCanton,userContrat,userSalaire,userType,userEthique
  console.log(profil.filtre)
  console.log(user.token)
  axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "filtre/postulant/" + profil.filtre, headers: { 'Authorization': 'Bearer ' + user.token } })
  .then((response) => {
    console.log(response.data)
    response=response.data
    console.log(response.secteur[0])
    userSecteur=this.createFiltre(response.secteur,this.state.secteurs)
    userCanton=this.createFiltre(response.canton,this.state.canton)
    userContrat=this.createFiltre(response.contrat,this.state.contrat)
    userSalaire=this.createFiltre(response.salaire,this.state.salaire)
    userType=this.createFiltre(response.type,this.state.type)
    userEthique=this.createFiltre(response.ethique,this.state.ethique)
    console.log(userSecteur)
    console.log(userCanton)
    console.log(userContrat)
    console.log(userSalaire)
    console.log(userType)
    console.log(userEthique)
    this.setState({
      chooseSecteurs:userSecteur,
      chooseCanton:response.canton,
      chooseTaux:this.state.taux[response.taux],
      chooseContrat:response.contrat,
      chooseDisponibilite:this.state.disponibilite[response.dispo],
      chooseSalaire:response.salaire,
      chooseType:response.type,
      chooseEthique:response.ethique
    })
    console.log(typeof(this.state.chooseSecteurs))
    console.log(this.state.chooseSecteurs)
    this.forceUpdate();
  })
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
                isMulti
                name="colors"
                value={this.state.chooseSecteurs}
                onChange={this.handleSecteur}
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
                isMulti
                name="colors"
                value={this.state.chooseCanton}
                onChange={this.handleCanton}
                options={this.state.canton}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder='Choisir'
              />
            </div>
          </div>
          <div className='display'>
            <div className='select'>
            <p className="intituleProfil">Taux d'activité maximum</p>
              <Select
                theme={theme => ({
                  ...theme,
                  borderRadius: 0
                })}
                closeMenuOnSelect={true}
                name="colors"
                value={this.state.chooseTaux}
                onChange={this.handleTaux}
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
                isMulti
                name="colors"
                value={this.state.chooseContrat}
                onChange={this.handleContrat}
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
                name="colors"
                value={this.state.chooseDisponibilite}
                onChange={this.handleDispo}
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
                isMulti
                name="colors"
                value={this.state.chooseSalaire}
                onChange={this.handleSalaire}
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
                isMulti
                name="colors"
                value={this.state.chooseType}
                onChange={this.handleType}
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
                isMulti
                name="colors"
                value={this.state.chooseEthique}
                onChange={this.handleEthique}
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
              <button className='btn-neutral' onClick={()=>this.forceUpdate()}>
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