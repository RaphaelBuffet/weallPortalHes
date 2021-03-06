import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import '../../../../styles/profil.scss';
import { data } from './data'
import { FaSave } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import Moment from 'moment';

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
    componentDidMount(){
        let formations = JSON.parse(localStorage.getItem("formation"))
        console.log(formations.formations)
        this.setState({
            formation:formations.formations
          })
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
            diplome: 'Nouvelle formation'
        })
        this.setState({ formation: newformation });
    }
    removeFormation(index) {
        if (this.state.formation.length > 1) {
            let newformation = this.state.formation
            newformation.splice(index, 1)
            this.setState({ formation: newformation });
        }
        else {
            alert("Vous ne pouvez pas supprimer cette formation car vous devez renseigner au minimum votre derni??re formation suivis")
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
                            <div>

                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intituleProfil'>Cursus</p>
                                    <select value={this.state.formation[i].cursus} onChange={(value) => this.handleCursus(i, value)} className='input'>
                                        <option value="0">Universiatire</option>
                                        <option value="1">Haute ??cole sp??cialis??e</option>
                                        <option value="2">Autre (Par exemple ??tude a l'??tranger)</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intituleProfil'>Dur??e</p>
                                    <table class="dateZone" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <td>
                                                    <input type="date" value={this.state.formation[i].debut} onChange={(value) => this.handleDateDebut(i, value)} className='inputDate' />
                                                </td>
                                                <td>??</td>
                                                <td>
                                                    <input type="date" value={this.state.formation[i].fin} onChange={(value) => this.handleDateFin(i, value)} className='inputDate' />
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intituleProfil'>Institut</p>
                                    <select value={this.state.formation[i].institut} onChange={(value) => this.handleInstitut(i, value)} className='input'>
                                        <option value="0">Informatique de gestion</option>
                                        <option value="1">Tourisme</option>
                                        <option value="2">Economie et Service</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intituleProfil'>Nom du dipl??me</p>
                                    <input type="text" value={this.state.formation[i].diplome} onChange={(value) => this.handleDiplome(i, value)} className='input' />
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intituleProfil'>Degr?? d'??tude</p>
                                    <select value={this.state.formation[i].degre} onChange={(value) => this.handleDegreEtude(i, value)} className='input'>
                                        <option value="0">Bachelor</option>
                                        <option value="1">Master</option>
                                        <option value="1">Doctorat</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <div className="btn-divLeft">
                                    <button className='btn-formAdd' onClick={this.handleEnregistrer}>
                                        <FaSave />
                                    </button>
                                    <button className='btn-formRemove' onClick={() => this.removeFormation(i)}>
                                        <FaTrash />
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionSecondary>
                </div>
            )
        }
        return (
            <div className='accordion'>
                {formation}
                <div className="accordionBottom">
                <div className="btn-divRight">
                    <table className="finalButtonZone-extern">
                        <thead>
                            <tr>
                                <th>
                                    Ajouter une formation
                                </th>
                                <th>
                                    <button className='btn-formAdd' onClick={this.addFormation}>
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