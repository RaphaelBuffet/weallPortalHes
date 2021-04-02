import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import './index.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offre: {
        nom: 'Comptable',
        id: 1
      }
    }
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
            <div className='btn-refus'>
              <IconButton className='btn-refus' onClick={()=>alert("gauche")}>
              <ArrowBackIosIcon/>
              </IconButton>
            </div>
            <div className='profil'>
            <label>test dddddddddddddddddddddddddddddddddd ddddd ddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddd aasdas sad a</label>
            </div>
            <div className='btn-accepter'>
              <IconButton className='btn-accepter' onClick={()=>alert("droite")}>
              <ArrowForwardIosIcon/>
              </IconButton>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;