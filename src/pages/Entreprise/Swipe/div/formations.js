import React from 'react'
import { data } from './data'
import '../../../../styles/swipe.scss';
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
          <table  className="tableFormations">
            <tbody>
              <tr>
                {/* <td>
                  <label className="labelDateSwipe">
                    {this.state.formationsData[i].debut.slice(8, 10)}.{this.state.formationsData[i].debut.slice(5, 7)}.{this.state.formationsData[i].debut.slice(0, 4)}
                  </label>  
                </td> */}
                 <td >
                   <p>A obtenu</p>
                  <label className="labelSwipe">  {this.state.formationsData[i].diplome}</label>
                </td>
                <td >
                  <p>via</p>
                  <label className="labelSwipe"> {this.displayCursus(this.state.formationsData[i].cursus)}</label>
                </td>
                <td >
                <p>le</p>
                  <label className="labelSwipe">
                    {this.state.formationsData[i].fin.slice(8, 10)}.{this.state.formationsData[i].fin.slice(5, 7)}.{this.state.formationsData[i].fin.slice(0, 4)}
                  </label>
                </td>
              </tr>
            </tbody>
            </table>
            <hr className="hrWhite"/>
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

