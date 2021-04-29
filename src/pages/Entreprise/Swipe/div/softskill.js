import React from 'react'
import { data } from './data'
export default class competences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            softskillData: data.softskill
        }
    }
    render() {
        return (
            <div className='swipeCompetencesSuperDiv'>
                <div className='swipeCompetencesDiv'>
                    <table className="swipeCompetencesTable">
                            <tbody>
                                <tr>
                                    <th >                                    
                                    <label className="swipeSubSubtitle">{this.displaySoftskill(this.state.softskillData[0])}</label>
                                    </th>
                                    </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className='swipeCompetencesDiv'>
                        <table className="swipeCompetencesTable">
                            <tbody>
                                <tr>
                                    <th >        
                                    <label className="swipeSubSubtitle">{this.displaySoftskill(this.state.softskillData[1])}</label>
                                    </th>
                                    </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className='swipeCompetencesDiv'>
                        <table className="swipeCompetencesTable">
                            <tbody>
                                <tr>
                                    <th >        
                                    <label className="swipeSubSubtitle">{this.displaySoftskill(this.state.softskillData[2])}</label>
                                    </th>
                                </tr>
                                </tbody>
                            </table>  
                        </div>
                </div>
        )
    }
    displaySoftskill(value) {
        switch (value) {
            case 0:
                return 'softskill 1';
            case 1:
                return 'Caresser des chats';
            case 2:
                return 'Rangement de forêt';
            case 3:
                return 'Faire des fajitas';
        }
    }
}