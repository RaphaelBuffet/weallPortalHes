import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import './form.css'
import { data } from './data'
import { MdLocationOff } from 'react-icons/md';
var langue = [];
var xpLangue = [];
var allXp =[];
export default class Langue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langue: data.langue
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
        this.addExperience=this.addExperience.bind(this);
    }
    handleNom(index, value) {
        this.state.langue[index].nom = value.target.value
        this.forceUpdate()
    }
    handleNiveau(index, value) {
        this.state.langue[index].niveau = value.target.value
        this.forceUpdate()
    }
    handleCertificat(index, value) {
        this.state.langue[index].certificat = value.target.value
        this.forceUpdate()
    }
    handleDate(index, value) {
        this.state.langue[index].date = value.target.value
        this.forceUpdate()
    }
    handleNomExperience(index, value,langueid) {
        this.state.langue[langueid].sejours[index].pays = value.target.value
        this.forceUpdate()
    }
    handleTypeExperience(index, value,langueid) {
        this.state.langue[langueid].sejours[index].type = value.target.value
        this.forceUpdate()
    }
    handleDebutExperience(index, value,langueid) {
        this.state.langue[langueid].sejours[index].debut = value.target.value
        this.forceUpdate()
    }
    handleFinExperience(index, value,langueid) {
        this.state.langue[langueid].sejours[index].fin = value.target.value
        this.forceUpdate()
    }
    handleEnregistrer() {
        alert('coucou')
    }
    addLangue() {
        let newLangue = this.state.langue
        newLangue.push({
            nom:0,
            niveau:0,
            certificat:'',
            date:'2021-01-01',
            sejours: []
        })
        this.setState({ langue: newLangue });
    }
    addExperience(langueid) {
        let newExperience= this.state.langue[langueid].sejours
        newExperience.push({
            pays:'',
            type:'0',
            debut:'2020-01-01',
            fin:'2021-01-01'
        })
        this.state.langue[langueid].sejours=newExperience
        this.forceUpdate()
        
    }
    handlehavexp() {
        this.setState({ havexp: !this.state.havexp })
    }
    createLanguageExperience(langueid) {
        xpLangue = [];
        for (let i = 0; i < this.state.langue[langueid].sejours.length; i++) {
            xpLangue.push(
                <div className='form'>
                    <div className='line'>
                        <div className='column'>
                            <p className='intitulé'>Pays</p>
                            <input type="text" value={this.state.langue[langueid].sejours[i].pays} onChange={(value) => this.handleNomExperience(i, value,langueid)} className='input' />
                        </div>
                        <div className='column'>
                            <p className='intitulé'>Type d'expérience lingusitique</p>
                            <select value={this.state.langue[langueid].sejours[i].type} onChange={(value) => this.handleTypeExperience(i, value,langueid)} className='input'>
                                <option value="0">Séjours linguisitique</option>
                                <option value="1">Expérience professionelle</option>
                            </select>
                        </div>
                    </div>
                    <div className='line'>
                        <div className='column'>
                            <p className='intitulé'>date de début</p>
                            <input type="date" value={this.state.langue[langueid].sejours[i].debut} onChange={(value) => this.handleDebutExperience(i, value,langueid)} className='input' />
                        </div>
                        <div className='column'>
                            <p className='intitulé'>date de fin</p>
                            <input type="date" value={this.state.langue[langueid].sejours[i].fin} onChange={(value) => this.handleFinExperience(i, value,langueid)} className='input' />
                        </div>
                    </div>
                </div>
            )
            allXp[langueid]=xpLangue
        }
    }
    createLangueDisplay() {
        langue = []
        for (let i = 0; i < this.state.langue.length; i++) {
            this.createLanguageExperience(i);
            langue.push(
                <div key={i}>
                    <AccordionSecondary title={"langue " + (i + 1)} className='accordion-secondary'>
                        <div className='form'>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Langue</p>
                                    <select value={this.state.langue[i].nom} onChange={(value) => this.handleNom(i, value)} className='input'>
                                        <option value="0">Français</option>
                                        <option value="1">Allemand</option>
                                        <option value="2">Autre</option>
                                    </select>
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>Niveau</p>
                                    <select value={this.state.langue[i].niveau} onChange={(value) => this.handleNiveau(i, value)} className='input'>
                                        <option value="0">A1</option>
                                        <option value="1">A2</option>
                                        <option value="2">B1</option>
                                        <option value="3">B2</option>
                                        <option value="4">C1</option>
                                        <option value="5">C2</option>
                                    </select>
                                </div>
                            </div>
                            <div className='line'>
                                <div className='column'>
                                    <p className='intitulé'>Certifiact</p>
                                    <input type="text" value={this.state.langue[i].certificat} onChange={(value) => this.handleCertificat(i, value)} className='input' />
                                </div>
                                <div className='column'>
                                    <p className='intitulé'>date d'obtention</p>
                                    <input type="date" value={this.state.langue[i].date}onChange={(value) => this.handleDate(i, value)} className='input' />
                                </div>
                            </div>
                            <div className='line-simple'>
                                <button className='btn-full'onClick={()=>{this.addExperience(i)}}>ajouter une experience/sejour lingusitique</button>
                            </div>
                            {this.state.langue[i].sejours.length!=0
                                ? allXp[i]
                                : null}
                           <button className='btn-enregistrer' onClick={this.handleEnregistrer}>enregistrer les informations</button> 
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
                <div>
                    <button className='btn-full' onClick={this.addLangue}>ajouter une langue</button>
                </div>
            </div>
        );
    }
}