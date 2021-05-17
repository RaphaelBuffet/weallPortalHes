import React from 'react'
import '../../../../styles/profil.scss';
import download from '../../../../image/profil.jpg'
import { data } from './data'
import { FaFileExport } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import Moment from 'moment';

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
      description: data.descritpion,
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
  componentDidMount(){
    let profil = JSON.parse(localStorage.getItem("postulant"))
    this.setState({
      nom:profil.nom,
      prenom: profil.prenom,
      naissance: profil.naissance,
      sexe: profil.sexe,
      adresse: profil.adresse,
      adresseSuplement: profil.adresse_suplement,
      descritpion: profil.description,
      npa: profil.npa,
      localité: profil.localité,
      telephone: profil.telephone
    })
  console.log(profil.naissance)
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
    this.setState({ description: event.target.value });
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
    alert('Le nom a été soumis : ' + this.state.nom + " " + this.state.prenom);
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
            <p className='intituleProfil'>Date de naissance</p>
            <input type="date" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
          </div>
          <div className='column'>
            <p className='intituleProfil'>Sexe</p>
            <select value={this.state.sexe} onChange={this.handleSexe} className='input'>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>

        <div className='line'>
          <div className='column'>
            <p className='intituleProfil'>Description</p>
            <textarea value={this.state.descritpion} onChange={this.handleDescription} className='inputthick' />
          </div>
          <div className='column'>
            <p className='intituleProfil'>Photo de profil</p>
            <table className="downloadZone">
              <thead>
                <tr>
                  <th>
                    <img src={download} alt="Logo" className='img-square' />
                  </th>
                  <th>
                    <button className='btn-formAdd' title="Ajouter votre logo">
                      <FaFileExport />
                    </button>
                  </th>
                  <th>
                    <p>
                      Format d'images: JPG, JPEG et PNG.
                    </p>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div>
          <p className='intituleProfil'>Adresse</p>
          <div className='line-double'>
            <div className='column'>
              <input type="text" value={this.state.adresse} onChange={this.handleAdresse} className='input' placeholder='Rue et numéro' />
              <div className='column'>
                <input type="text" value={this.state.npa} onChange={this.handleNpa} className='inputmini' placeholder='Code postal' />
                <select value={this.state.localité} onChange={this.handleLocalite} className='inputmini'>
                  <option value="0">Sion</option>
                  <option value="1">Sierre</option>
                  <option value="2">Autre</option>
                </select>
              </div>
            </div>
            <div className='column'>
              <textarea type="text" value={this.state.adresseSuplement} onChange={this.handleAdresseSuplement} className='inputthick' placeholder='Informations complémentaires (Exemple: étage)' />
            </div>
          </div>
        </div>

        <div className='line-double'>
          <div className='column'>
            <p className='intituleProfil'>Numéro de téléphone</p>
            <input type="text" value={this.state.telephone} onChange={this.handleTelephone} className='input' />
          </div>
        </div>


        <div className="line">
          <div className="column">
            <table class="table-medium">
              <thead>
                <tr>
                  <th rowspan="2">
                    <FaInfoCircle className='icon' />
                  </th>
                  <th>
                    <p className="info-bold">Vos informations personnelles restent anonymes pour garantir un engagement éthique.</p>
                  </th>
                </tr>
                <tr>
                  <td>
                    <p className="info">
                    Les informations personnelles fournies sont confidentielles. Elle ne peuvent être transmises que selon la bonne volonté du postulant.
                    </p>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div className="column">
            <div className="btn-divLeft">
            <button type="submit" value="enregistrer les informations" className='btn-neutral'>
            Enregistrer les informations
          </button>
            </div>
          </div>

        </div>

      </form>
    );
  }
}