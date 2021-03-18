import React from 'react'
import './form.css'
import { data } from './data'
var competence = [];
var softskillbtn = [];
export default class Competence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            competence: data.competence,
            softskillsize :data.softskill,
            softskill: [
                {
                    nom:'1',
                    clicked:false
                },
                {
                    nom:'2',
                    clicked:true
                },
                {
                    nom:'3',
                    clicked:true
                },
                {
                    nom:'4',
                    clicked:false
                },
                {
                    nom:'5',
                    clicked:false
                },
                {
                    nom:'6',
                    clicked:true
                },
                {
                    nom:'7',
                    clicked:false
                },
                {
                    nom:'8',
                    clicked:false
                },
                {
                    nom:'9',
                    clicked:false
                },
                {
                    nom:'10',
                    clicked:false
                },
            ]
        };
        // changement des input
        this.handleNom = this.handleNom.bind(this);
        this.handleNiveau = this.handleNiveau.bind(this);
        this.handlesoftkillbtn =this.handlesoftkillbtn.bind(this);
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
    handleNom(index, value) {
        this.state.competence[index].nom = value.target.value
        this.forceUpdate()
    }
    handleNiveau(index, value) {
        this.state.competence[index].niveau = value.target.value
        this.forceUpdate()
    }
    handlesoftkillbtn(index,state){
        if (state) {
            if (this.state.softskillsize.length === 3){
                alert("3 softskill deja choisi")
                return
            }
            this.state.softskill[index].clicked=state
            this.state.softskillsize.push(index)
            this.forceUpdate();
            return
        }
        else{
            this.state.softskillsize.splice(0,1)
            this.state.softskill[index].clicked=state
            this.forceUpdate();
            return
        }

        
        
    }
    createCompetence() {
        competence = []
        for (let i = 0; i < this.state.competence.length; i++) {
            competence.push(
                <div key={i}>
                    <div className='line'>
                        <div className='column'>
                            <p className='intitulé'>Compétences</p>
                            <select value={this.state.competence[i].nom} onChange={(value) => this.handleNom(i, value)} className='input'>
                                <option value="0">Dormir</option>
                                <option value="1">Manger</option>
                            </select>
                        </div>
                        <div className='column'>
                            <p className='intitulé'>Niveau de maîtrise</p>
                            <select value={this.state.competence[i].niveau} onChange={(value) => this.handleNiveau(i, value)} className='input'>
                                <option value="0">A1</option>
                                <option value="1">A2</option>
                                <option value="2">B1</option>
                                <option value="3">B2</option>
                                <option value="4">C1</option>
                                <option value="5">C2</option>
                            </select>
                        </div>
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
                    ?<button className='btn-click'onClick={()=> {this.handlesoftkillbtn(i,false)}}>{this.state.softskill[i].nom}</button>:
                    <button className='btn-full'onClick={()=> {this.handlesoftkillbtn(i,true)}}>{this.state.softskill[i].nom}</button>}
                </div>
            )
        }
    }
    render() {
        this.createCompetence()
        this.createSoftkill()
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
                        <h1>softskill (séléctionner maximum 3)</h1>
                        <div className='line5'>
                            {softskillbtn}
                        </div>
                    </div>
                    <button className='btn-enregistrer' onClick={this.handleEnregistrer}>enregistrer les informations</button>
            </div>
        );
    }
}