import React from 'react'
import { data } from './data'
var formationsView = []
export default class formations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formationsData: data.formation
    }
  }
  render() {
    this.createFormations()
    return (
      <div>
        {formationsView}
      </div>

    );
  }
  createFormations() {
    console.log(data.formation)
    formationsView = [];
    for (let i = 0; i < this.state.formationsData.length; i++) {
      formationsView.push(
        <div key={i}>
          <div className='line-3'>
            <div className='column'>
              <label>{this.state.formationsData[i].debut.slice(8, 10)}.{this.state.formationsData[i].debut.slice(5, 7)}.{this.state.formationsData[i].debut.slice(0, 4)}   - {this.state.formationsData[i].fin.slice(8, 10)}.{this.state.formationsData[i].fin.slice(5, 7)}.{this.state.formationsData[i].fin.slice(0, 4)}</label>
            </div>
            <div className='column'>
              <label> Cursus : {this.displayCursus(this.state.formationsData[i].cursus)}</label>
            </div>
            <div className='column'>
              <label> Diplôme : {this.state.formationsData[i].diplome}</label>
            </div>
          </div>
        </div>
      )
    }
  }
  displayCursus(value) {
    switch (value) {
      case 0:
        return 'Universiatire';
      case 1:
        return 'Haute école spécialisée';
      case 2:
        return "Autre (par exemple cursus à l'étranger)";
    }
  }
}

