import React from 'react'
import '../../../../styles/profil.scss';
import '../../../../styles/button.scss';
import { FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { data } from './data'
var competence = [];
var softskillbtn = [];
export default class Competence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            competence: data.competence,
            softskillsize: data.softskill,
            softskill: [
                {
                    nom: 'Travaille en équipe',
                    clicked: false
                },
                {
                    nom: 'Autonomie',
                    clicked: true
                },
                {
                    nom: 'Esprit d initiative',
                    clicked: true
                },
                {
                    nom: 'Scrum Management',
                    clicked: false
                },
                {
                    nom: 'Marcher',
                    clicked: false
                },
                {
                    nom: 'Cuire des pates',
                    clicked: true
                },
                {
                    nom: 'Préparation de fajitas',
                    clicked: false
                },
                {
                    nom: 'Caressage de chat',
                    clicked: false
                },
                {
                    nom: 'Accuponcture',
                    clicked: false
                },
                {
                    nom: 'Brossage des dents',
                    clicked: false
                },
            ]
        };
        // changement des input
        this.handleNom = this.handleNom.bind(this);
        this.handleNiveau = this.handleNiveau.bind(this);
        this.handlesoftkillbtn = this.handlesoftkillbtn.bind(this);
        // gestion des actions des bouttons
        this.handleEnregistrer = this.handleEnregistrer.bind(this);
        this.addcompetence = this.addcompetence.bind(this);
    }
    handleEnregistrer() {
        alert('coucou')
    }
    addcompetence() {
        let newcompetence = this.state.competence
        newcompetence.push({
            nom: 0,
            niveau: 0
        })
        this.setState({ competence: newcompetence });
    }
    removeCompetence(index) {
        let newcompetence = this.state.competence
        newcompetence.splice(index, 1)
        this.setState({ competence: newcompetence });
    }
    handleNom(index, value) {
        let newvalue = this.state.competence
        newvalue[index].nom = value.target.value
        this.setState({ competence: newvalue })
    }
    handleNiveau(index, value) {
        let newvalue = this.state.competence
        newvalue[index].niveau = value.target.value
        this.setState({ competence: newvalue })
    }
    handlesoftkillbtn(index, state) {
        if (state) {
            if (this.state.softskillsize.length === 3) {
                alert("3 softskill deja choisi")
                return
            }
            let newState = this.state.softskill;
            newState[index].clicked = state
            this.setState({ softskill: newState })
            newState = this.state.softskillsize
            newState.push(index)
            this.setState({ softskillsize: newState })
            return
        }
        else {
            let newState = this.state.softskillsize;
            newState.splice(0, 1)
            this.setState({ softskillsize: newState })
            newState = this.state.softskill
            newState[index].clicked = state
            this.setState({ softskill: newState })
            return
        }
    }
    createCompetence() {
        competence = []
        for (let i = 0; i < this.state.competence.length; i++) {
            competence.push(
                <div key={i} className="select">
                    <div className="table-small">
                        <table class="tg">
                            <thead>
                                <tr>
                                    <th class="tg-nrix">
                                        <h2 className='intituleFiltre'>Compétence</h2>
                                    </th>
                                    <th class="tg-nrix">
                                        <select value={this.state.competence[i].nom} onChange={(value) => this.handleNom(i, value)} className='inputCompetence'>
                                            <option value="0">Développement Biztalk</option>
                                            <option value="1">Socket Management</option>
                                        </select>
                                    </th>
                                    <th class="tg-button" rowspan="2">
                                        <button className='btn-formRemove' onClick={() => this.removeCompetence(i)}>
                                            <FaTrash />
                                        </button>
                                    </th>
                                </tr>
                                <tr>
                                    <td class="tg-nrix">
                                        <h2 className='intituleFiltre'>Niveau</h2>
                                    </td>
                                    <td class="tg-nrix">
                                        <select value={this.state.competence[i].niveau} onChange={(value) => this.handleNiveau(i, value)} className='inputCompetence'>
                                            <option value="0">Débutant</option>
                                            <option value="1">Intermédiaire</option>
                                            <option value="2">Avancé</option>
                                            <option value="3">Expert</option>
                                        </select>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                </div>
            )
        }
    }
    createSoftkill() {
        softskillbtn = []
        for (let i = 0; i < this.state.softskill.length; i++) {
            softskillbtn.push(
                <div key={i} className='btn-container'>
                    {this.state.softskill[i].clicked
                        ? <button className='btn-click' onClick={() => { this.handlesoftkillbtn(i, false) }}>{this.state.softskill[i].nom}</button> :
                        <button className='btn-unclick' onClick={() => { this.handlesoftkillbtn(i, true) }}>{this.state.softskill[i].nom}</button>}
                </div>
            )
        }
    }
    render() {
        this.createCompetence()
        this.createSoftkill()
        return (
            <div className='form'>
                <div className='block'>
                    <p className="intituleProfil">Compétences techniques</p>
                    <div className="accordion">
                        <div className="subForm">
                            {this.state.competence.length === 0
                                ? <p className='text-bold'>Vous n'avez pas renseigner de compétence technique</p>
                                : competence
                            }
                            <div className="btn-divRight">
                                <table className="finalButtonZone-extern">
                                    <thead>
                                        <tr>
                                            <th>
                                                Ajouter une compétence technique
                                            </th>
                                            <th>
                                                <button className='btn-formAdd' onClick={this.addcompetence}>
                                                    <FaPlus />
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='block'>
                    <p className="intituleProfil">Softskills (max 3)</p>
                    <div className="accordion">
                        <div className="subForm">
                            <p className="subtitleNotBold"></p>
                            <div className='softSkillsBlock'>
                                {softskillbtn}
                            </div>
                        </div>
                        <p className="info">
                            *Les softskills correspondent aux compétences non techniques.</p>
                        <div className="finalButtonZone">
                            <button className='btn-neutral' onClick={this.handleEnregistrer}>Enregistrer</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}