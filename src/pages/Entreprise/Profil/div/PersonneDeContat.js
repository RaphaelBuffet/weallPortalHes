import React from 'react'
import '../../../../styles/profil.scss'
import {data} from './data'

export default class InfoPersonelle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nom: data.contact.nom,
          prenom: data.contact.prenom,
          poste: data.contact.poste,
          telephone: data.contact.telephone
        };
        // changement des input
        this.handleNom = this.handleNom.bind(this);
        this.handlePrenom = this.handlePrenom.bind(this);
        this.handlePoste = this.handlePoste.bind(this);
        this.handleTelephone = this.handleTelephone.bind(this);
        // gestion des actions des bouttons
        this.handleImage = this.handleImage.bind(this);
        this.handleEnregistrer = this.handleEnregistrer.bind(this);
      }
      componentDidMount() {
        let profil = JSON.parse(localStorage.getItem("responsable"))
        console.log(profil)
        this.setState({ 
          nom: profil.nom,
          prenom: profil.prenom,
          poste: profil.poste,
          telephone: profil.telephone
         });
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
                <p className='intituleProfil'>Nom</p>
                <input type="text" value={this.state.prenom} onChange={this.handlePrenom} className='input' />
              </div>
              <div className='column'>
                <p className='intituleProfil'>Prénom</p>
                <input type="text" value={this.state.nom} onChange={this.handleNom} className='input' />
              </div>
            </div>
            <div className='line'>
            <div className='column'>
                <p className='intituleProfil'>Poste occupée</p>
                <input type="text" value={this.state.poste} onChange={this.handlePoste} className='input' />
                </div>
              <div className='column'>
                <p className='intituleProfil'>Numéro de téléphone professionel</p>
                <input type="text" value={this.state.telephone} onChange={this.handleTelephone} className='input'/>
            </div>
            </div>
            <div className="finalButtonZone">
              <button type="submit" value="enregistrer les informations" className='btn-neutral'>
                  Enregistrer les informations
              </button>
            </div>
          </form>
        );
      }
    }