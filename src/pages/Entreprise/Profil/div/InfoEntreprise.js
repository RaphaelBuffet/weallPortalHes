import React from 'react'
import '../../../../styles/profil.scss'
import { data } from './data'
import download from '../../../../image/logo.png'
import { FaPlus } from 'react-icons/fa';
import { FaFileExport } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';

var benefice = []
export default class InfoEntreprise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: data.entreprise,
      adresse: data.contact.adresse,
      adresseSuplement: data.contact.adresseSuplement,
      descritpion: data.descritpion,
      npa: data.contact.npa,
      localite: data.contact.localite,
      type: data.type,
      secteur: data.secteur,
      ethique: data.ethique,
      label: data.label,
      benefice: data.benefice,
    };
    // changement des input
    this.handleEntreprise = this.handleEntreprise.bind(this);
    this.handleLocalite = this.handleLocalite.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleSecteur = this.handleSecteur.bind(this);
    this.handleAdresse = this.handleAdresse.bind(this);
    this.handleAdresseSuplement = this.handleAdresseSuplement.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleNpa = this.handleNpa.bind(this);
    this.handleLocalite = this.handleLocalite.bind(this);
    this.handleEthique = this.handleEthique.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
    this.handleBenefice = this.handleBenefice.bind(this);
    // gestion des actions des bouttons
    this.handleAddBenef = this.handleAddBenef.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleEnregistrer = this.handleEnregistrer.bind(this);
  }
  componentDidMount() {
    let profil = JSON.parse(localStorage.getItem("entreprise"))
    console.log(profil)
    this.setState({ 
      nom: profil.nom,
      adresse: profil.adresse,
      adresseSuplement: profil.adresseSuplement,
      descritpion: profil.description,
      npa: profil.npa,
      localite: profil.localite,
      type: profil.type,
      secteur: profil.secteur,
      ethique: profil.ethique,
      label: profil.label,
      benefice: profil.benefice
     });
  }

  handleEntreprise(event) {
    this.setState({ entreprise: event.target.value });
  }
  handleType(event) {
    this.setState({ type: event.target.value });
  }
  handleSecteur(event) {
    this.setState({ secteur: event.target.value });
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
  handleEthique(event) {
    this.setState({ ethique: event.target.value });
  }
  handleLabel(event) {
    this.setState({ label: event.target.value });
  }
  handleBenefice(index, value) {
    let benef = this.state.benefice
    benef[index] = value.target.value
    this.setState({ benefice: benef })
  }
  handleAddBenef() {
    let newbenef = this.state.benefice
    newbenef.push("")
    this.setState({ benefice: newbenef })
  }
  handleImage(event) {
    alert('appuis sur image ');
    event.preventDefault();
  }
  handleEnregistrer(event) {
    alert('Le nom a été soumis : ' + this.state.nom);
    event.preventDefault();
  }
  createbenef() {
    benefice = []
    console.log(this.state.benefice)
    for (let i = 0; i < this.state.benefice.length; i++) {
      console.log(this.state.benefice[i])
      benefice.push(
        <div key={i}>
          <input type="text" value={this.state.benefice[i]} onChange={(value) => this.handleBenefice(i, value)} className='input' />
        </div>
      )
    }
  }

  render() {
    this.createbenef()
    return (
      <form onSubmit={this.handleEnregistrer} className='form'>
        <div className='line'>
          <div className='column'>
            <p className='intituleProfil'>Nom de l'entreprise</p>
            <input type="text" value={this.state.nom} onChange={this.handleEntreprise} className='input' />
          </div>
          <div className='column'>
            <p className='intituleProfil'>Localité</p>
            <select value={this.state.localite} onChange={this.handleLocalite} className='input'>
              <option value="0">Sion</option>
              <option value="1">Sierre</option>
              <option value="2">Autre</option>
            </select>
          </div>
        </div>
        <div className='line'>
          <div className='column'>
            <p className='intituleProfil'>Type d'entreprise</p>
            <select value={this.state.type} onChange={this.handleType} className='input'>
              <option value="0">PME</option>
              <option value="1">Start-up</option>
              <option value="2">Multinational</option>
            </select>
          </div>
          <div className='column'>
            <p className='intituleProfil'>Secteur d'activité</p>
            <select value={this.state.secteur} onChange={this.handleSecteur} className='input'>
              <option value="0">Finance</option>
              <option value="1">Recrutement</option>
              <option value="2">Autre</option>
            </select>
          </div>
        </div>

        <div className='line-simple'>
          <div className='column'>
            <p className='intituleProfil'>Mission de votre entreprise</p>
            <textarea value={this.state.descritpion} onChange={this.handleDescription} className='inputlongmonoline' />
          </div>
        </div>

        <div className='line-simple'>
          <div className='column'>
            <p className='intituleProfil'>Engagement environementaux</p>
            <textarea value={this.state.descritpion} onChange={this.handleDescription} className='inputlongmonoline' />
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

        <div className='line'>
          <div className='column'>
            <p className='intituleProfil'>Label</p>
            <select value={this.state.label} onChange={this.handleLabel} className='input'>
              <option value="0">Iso 98000</option>
              <option value="1">Iso 90871</option>
              <option value="2">ISo 90000</option>
            </select>
          </div>
        </div>
        <div className='line'>
          <div className='column'>
            <p className='intituleProfil'>Benefice de votre entreprise</p>
            <table className="inputColumnZone">
              <thead>
                <tr>
                  <th>
                    {benefice}
                  </th>
                  <th>
                    <button onClick={this.handleAddBenef} className='btn-formAdd'>
                      <FaPlus />
                    </button>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div className='column'>
            <p className='intituleProfil'>Logo</p>
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
                    <p >
                      Format d'images:
                    </p>
                    <p>
                      JPG, JPEG et PNG.
                    </p>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="btn-divLeft">
            <button type="submit" value="enregistrer les informations" className='btn-neutral' >
              Enregistrer les informations
            </button>
        </div>
      </form>
    );
  }
}