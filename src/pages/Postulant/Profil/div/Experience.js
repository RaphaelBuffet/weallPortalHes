import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import '../../../../styles/profil.scss';
import '../../../../styles/filtre.scss';
import { data } from './data'
import { FaSave } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
var experience = [];
export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: data.experience
        };
        // changement des input
        this.handleDateDebut = this.handleDateDebut.bind(this);
        this.handleDateFin = this.handleDateFin.bind(this);
        this.handleEntreprise = this.handleEntreprise.bind(this);
        this.handleSecteurs = this.handleSecteurs.bind(this);
        this.handlePoste = this.handlePoste.bind(this);
        this.handleLocalite = this.handleLocalite.bind(this);
        this.handlePays = this.handlePays.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleActuelle = this.handleActuelle.bind(this);
        // gestion des actions des bouttons
        this.handleEnregistrer = this.handleEnregistrer.bind(this);
        this.addExperience = this.addExperience.bind(this);
    }
    handleActuelle(index) {
        let newValue = this.state.experience
        newValue[index].actuelle = !this.state.experience[index].actuelle
        this.setState({ experience: newValue })
    }
    handleDateDebut(index, value) {
        let newValue = this.state.experience
        newValue[index].debut = value.target.value
        this.setState({ experience: newValue })
    }
    handleDateFin(index, value) {
        let newValue = this.state.experience
        newValue[index].fin = value.target.value
        this.setState({ experience: newValue })
    }
    handleEntreprise(index, value) {
        let newValue = this.state.experience
        newValue[index].entreprise = value.target.value
        this.setState({ experience: newValue })
    }
    handleSecteurs(index, value) {
        let newValue = this.state.experience
        newValue[index].secteurs = value.target.value
        this.setState({ experience: newValue })
    }
    handlePoste(index, value) {
        let newValue = this.state.experience
        newValue[index].poste = value.target.value
        this.setState({ experience: newValue })
    }
    handleLocalite(index, value) {
        let newValue = this.state.experience
        newValue[index].localite = value.target.value
        this.setState({ experience: newValue })
    }
    handlePays(index, value) {
        let newValue = this.state.experience
        newValue[index].pays = value.target.value
        this.setState({ experience: newValue })
    }
    handleDescription(index, value) {
        let newValue = this.state.experience
        newValue[index].description = value.target.value
        this.setState({ experience: newValue })
    }
    addExperience() {
        let newexperience = this.state.experience
        newexperience.push({
            debut: '2021-01-01',
            fin: '2021-01-01',
            entreprise: '',
            secteurs: 0,
            Poste: '',
            localite: 0,
            description: ""
        })
        this.setState({ experience: newexperience });
    }
    removeExperience(index) {
        let newexperience = this.state.experience
        newexperience.splice(index, 1)
        this.setState({ experience: newexperience });
    }
    handleEnregistrer() {
        alert('experience est soumis');
    }
    render() {
        experience = []
        for (let i = 0; i < this.state.experience.length; i++) {
            experience.push(
                <div key={i}>
                    <AccordionSecondary title={this.state.experience[i].poste + " chez " + this.state.experience[i].entreprise} className='accordion-secondary'>
                        <div className='form'>
                            <div className='line'>
                                <div className="column">
                                    <p className='intituleProfil'>Poste occupé</p>
                                    <input type="text" value={this.state.experience[i].poste} onChange={(value) => this.handlePoste(i, value)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intituleProfil'>Durée</p>
                                    <table class="dateZone" cellspacing="0">
                                        <thead>
                                            <tr>
                                            <td className="dateZoneA">
                                                    <input type="date" value={this.state.experience[i].debut} onChange={(value) => this.handleDateDebut(i, value)} className='inputDate' />
                                                </td>
                                                <td className="dateZoneA">à</td>
                                                <td className="dateZoneA">
                                                    {
                                                        this.state.experience[i].actuelle ?
                                                            <div className='column'>
                                                                <input type="date" value={this.state.experience[i].fin} onChange={(value) => this.handleDateFin(i, value)} className='inputDate' disabled='true' />
                                                            </div>
                                                            : <div className='column'>
                                                                <input type="date" value={this.state.experience[i].fin} onChange={(value) => this.handleDateFin(i, value)} className='inputDate' />
                                                            </div>
                                                    }
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                    <div className="checkboxZone">

                                        <table class="dateZone" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <label className='intitulé'> Poste actuel</label>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" checked={this.state.experience[i].actuelle} onChange={() => this.handleActuelle(i)} className='intitulé' />
                                                    </td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className='line'>
                                <div className='column'>
                                    <p className='intituleProfil'>Entreprise</p>
                                    <input type="text" value={this.state.experience[i].entreprise} onChange={(value) => this.handleEntreprise(i, value)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intituleProfil'>Secteur d'activité</p>
                                    <select value={this.state.experience[i].secteurs} onChange={(value) => this.handleSecteurs(i, value)} className='input'>
                                        <option value="0">Informatique de gestion</option>
                                        <option value="1">Tourisme</option>
                                        <option value="2">Economie et Service</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>

                                </div>
                                <div className='column'>
                                    <p className='intituleProfil'>Pays</p>
                                    <select value={this.state.experience[i].pays} onChange={(value) => this.handlePays(i, value)} className='input'>
                                        <option value="0">Suisse</option>
                                        <option value="1">France</option>
                                        <option value="2">Allemagne</option>
                                    </select>
                                </div>
                            </div>
                            {this.state.experience[i].pays === "0" ?
                                <div className='line-alone'>
                                    <div className='column'>
                                        <p className='intituleProfil'>Localité</p>
                                        <select value={this.state.experience[i].localite} onChange={(value) => this.handleLocalite(i, value)} className='input'>
                                            <option value="0">Sion</option>
                                            <option value="1">Sierre</option>
                                            <option value="2">Martigny</option>
                                        </select>
                                    </div>
                                </div> : null
                            }

                            <div className='line-simple'>
                                <div className='column'>
                                    <p className='intituleProfil'>Tâches principales</p>
                                    <textarea value={this.state.experience[i].description} onChange={(value) => this.handleDescription(i, value)} className='inputlongmonoline' />
                                </div>
                            </div>
                            <div className='flex-div'>

                                <div className="btn-div">
                                    <button className='btn-formAdd' onClick={this.handleEnregistrer}>
                                        <FaSave />
                                    </button>
                                    <button className='btn-formRemove' onClick={() => this.removeExperience(i)}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AccordionSecondary>
                </div>
            )
        }
        return (
            <div className='accordion'>
                {this.state.experience.length === 0
                    ? <p className='text-bold'>Vous n'avez pas renseigné d'expérience professionelle</p>
                    : experience}
                <div className="accordionBottom">
                    <div className="btn-divRight">
                        <table className="finalButtonZone-extern">
                            <thead>
                                <tr>
                                    <th>
                                        Ajouter une experience
                                </th>
                                    <th>
                                        <button className='btn-formAdd' onClick={this.addExperience}>
                                            <FaPlus />
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}