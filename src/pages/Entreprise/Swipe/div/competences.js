import React from 'react'
import { data } from './data'
var competencesView = []
export default class competences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            competencesData: data.competence,
        }
    }
    render() {
        this.createcompetences()
        return (
            <div>
                {competencesView}
                <br/>
            </div>
        );
    }
    createcompetences() {
        console.log(data.formation)
        competencesView = [];
        for (let i = 0; i < this.state.competencesData.length; i++) {
            competencesView.push(
                <div key={i}>
                    <div className='line-4'>
                        <div className='column'>
                            <label>{this.displayCompetence(this.state.competencesData[i].nom)}</label>
                        </div>
                        <div className='column'>
                            <label>{this.displayNiveau(this.state.competencesData[i].niveau)}</label>
                        </div>
                        {this.state.competencesData[i + 1] !== undefined
                            ?
                            <div>
                                <div className='column'>
                                    <label>{this.displayCompetence(this.state.competencesData[i + 1].nom)}</label>
                                </div>
                                <div className='column'>
                                    <label>{this.displayNiveau(this.state.competencesData[i + 1].niveau)}</label>
                                </div>
                            </div>
                            : null}

                    </div>
                </div>
            )
            i++
        }
    }
    displayCompetence(value) {
        switch (value) {
            case 0:
                return 'manger';
            case 1:
                return 'dormir';
            case 2:
                return 'boire';
        }
    }
    displayNiveau(value) {
        switch (value) {
            case 0:
                return 'débutant';
            case 1:
                return 'intermédiaire';
            case 2:
                return 'avancés';
        }
    }
}

