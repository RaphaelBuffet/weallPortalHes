import React from 'react'
import { AccordionSecondary } from '../../../../components/Accordion/Accordion'
import '../../../../styles/profil.css';
import { data } from './data'
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
    SwitchCaseLangue(value) {
        switch(value) {
          case 0:
            return 'Français';
          case 1:
            return 'Allemand';
          case 2:
            return 'Autre';
        }
    }
    handleNom(index, value) {
        let newValue= this.state.langue
        newValue[index].nom = value.target.value
        this.setState ({langue:newValue})
    }
    handleNiveau(index, value) {
        let newValue= this.state.langue
        newValue[index].niveau = value.target.value
        this.setState ({langue:newValue})
    }
    handleCertificat(index, value) {
        let newValue= this.state.langue
        newValue[index].certificat = value.target.value
        this.setState ({langue:newValue})
    }
    handleDate(index, value) {
        let newValue= this.state.langue
        newValue[index].date = value.target.value
        this.setState ({langue:newValue})
    }
    handleNomExperience(index, value,langueid) {
        let newValue= this.state.langue
        newValue[langueid].sejours[index].pays = value.target.value
        this.setState ({langue:newValue})
    }
    handleTypeExperience(index, value,langueid) {
        let newValue= this.state.langue
        newValue[langueid].sejours[index].type = value.target.value
        this.setState ({langue:newValue})
    }
    handleDebutExperience(index, value,langueid) {
        let newValue= this.state.langue
        newValue[langueid].sejours[index].debut = value.target.value
        this.setState ({langue:newValue})
    }
    handleFinExperience(index, value,langueid) {
        let newValue= this.state.langue
        newValue[langueid].sejours[index].fin = value.target.value
        this.setState ({langue:newValue})
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
    removeLangue(index) {
        if(this.state.langue.length>1){
            let newLangue = this.state.langue
            newLangue.splice(index, 1)
            this.setState({ langue: newLangue });
        }
        else{
            alert("Vous ne pouvez pas supprimer cette langue car vous devez renseigner au minimum votre langue maternelle")
        }
    }
    addExperience(langueid) {
        let newLangue = this.state.langue
        newLangue[langueid].sejours.push({
            pays:'',
            type:'0',
            debut:'2020-01-01',
            fin:'2021-01-01'
        })
        this.setState({langue: newLangue})
    }
    removeExperience(langueid,index) {
        let newLangue = this.state.langue
        newLangue[langueid].sejours.splice(index,1)
        this.setState({langue: newLangue})
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
                    <button className='btn-supprimer' onClick={()=>this.removeExperience(langueid,i)}> Supprimer cette experience</button>
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
                    <AccordionSecondary title={this.SwitchCaseLangue(this.state.langue[i].nom)} className='accordion-secondary'>
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
                                        <option value="6">maternelle</option>
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
                            {this.state.langue[i].sejours.length!==0
                                ? allXp[i]
                                : null}
                           <div className='flex-div'>
                                <button className='btn-supprimer' onClick={()=>this.removeLangue(i)}> Supprimer cette langue</button>
                                <button className='btn-enregistrer' onClick={this.handleEnregistrer}> Enregistrer cette langue</button>
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
                <div>
                    <button className='btn-full' onClick={this.addLangue}>ajouter une langue</button>
                </div>
            </div>
        );
    }
}