import React from 'react'
import { data } from './data'
var langueView = []
var sejoursView = []
var allSejoursView = []
export default class langue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langueData: data.langue
        }
    }
    render() {
        this.createlangue()
        return (
            <div>
                {langueView}
            </div>

        );
    }
    createlangue() {
        console.log(data.langue)
        langueView = [];
        for (let i = 0; i < this.state.langueData.length; i++) {
            this.createSejours(i)
            langueView.push(
                <div key={i}>
                    <div className='line-3'>
                        <div className='column'>
                            <label>{this.displayLangue(this.state.langueData[i].nom)}</label>
                        </div>
                        <div className='column'>
                            <label> Niveau : {this.displayNiveau(this.state.langueData[i].niveau)}</label>
                        </div>
                        <div className='column'>
                            <label> Certificat : {this.state.langueData[i].certificat === '' ? 'Pas de certificat' : this.state.langueData[i].certificat}</label>
                        </div>
                    </div>
                    {this.state.langueData[i].sejours.length !== 0 ?
                        <div>
                            <p className='line-simple'>Expérience/Séjours Linguistique</p>
                            <div>
                                {allSejoursView[i]}
                            </div>
                        </div>:null
                }

                </div>
            )
        }
    }
    createSejours(index) {
        sejoursView = []
        for (let i = 0; i < this.state.langueData[index].sejours.length; i++) {
            sejoursView.push(
                <div className='line-3'>
                    <div className='columnLeft'>
                    <label>{this.state.langueData[index].sejours[i].debut.slice(8, 10)}.{this.state.langueData[index].sejours[i].debut.slice(5, 7)}.{this.state.langueData[index].sejours[i].debut.slice(0, 4)}   - {this.state.langueData[index].sejours[i].fin.slice(8, 10)}.{this.state.langueData[index].sejours[i].fin.slice(5, 7)}.{this.state.langueData[index].sejours[i].fin.slice(0, 4)}</label>
                    </div>
                    <div className='columnCenter'>
                        <label> Pays : {this.state.langueData[index].sejours[i].pays}</label>
                    </div>
                    <div className='columnRight'>
                        <label> Type : {this.displayTypeSejours(this.state.langueData[index].sejours[i].type)}</label>
                    </div>
                </div>
            )
            allSejoursView[index]=sejoursView
        }
    }
    displayLangue(value) {
        switch (value) {
            case 0:
                return 'Allemand';
            case 1:
                return 'Français';
            case 2:
                return "Anglais";
        }
    }
    displayNiveau(value) {
        switch (value) {
            case 0:
                return 'A1';
            case 1:
                return 'A2';
            case 2:
                return "B1";
        }
    }
    displayTypeSejours(value) {
        switch (value) {
            case 0:
                return 'Experience professionelle';
            case 1:
                return 'Séjours linguistiques';
        }
    }
}

