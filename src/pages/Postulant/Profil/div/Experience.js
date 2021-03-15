import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import './form.css'
var experience = [];
export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 2
        };
        this.addFormation = this.addFormation.bind(this);
    }
    addFormation() {
        this.setState({ length: this.state.length + 1 });
    }
    render() {
        experience = []
        for (let i = 0; i < this.state.length; i++) {
            experience.push(
                <div key={i}>
                    <AccordionSecondary title={"Expérience professionelle " + (i + 1)} className='accordion-secondary'>
                        <form onSubmit={this.handleEnregistrer} className='form'>
                            <div className='line-half'>
                                <div className='column'>
                                    <p className='intitulé'>Date de début</p>
                                    <input type="date" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Date de fin</p>
                                    <input type="date" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Entreprise</p>
                                    <input type="text" value={this.state.prenom} onChange={this.handlePrenom} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Secteur d'activité</p>
                                    <select value={this.state.sexe} onChange={this.handleSexe} className='input'>
                                        <option value="0">Informatique de gestion</option>
                                        <option value="1">Tourisme</option>
                                        <option value="2">Economie et Service</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Poste occupé</p>
                                    <input type="text" value={this.state.prenom} onChange={this.handlePrenom} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>localité</p>
                                    <select value={this.state.sexe} onChange={this.handleSexe} className='input'>
                                        <option value="0">Informatique de gestion</option>
                                        <option value="1">Tourisme</option>
                                        <option value="2">Economie et Service</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line-simple'>
                                <div className='column'>
                                    <p className='intitulé'>Tâches principales</p>
                                    <textarea value={this.state.descritpion} onChange={this.handleDescription} className='inputlong' />
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
                    <button className='btn-full' onClick={this.addFormation}>ajouter une experience</button>
                </div>
            </div>
        );
    }
}