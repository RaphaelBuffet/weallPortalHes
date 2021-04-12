import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import '../../../styles/swipe.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import logo from '../../../image/logo.png'
import { data } from './data'
import Offre from './div/offre'
var beneficeView = []
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      loading:true
    }
  }
  componentDidMount() {
    for (let i = 0; i < this.state.data.benefice.length; i++) {
      beneficeView.push(
        <div className='column'>
          <label>{this.state.data.benefice[i]}</label>
        </div>
      )
      console.log(this.state.data.benefice[i])
    }
    this.setState({loading:false})
  }
  render() {
    return (<div>
      <div className="App">
        <Navbar />
      </div>
      <div className='main-page'>
        <div className='titre'>
          <h1>Swipe</h1>
          <label>&gt; Swipez pour découvrir les offres adaptées</label>
        </div>
        <div className='test'>
          <button className='btn-accepter' onClick={() => alert("gauche")}>
            <ArrowBackIosIcon />
          </button>
          <div className='profil'>
            <div className='infoGenerale'>
              <div className='imagediv'>
                <img src={logo} alt="Logo" />
              </div>
              <div className='info'>
                <div className='section-bordered'>
                  <label>{this.state.data.entreprise}</label>
                </div>
                <div className='section-bordered'>
                  <label>{this.state.data.description}</label>
                </div>
                <div className='section-bordered'>
                  <label>{this.displayType(this.state.data.type)} {this.displaySecteurs(this.state.data.secteur)}</label>
                </div>
              </div>
            </div>
            <div className='section-bordered'>
              <label>{this.displayEthique(this.state.data.ethique)}</label>
            </div>
            <div className='section-bordered'>
              <label>{this.displayLabel(this.state.data.label)}</label>
            </div>
            <div className='section-bordered'>
              <h3>autre bénéfices</h3>
              <div className='line'>
              {beneficeView}
              </div>
              
            </div>
            <div className='offre'>
              <Offre />
            </div>
          </div>
          <button className='btn-refus' onClick={() => alert("droite")}>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <button className='btn-full'>
          Revoir plus tard
        </button>
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