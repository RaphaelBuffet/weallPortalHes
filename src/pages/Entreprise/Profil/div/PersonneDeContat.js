import React from 'react'
import './form.css'
import {data} from './data'

export default class InfoPersonelle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nom: data.contact.nom,
          prenom: data.contact.prenom,
          poste: data.contact.poste,
          adresse: data.contact.adresse,
          adresseSuplement: data.contact.adresseSuplement,
          descritpion: data.descritpion,
          npa: data.contact.npa,
          localité: data.contact.localité,
          telephone: data.contact.telephone
        };
        // changement des input
        this.handleNom = this.handleNom.bind(this);
        this.handlePrenom = this.handlePrenom.bind(this);
        this.handlePoste = this.handlePoste.bind(this);
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
      handlePoste(event) {
        this.setState({ poste: event.target.value });
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
                <p className='intitulé'>Poste occupée</p>
                <input type="text" value={this.state.poste} onChange={this.handlePoste} className='input' />
                </div>
              <div className='column'>
                <p className='intitulé'>Numéro de téléphone professionelle</p>
                <input type="text" value={this.state.telephone} onChange={this.handleTelephone} className='input'/>
            </div>
            </div>
            <input type="submit" value="
              enregistrer les informations" className='btn-enregistrer'/>
          </form>
        );
      }
    }