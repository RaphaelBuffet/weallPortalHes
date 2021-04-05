import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import '../../../../styles/profil.css';
import { data } from './data'
var formation = [];
export default class Formation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formation: data.formation
        };
        // changement des input
        this.handleDateDebut = this.handleDateDebut.bind(this);
        this.handleDateFin = this.handleDateFin.bind(this);
        this.handleCursus = this.handleCursus.bind(this);
        this.handleInstitut = this.handleInstitut.bind(this);
        this.handleDegreEtude = this.handleDegreEtude.bind(this);
        this.handleDiplome = this.handleDiplome.bind(this);
        // gestion des actions des bouttons
        this.handleEnregistrer = this.handleEnregistrer.bind(this);
        this.addFormation = this.addFormation.bind(this);
    }
    handleDateDebut(index, value) {
        let newValue = this.state.formation
        newValue[index].debut = value.target.value
        this.setState({ formation: newValue })
    }
    handleDateFin(index, value) {
        let newValue = this.state.formation
        newValue[index].fin = value.target.value
        this.setState({ formation: newValue })
    }
    handleCursus(index, value) {
        let newValue = this.state.formation
        newValue[index].cursus = value.target.value
        this.setState({ formation: newValue })
    }
    handleInstitut(index, value) {
        let newValue = this.state.formation
        newValue[index].institut = value.target.value
        this.setState({ formation: newValue })
    }
    handleDegreEtude(index, value) {
        let newValue = this.state.formation
        newValue[index].degre = value.target.value
        this.setState({ formation: newValue })
    }
    handleDiplome(index, value) {
        let newValue = this.state.formation
        newValue[index].diplome = value.target.value
        this.setState({ formation: newValue })
    }
    addFormation() {
        let newformation = this.state.formation
        newformation.push({
            debut: '2021-01-01',
            fin: '2021-01-01',
            cursus: 0,
            institut: 0,
            degre: 0,
            diplome: ''
        })
        this.setState({ formation: newformation });
    }
    removeFormation(index) {
        if(this.state.formation.length>1){
            let newformation = this.state.formation
            newformation.splice(index, 1)
            this.setState({ formation: newformation });
        }
        else{
            alert("Vous ne pouvez pas supprimer cette formation car vous devez renseigner au minimum votre dernière formation suivis")
        }
        
    }
    handleEnregistrer() {
        alert('La formation est soumis');
    }
    render() {
        formation = []
        for (let i = 0; i < this.state.formation.length; i++) {
            formation.push(
                <div key={i}>
                    <AccordionSecondary title={this.state.formation[i].diplome} className='accordion-secondary'>
                        <div className='form'>
                            <div className='line-half'>
                                <div className='column'>
                                    <p className='intitulé'>Date de début</p>
                                    <input type="date" value={this.state.formation[i].debut} onChange={(value) => this.handleDateDebut(i, value)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Date de fin</p>
                                    <input type="date" value={this.state.formation[i].fin} onChange={(value) => this.handleDateFin(i, value)} className='input' />
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Cursus</p>
                                    <select value={this.state.formation[i].cursus} onChange={(value) => this.handleCursus(i, value)} className='input'>
                                        <option value="0">Universiatire</option>
                                        <option value="1">Haute école spécialisée</option>
                                        <option value="2">Autre (Par exemple étude a l'étranger)</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Institut</p>
                                    <select value={this.state.formation[i].institut} onChange={(value) => this.handleInstitut(i, value)} className='input'>
                                        <option value="0">Informatique de gestion</option>
                                        <option value="1">Tourisme</option>
                                        <option value="2">Economie et Service</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Degré d'étude</p>
                                    <select value={this.state.formation[i].degre} onChange={(value) => this.handleDegreEtude(i, value)} className='input'>
                                        <option value="0">Bachelor</option>
                                        <option value="1">Master</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Nom du diplôme</p>
                                    <input type="text" value={this.state.formation[i].diplome} onChange={(value) => this.handleDiplome(i, value)} className='input' />
                                </div>
                            </div>
                            <div className='flex-div'>
                                <button className='btn-supprimer' onClick={()=>this.removeFormation(i)}> Supprimer cette formation</button>
                                <button className='btn-enregistrer' onClick={this.handleEnregistrer}> Enregistrer cette formation</button>
                            </div>
                        </div>
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