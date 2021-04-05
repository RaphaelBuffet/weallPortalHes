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
          <div className='line-3'>
            <div className='columnLeft'>
              <label>{this.state.experienceData[i].debut.slice(8, 10)}.{this.state.experienceData[i].debut.slice(5, 7)}.{this.state.experienceData[i].debut.slice(0, 4)}   - {this.state.experienceData[i].fin.slice(8, 10)}.{this.state.experienceData[i].fin.slice(5, 7)}.{this.state.experienceData[i].fin.slice(0, 4)}</label>
            </div>
            <div className='columnCenter'>
              <label> Poste : {this.state.experienceData[i].poste}</label>
            </div>
            <div className='columnRight'>
              <label> Secteur d'activité : {this.displaySecteurs(this.state.experienceData[i].secteurs)}</label>
            </div>
          </div>
          <div>
          <p className='line-simple'>Tâche principales</p>
          <p className='line-simple'>
              {this.state.experienceData[i].description}
          </p>
          </div>

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

