import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import './form.css'
var langue = [];
var xpLangue = [];
export default class Langue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 2,
            havexp: false
        };
        this.addcompetence = this.addcompetence.bind(this);
        this.handlehavexp = this.handlehavexp.bind(this);
    }
    addcompetence() {
        this.setState({ length: this.state.length + 1 });
    }
    handlehavexp() {
        this.setState({ havexp: !this.state.havexp })
    }
    createLanguageExperience() {
        xpLangue = [];
        for (let i = 0; i < this.state.length; i++) {
            console.log("coucou")
            xpLangue.push(
                <div>
                    <div className='line'>
                        <div className='column'>
                            <p className='intitulé'>Pays</p>
                            <input type="text" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
                        </div>
                        <div className='column'>
                            <p className='intitulé'>Type d'expérience lingusitique</p>
                            <select value={this.state.localité} onChange={this.handleLocalite} className='input'>
                                <option value="0">Séjours linguisitique</option>
                                <option value="1">Expérience professionelle</option>
                            </select>
                        </div>
                    </div>
                    <div className='line'>
                        <div className='column'>
                            <p className='intitulé'>date de début</p>
                            <input type="date" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
                        </div>
                        <div className='column'>
                            <p className='intitulé'>date de fin</p>
                            <input type="date" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
                        </div>
                    </div>
                </div>
            )
        }
    }
    createLangueDisplay() {
        langue = []
        this.createLanguageExperience();
        console.log(xpLangue)
        for (let i = 0; i < this.state.length; i++) {
            langue.push(
                <div key={i}>
                    <AccordionSecondary title={"langue " + (i + 1)} className='accordion-secondary'>
                        <form onSubmit={this.handleEnregistrer} className='form'>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Langue</p>
                                    <select value={this.state.localité} onChange={this.handleLocalite} className='input'>
                                        <option value="0">Français</option>
                                        <option value="1">Allemand</option>
                                        <option value="2">Autre</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Niveau</p>
                                    <select value={this.state.localité} onChange={this.handleLocalite} className='input'>
                                        <option value="0">A1</option>
                                        <option value="1">A2</option>
                                        <option value="2">B1</option>
                                        <option value="2">B2</option>
                                        <option value="2">C1</option>
                                        <option value="2">C2</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Certifiact</p>
                                    <input type="text" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>date d'obtention</p>
                                    <input type="date" value={this.state.naissance} onChange={this.handleNaissance} className='input' />
                                </div>
                            </div>
                            <div className='line-simple'>
                                <label className='intitulé'> Expérience/Séjours lingusitique</label>
                                <input type="checkbox" onChange={this.handlehavexp} value={this.handlehavexp} className='checkbox' />
                            </div>
                            {this.state.havexp
                                ? xpLangue
                                : null}
                            <input type="submit" value="enregistrer les informations" className='btn-enregistrer' />
                        </form>
                    </AccordionSecondary>
                </div>
            )
        }
    }
    render() {
        this.createLangueDisplay();
        return (
            <div className='accordion'>
                {langue}
                <div>
                    <button className='btn-full' onClick={this.addcompetence}>ajouter une langue</button>
                </div>
            </div>
        );
    }
}