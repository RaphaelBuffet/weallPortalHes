import React from 'react'
import {AccordionSecondary} from '../../../../components/Accordion/Accordion'
import './form.css'
var formation = [];
export default class Formation extends React.Component {
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
        formation = []
        for (let i = 0; i < this.state.length; i++) {
            formation.push(
                <div key={i}>
                    <AccordionSecondary title={"Formations "+(i+1)} className='accordion-secondary'>
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
                                    <p className='intitulé'>Cursus</p>
                                    <select value={this.state.sexe} onChange={this.handleSexe} className='input'>
                                        <option value="0">Universiatire</option>
                                        <option value="1">Haute école spécialisée</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Institut</p>
                                    <select value={this.state.sexe} onChange={this.handleSexe} className='input'>
                                        <option value="0">Informatique de gestion</option>
                                        <option value="1">Tourisme</option>
                                        <option value="2">Economie et Service</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Degré d'étude</p>
                                    <select value={this.state.sexe} onChange={this.handleSexe} className='input'>
                                        <option value="0">Universiatire</option>
                                        <option value="1">Haute école spécialisée</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Nom du diplôme</p>
                                    <select value={this.state.sexe} onChange={this.handleSexe} className='input'>
                                        <option value="0">Informatique de gestion</option>
                                        <option value="1">Tourisme</option>
                                        <option value="2">Economie et Service</option>
                                    </select>
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
                {formation}
                <div>
                    <button className='btn-full' onClick={this.addFormation}>ajouter une formation</button>
                </div>
            </div>
        );
    }
}