import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import '../../../../styles/filtre.scss';
import '../../../../styles/profil.scss';
import { FaSave } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { data } from './data';
import Moment from 'moment';
var langue = [];
var xpLangue = [];
var allXp = [];
export default class Langue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langue: data.langue,
            sejours: []
        };
        // changement des input
        this.handleNom = this.handleNom.bind(this);
        this.handleNiveau = this.handleNiveau.bind(this);
        this.handleCertificat = this.handleCertificat.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleNomExperience = this.handleNomExperience.bind(this);
        this.handleTypeExperience = this.handleTypeExperience.bind(this);
        this.handleDebutExperience = this.handleDebutExperience.bind(this);
        this.handleFinExperience = this.handleFinExperience.bind(this);
        // gestion des actions des bouttons
        this.addLangue = this.addLangue.bind(this);
        this.handlehavexp = this.handlehavexp.bind(this);
        this.handleEnregistrer = this.handleEnregistrer.bind(this);
        this.addExperience = this.addExperience.bind(this);
    }
    SwitchCaseLangue(value) {
        switch (value) {
            case 'Français':
                return 'Français';
            case 'Allemand':
                return 'Allemand';
            case 'Autre':
                return 'Autre';
        }
    }
    componentDidMount() {
        let langue = JSON.parse(localStorage.getItem("langue"))
        console.log(langue.langue)
        this.setState({
            langue: langue.langue
        })
    }
    handleNom(index, value) {
        let newValue = this.state.langue
        newValue[index].nom = value.target.value
        this.setState({ langue: newValue })
    }
    handleNiveau(index, value) {
        let newValue = this.state.langue
        newValue[index].niveau = value.target.value
        this.setState({ langue: newValue })
    }
    handleCertificat(index, value) {
        let newValue = this.state.langue
        newValue[index].certificat = value.target.value
        this.setState({ langue: newValue })
    }
    handleDate(index, value) {
        let newValue = this.state.langue
        newValue[index].date = value.target.value
        this.setState({ langue: newValue })
    }
    handleNomExperience(index, value, langueid) {
        let newValue = this.state.langue
        newValue[langueid].sejours[index].pays = value.target.value
        this.setState({ langue: newValue })
    }
    handleTypeExperience(index, value, langueid) {
        let newValue = this.state.langue
        newValue[langueid].sejours[index].type = value.target.value
        this.setState({ langue: newValue })
    }
    handleDebutExperience(index, value, langueid) {
        let newValue = this.state.langue
        newValue[langueid].sejours[index].debut = value.target.value
        this.setState({ langue: newValue })
    }
    handleFinExperience(index, value, langueid) {
        let newValue = this.state.langue
        newValue[langueid].sejours[index].fin = value.target.value
        this.setState({ langue: newValue })
    }
    handleEnregistrer() {
        alert('coucou')
    }
    addLangue() {
        let newLangue = this.state.langue
        newLangue.push({
            nom: 0,
            niveau: 0,
            certificat: '',
            date: '2021-01-01',
            sejours: []
        })
        this.setState({ langue: newLangue });
    }
    removeLangue(index) {
        if (this.state.langue.length > 1) {
            let newLangue = this.state.langue
            newLangue.splice(index, 1)
            this.setState({ langue: newLangue });
        }
        else {
            alert("Vous ne pouvez pas supprimer cette langue car vous devez renseigner au minimum votre langue maternelle")
        }
    }
    addExperience(langueid) {
        let newLangue = this.state.langue
        newLangue[langueid].sejours.push({
            pays: '',
            type: '0',
            debut: '2020-01-01',
            fin: '2021-01-01'
        })
        this.setState({ langue: newLangue })
    }
    removeExperience(langueid, index) {
        let newLangue = this.state.langue
        newLangue[langueid].sejours.splice(index, 1)
        this.setState({ langue: newLangue })
    }

    handlehavexp() {
        this.setState({ havexp: !this.state.havexp })
    }
    createLanguageExperience(langueid) {
        xpLangue = [];
        for (let i = 0; i < this.state.langue[langueid].sejours.length; i++) {
            xpLangue.push(
                <div className='accordion'>
                    <div className='form'>
                        <div className="subForm">
                            <div className='line'>
                                <div className='column'>
                                    <p className='intituleProfil'>Pays</p>
                                    <input type="text" value={this.state.langue[langueid].sejours[i].pays} onChange={(value) => this.handleNomExperience(i, value, langueid)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intituleProfil'>Durée</p>
                                    <table class="dateZone" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <td>
                                                    <input type="date" value={Moment(this.state.langue[langueid].sejours[i].debut).format('YYYY-MM-DD')} onChange={(value) => this.handleDebutExperience(i, value, langueid)} className='inputDate' />
                                                </td>
                                                <td>à</td>
                                                <td>
                                                    <input type="date" value={Moment(this.state.langue[langueid].sejours[i].fin).format('YYYY-MM-DD')} onChange={(value) => this.handleFinExperience(i, value, langueid)} className='inputDate' />
                                                </td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intituleProfil'>Type d'expérience lingusitique</p>
                                    <select value={this.state.langue[langueid].sejours[i].type} onChange={(value) => this.handleTypeExperience(i, value, langueid)} className='input'>
                                        <option value="Séjours lingusitique">Séjours linguisitique</option>
                                        <option value="Experience professionelle">Expérience professionelle</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <div className="btn-divLeft">
                                        <button className='btn-formRemove' onClick={() => this.removeExperience(langueid, i)} title="Supprimer cette expérience linguistique">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
            allXp[langueid] = xpLangue
        }
    }
    createLangueDisplay() {
        langue = []
        for (let i = 0; i < this.state.langue.length; i++) {
            this.createLanguageExperience(i);
            langue.push(
                <div key={i}>
                    <AccordionSecondary title={this.SwitchCaseLangue(this.state.langue[i].langue)} className='accordion-secondary'>
                        <div className='form'>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intituleProfil'>Langue</p>
                                    <select value={this.state.langue[i].langue} onChange={(value) => this.handleNom(i, value)} className='input'>
                                        <option value="Français">Français</option>
                                        <option value="Allemand">Allemand</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intituleProfil'>Niveau</p>
                                    <select value={this.state.langue[i].niveau} onChange={(value) => this.handleNiveau(i, value)} className='input'>
                                        <option value="A1-A2">A1</option>
                                        <option value="1">A2</option>
                                        <option value="B1-B2 (intermediaire)">B1</option>
                                        <option value="3">B2</option>
                                        <option value="C1-C2(avancé)">C1</option>
                                        <option value="5">C2</option>
                                        <option value="6">maternelle</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intituleProfil'>Certifiact</p>
                                    <input type="text" value={this.state.langue[i].certificat} onChange={(value) => this.handleCertificat(i, value)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intituleProfil'>date d'obtention</p>
                                    <input type="date" value={this.state.langue[i].obtention} onChange={(value) => this.handleDate(i, value)} className='input' />
                                </div>
                            </div>
                            <div className='line-simple'>
                                <p className="intituleProfil"> Experiences linguisitiques</p>
                            </div>
                            {allXp[i] !== null
                                ? allXp[i]
                                : null}
                            <div className="flex-div">
                                <div className='btn-div'>
                                    <button className='btn-formAdd' onClick={() => { this.addExperience(i) }} title="Ajouter une expérience linguistique">
                                        <FaPlus />
                                    </button>

                                    <button className='btn-formAdd' onClick={this.handleEnregistrer} title="Enregistrer la langue">
                                        <FaSave />
                                    </button>
                                    <button className='btn-formRemove' onClick={() => this.removeLangue(i)} title="Supprimer la langue">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>

                        </div>
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
                <div className="accordionBottom">
                    <div className="btn-divRight">
                        <table className="finalButtonZone-extern">
                            <thead>
                                <tr>
                                    <th>
                                        Ajouter une langue
                                </th>
                                    <th>
                                        <button className='btn-formAdd' onClick={this.addLangue}>
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