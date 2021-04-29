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
            <div className="swipeCompetencesSuperDiv">
                {competencesView}
                <br />
            </div>
        );
    }
    createcompetences() {
        console.log(data.formation)
        competencesView = [];
        for (let i = 0; i < this.state.competencesData.length; i++) {
            competencesView.push(
                <div key={i} className="swipeCompetencesDiv">
                        <table className="swipeCompetencesTable">
                            <tbody>
                                <tr>
                                    <th >                                    
                        <label className="labelSwipe">{this.displayCompetence(this.state.competencesData[i].nom)+':'}</label>
                                    </th>
                                    <th >        
                        <label>{this.displayNiveau(this.state.competencesData[i].niveau)}</label>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                </div>
            )
        }
    }
    displayCompetence(value) {
        switch (value) {
            case 0:
                return 'Biztalk';
            case 1:
                return 'BPM';
            case 2:
                return 'SAP';
        }
    }
    displayNiveau(value) {
        switch (value) {
            case 0:
                return 'Débutant';
            case 1:
                return 'Intermédiaire';
            case 2:
                return 'Avancés';
        }
    }
}

