import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import './index.css';

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
        <div className='form'>
          
        </div>
      </div>
    </div>
    );
  }
}

export default App;