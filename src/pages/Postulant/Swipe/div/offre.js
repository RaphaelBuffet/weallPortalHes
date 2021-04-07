import React from 'react'
import { data } from '../data';
export default class offre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offre: data.offre
        }
    }
    render() {
        return (
            <div>
                <h3>L'offre proposée</h3>
                <div className='line'>
                    <div className='column'>
                        <label>{this.state.offre.poste}</label>
                    </div>
                    <div className='column'>
                        <label>{this.displayTaux(this.state.offre.taux)}</label>
                    </div>
                </div>
                <div className='line'>
                    <label>{this.displayLocalite(this.state.offre.localite)}</label>
                </div>
                <div className='line'>
                    <div className='column'>
                        <label>{this.displayContrat(this.state.offre.contrat)}</label>
                    </div>
                    <div className='column'>
                        <label>{this.displayDuree(this.state.offre.duree)}</label>
                    </div>
                </div>
                <div className='line'>
                    <label>{this.state.offre.url}</label>
                </div>
                <div className='line'>
                    <div className='column'>
                        <label>fourchette salariale : {this.displaySalaire(this.state.offre.salaire)}</label>
                    </div>
                    <div className='column'>
                        <label>entrée en poste : dès le {this.state.offre.dispo.slice(8, 10)}.{this.state.offre.dispo.slice(5, 7)}.{this.state.offre.dispo.slice(0, 4)}</label>
                    </div>
                </div>
            </div>
        );
    }
    displayTaux(value) {
        switch (value) {
            case 0:
                return '100%';
            case 1:
                return '90%';
            case 2:
                return "80%";
            case 3:
                return "70%";
            case 4:
                return "60%";
            case 5:
                return "50%";
            case 6:
                return "40%";
            case 7:
                return "30%";
            case 8:
                return "20%";
            case 9:
                return "10%";
        }
    }
    displayLocalite(value) {
        switch (value) {
            case 0:
                return 'Sion';
            case 1:
                return 'Sierre';
            case 2:
                return "Martigny";
        }
    }
    displayContrat(value) {
        switch (value) {
            case 0:
                return 'CDI';
            case 1:
                return 'CDD';
            case 2:
                return "Stage";
        }
    }
    displayDuree(value) {
        switch (value) {
            case 0:
                return '1 ans';
            case 1:
                return '2 ans';
            case 2:
                return "Autre";
        }
    }
    displaySalaire(value) {
        switch (value) {
            case 0:
                return "< 50'000 ans";
            case 1:
                return "50'000- 100'000 ans";
            case 2:
                return "100'001 - 150'000 ans";
            case 3:
                return " > 150'000 ans";
        }
    }
}

