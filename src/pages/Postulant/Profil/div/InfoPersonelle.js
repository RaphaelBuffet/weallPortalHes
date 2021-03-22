import React from 'react'
import './form.css'
import download from '../../../../image/profil.jpg'
import {data} from './data'
export default class InfoPersonelle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: data.nom,
      prenom: data.prenom,
      naissance: data.naissance,
      sexe: data.sexe,
      adresse: data.adresse,
      adresseSuplement: data.adresseSuplement,
      descritpion: data.descritpion,
      npa: data.npa,
      localité: data.localité,
      telephone: data.telephone
    };
    // changement des input
    this.handleNom = this.handleNom.bind(this);
    this.handlePrenom = this.handlePrenom.bind(this);
    this.handleNaissance = this.handleNaissance.bind(this);
    this.handleSexe = this.handleSexe.bind(this);
    this.handleAdresse = this.handleAdresse.bind(this);
    this.handleAdresseSuplement = this.handleAdresseSuplement.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleNpa = this.handleNpa.bind(this);
    this.handleLocalite = this.handleLocalite.bind(this);
    this.handleTelephone = this.handleTelephone.bind(this);
    // gestion des actions des bouttons
    this.handleImage = this.handleImage.bind(this);
    this.handleEnregistrer = this.handleEnregistrer.bind(this);
  }

  handleNom(event) {
    this.setState({ nom: event.target.value });
  }
  handlePrenom(event) {
    this.setState({ prenom: event.target.value });
  }
  handleNaissance(event) {
    this.setState({ naissance: event.target.value });
  }
  handleSexe(event) {
    this.setState({ sexe: event.target.value });
  }
  handleAdresse(event) {
    this.setState({ adresse: event.target.value });
  }
  handleAdresseSuplement(event) {
    this.setState({ adresseSuplement: event.target.value });
  }
  handleDescription(event) {
    this.setState({ descritpion: event.target.value });
  }
  handleNpa(event) {
    this.setState({ npa: event.target.value });
  }
  handleLocalite(event) {
    this.setState({ localité: event.target.value });
  }
  handleTelephone(event) {
    this.setState({ telephone: event.target.value });
  }
  handleImage(event) {
    alert('appuis sur image ');
    event.preventDefault();
  }
  handleEnregistrer(event) {
    alert('Le nom a été soumis : ' + this.state.nom + " "+this.state.prenom);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleEnregistrer} className='form'>
        <div className='line'>
          <div className='column'>
            <p className='intitulé'>Nom</p>
            <input type="text" value={this.state.prenom} onChange={this.handlePrenom} className='input' />
          </div>
          <div className='column'>
            <p className='intitulé'>Prénom</p>
            <input type="text" value={this.state.nom} onChange={this.handleNom} className='input' />
          </div>
        </div>

        <div className='line'>
          <div className='column'>
            <p className='intitulé'>Date de naissance</p>
            <input type="date" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
          </div>
          <div className='column'>
            <p className='intitulé'>Sexe</p>
            <select value={this.state.sexe} onChange={this.handleSexe} className='input'>
            <option value="0">Homme</option>
            <option value="1">Femme</option>
            <option value="2">Autre</option>
          </select>
          </div>
        </div>
        
        <div className='line'>
          <div className='column'>
            <p className='intitulé'>Description</p>
            <textarea value={this.state.descritpion} onChange={this.handleDescription} className='inputlong'/>
          </div>
          <div className='column'>
          <img src={download} alt="Logo" className='img'/>
            <button className='input'>Télécharger une image</button>
          </div>
        </div>

        <div className='line-simple'>
            <p className='intitulé'>Adresse</p>
            <input type="text" value={this.state.adresse} onChange={this.handleAdresse} className='inputmonoline'/>
            <input type="text" value={this.state.adresseSuplement} onChange={this.handleAdresseSuplement} className='inputmonoline'/>
        </div>

        <div className='line-double'>
          <div className='column'>
            <input type="text" value={this.state.npa} onChange={this.handleNpa} className='input' placeholder='code postal' />
          </div>
          <div className='column'>
          <select value={this.state.localité} onChange={this.handleLocalite} className='input'>
            <option value="0">Sion</option>
            <option value="1">Sierre</option>
            <option value="2">Autre</option>
          </select>
          </div>
        </div>

        <div className='line-simple'>
            <p className='intitulé'>Numéro de téléphone</p>
            <input type="text" value={this.state.telephone} onChange={this.handleTelephone} className='inputmonoline'/>
        </div>

        <input type="submit" value="
          enregistrer les informations" className='btn-enregistrer'/>
      </form>
    );
  }
}