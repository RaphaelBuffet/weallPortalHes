import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import './form.css'
import {data} from './data'
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
    this.handleDescription = this.handleDescription.bind(this);
    // gestion des actions des bouttons
    this.handleEnregistrer = this.handleEnregistrer.bind(this);
    this.addExperience = this.addExperience.bind(this);
    }

    handleDateDebut(index,value) {
        let newValue= this.state.experience
        newValue[index].debut=value.target.value
        this.setState ({experience:newValue})
      }
      handleDateFin(index,value) {
        let newValue= this.state.experience
        newValue[index].fin=value.target.value
        this.setState ({experience:newValue})
      }
      handleEntreprise(index,value) {
        let newValue= this.state.experience
        newValue[index].entreprise=value.target.value
        this.setState ({experience:newValue})
      }
      handleSecteurs(index,value) {
        let newValue= this.state.experience
        newValue[index].secteurs=value.target.value
        this.setState ({experience:newValue})
      }
      handlePoste(index,value) {
        let newValue= this.state.experience
        newValue[index].poste=value.target.value
        this.setState ({experience:newValue})
      }
      handleLocalite(index,value) {
        let newValue= this.state.experience
        newValue[index].localite=value.target.value
        this.setState ({experience:newValue})
      }
      handleDescription(index,value) {
        let newValue= this.state.experience
        newValue[index].description=value.target.value
        this.setState ({experience:newValue})
      }
    addExperience() {
        let newexperience=this.state.experience
        newexperience.push({
            debut:'2021-01-01',
            fin:'2021-01-01',
            entreprise: '',
            secteurs: 0,
            Poste: '',
            localite: 0,
            description:""
        })
        this.setState({ experience: newexperience });
    }
    handleEnregistrer(){
        alert('experience est soumis');
    }
    render() {
        experience = []
        for (let i = 0; i < this.state.experience.length; i++) {
            experience.push(
                <div key={i}>
                    <AccordionSecondary title={this.state.experience[i].poste+" chez "+this.state.experience[i].entreprise} className='accordion-secondary'>
                        <form onSubmit={this.handleEnregistrer} className='form'>
                            <div className='line-half'>
                                <div className='column'>
                                    <p className='intitulé'>Date de début</p>
                                    <input type="date" value={this.state.experience[i].debut} onChange={(value)=>this.handleDateDebut(i,value)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Date de fin</p>
                                    <input type="date" value={this.state.experience[i].fin} onChange={(value)=>this.handleDateFin(i,value)} className='input' />
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Entreprise</p>
                                    <input type="text" value={this.state.experience[i].entreprise} onChange={(value)=>this.handleEntreprise(i,value)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Secteur d'activité</p>
                                    <select value={this.state.experience[i].secteurs} onChange={(value)=>this.handleSecteurs(i,value)} className='input'>
                                        <option value="0">Informatique de gestion</option>
                                        <option value="1">Tourisme</option>
                                        <option value="2">Economie et Service</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Poste occupé</p>
                                    <input type="text" value={this.state.experience[i].poste} onChange={(value)=>this.handlePoste(i,value)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>localité</p>
                                    <select value={this.state.experience[i].localite} onChange={(value)=>this.handleLocalite(i,value)} className='input'>
                                        <option value="0">Sion</option>
                                        <option value="1">Sierre</option>
                                        <option value="2">Martigny</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line-simple'>
                                <div className='column'>
                                    <p className='intitulé'>Tâches principales</p>
                                    <textarea value={this.state.experience[i].description} onChange={(value)=>this.handleDescription(i,value)} className='inputlong' />
                                </div>
                            </div>
                            <input type="submit" value="enregistrer les informations" className='btn-enregistrer' />
                        </form>
                    </AccordionSecondary>
                </div>
            )
        }
        return (
            <div className='accordion'>
                {experience}
                <div>
                    <button className='btn-full' onClick={this.addExperience}>ajouter une experience</button>
                </div>
            </div>
        );
    }
}