import React from 'react'
import { data } from './data'
var experienceView = []
export default class experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceData: data.experience
    }
  }
  render() {
    this.createexperience()
    return (
      <div>
        {experienceView}
      </div>

    );
  }
  createexperience() {
    console.log(data.formation)
    experienceView = [];
    for (let i = 0; i < this.state.experienceData.length; i++) {
      experienceView.push(
        <div key={i}>
        <table className="swipeDateTable">
            <tbody>
              <tr>
                <td > A occupé le poste de 
                  <label className="labelSwipe">  {this.state.experienceData[i].poste}</label>
                </td>
                <td > dans le secteur
                  <label className="labelSwipe"> {this.displaySecteurs(this.state.experienceData[i].secteurs)}</label>
                </td>
                <td > du
                  <label className="labelSwipe">
                      {this.state.experienceData[i].debut.slice(8, 10)}.{this.state.experienceData[i].debut.slice(5, 7)}.{this.state.experienceData[i].debut.slice(0, 4)}
                  </label>  
                </td>
                <td> au
                <label className="labelSwipe">
                      {this.state.experienceData[i].fin.slice(8, 10)}.{this.state.experienceData[i].fin.slice(5, 7)}.{this.state.experienceData[i].fin.slice(0, 4)}
                  </label>
                </td>
              </tr>
            </tbody>
            </table>
          <p className='swipeSubtitle'>Tâche principales</p>
          <p className='swipeTextBlock'>
              {this.state.experienceData[i].description}
          </p>     
          <hr className="hrWhite"/>

        </div>
      )
    }
  }
  displaySecteurs(value) {
    switch (value) {
      case 0:
        return 'Informatique';
      case 1:
        return 'Finance';
      case 2:
        return "Autre";
    }
  }
}

