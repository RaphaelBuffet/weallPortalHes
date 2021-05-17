import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import '../../../styles/swipe.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import logo from '../../../image/logo.png'
import { data } from './data'
import Offre from './div/offre'
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
var beneficeView = []
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      loading: true
    }
  }
  componentDidMount() {
    for (let i = 0; i < this.state.data.benefice.length; i++) {
      beneficeView.push(
        <div className='swipeCompetencesDiv'>
          <table className="swipeCompetencesTable">
            <tbody>
              <tr>
                <th >
                  <label className="swipeSubSubtitle">{this.state.data.benefice[i]}</label>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      )
      console.log(this.state.data.benefice[i])
    }
    this.setState({ loading: false })
  }
  render() {
    return (<div>
      <div className="App">
        <Navbar />
      </div>
      <div className='main-page'>
        <div className='section'>
          <h1>Swipe</h1>
          <p>Swipez pour découvrir les offres adaptées</p>
        </div>
        <div className='swipeSection'>
          <div className='profil'>
            <div className='block'>
              <p className="intituleProfil">{this.state.data.entreprise}</p>
              <div className="accordion">
                <div className="subForm">
                  <table>
                    <thead>
                      <tr>
                        <th rowspan="6">
                          <div className='imagediv'>
                            <img src={logo} alt="Logo" className="logo-entreprise"/>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <label className="swipeSubtitle">Description:</label>
                          <label>{this.state.data.description}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="swipeSubtitle">Secteur:</label>
                          <label>{this.displaySecteurs(this.state.data.secteur)}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="swipeSubtitle">Type:</label>
                          <label>{this.displayType(this.state.data.type)} </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="swipeSubtitle">Ethique:</label>
                          <label>{this.displayEthique(this.state.data.ethique)}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="swipeSubtitle">Label:</label>
                          <label>{this.displayLabel(this.state.data.label)}</label>
                        </td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <div className='block'>
              <p className="intituleProfil">Autre bénéfices</p>
              <div className="accordion">
                <div className="subForm">
                  <div className='swipeCompetencesSuperDiv'>
                    {beneficeView}
                  </div>
                </div>
              </div>
            </div>
            <div className='block'>
              <p className="intituleProfil">Offre proposée</p>
              <div className="accordion">
                <div className="subForm">
                  <Offre />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='block'>
            <div className='btn-container-3'>
              <div className='btn-column-left'>
              <button className='btn-accepter' onClick={() => alert("droite")}>
                  <FaThumbsUp size="50" />
                </button>
              </div>
              <div className='btn-column-center'>
                <button className='btn-later'>
                  Revoir plus tard
                  </button>
                  </div>
                  <div className='btn-column-right'>
                <button className='btn-refus' onClick={() => alert("gauche")}>
                  <FaThumbsDown size="50" />
                </button>
                </div>
              </div>
          </div>
    </div>
    
    );
  }
  displayEthique(value) {
    switch (value) {
      case 0:
        return "écologique";
      case 1:
        return "horaire libre";
    }
  }
  displayLabel(value) {
    switch (value) {
      case 0:
        return "Label 1";
      case 1:
        return "Label 2";
    }
  }
  displayType(value) {
    switch (value) {
      case 0:
        return "PME";
      case 1:
        return "Internationale";
    }
  }
  displaySecteurs(value) {
    switch (value) {
      case 0:
        return "économie";
      case 1:
        return "Informatique";
    }
  }
}

export default App;