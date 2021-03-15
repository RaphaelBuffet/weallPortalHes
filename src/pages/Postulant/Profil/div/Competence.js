import React from 'react'
import {AccordionSecondary} from '../../../../components/Accordion/Accordion'
import './form.css'
var competence = [];
export default class Competence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 2
        };
        this.addcompetence = this.addcompetence.bind(this);
    }
    addcompetence() {
        this.setState({ length: this.state.length + 1 });
    }
    render() {
        competence = []
        for (let i = 0; i < this.state.length; i++) {
            competence.push(
                <div key={i}>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Compétences</p>
                                    <select value={this.state.localité} onChange={this.handleLocalite} className='input'>
                                        <option value="0">Dormir</option>
                                        <option value="1">Manger</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Niveau de maîtrise</p>
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
                </div>
            )
        }
        return (
            <div className='accordion'>
                <div className='block'>
                    <h1>Compétence</h1>
                {competence}
                </div>
                
                <div>
                    <button className='btn-full' onClick={this.addcompetence}>ajouter une competence</button>
                </div>
                <div className='block'>
                    <h1>Softskill</h1>
                    <div className='line5'>
                        <button className='btn-full'>1</button>
                        <button className='btn-full'>2</button>
                        <button className='btn-full'>3</button>
                        <button className='btn-full'>4</button>
                        <button className='btn-full'>5</button>
                        <button className='btn-full'>6</button>
                        <button className='btn-full'>7</button>
                        <button className='btn-full'>8</button>
                        <button className='btn-full'>9</button>
                        <button className='btn-full'>10</button>

                    </div>
                </div>
            </div>
        );
    }
}