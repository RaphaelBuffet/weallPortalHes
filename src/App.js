import React from 'react';
import { Router } from 'react-router-dom'
import history from './services/history';
import {RoutesPostulant,RoutesEntreprises} from './routes';
import Footer from './components/Footer/Footer';
import './App.css'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      isentreprise:false
    }
  }
  handleclick(){
    this.setState({ isentreprise: !this.state.isentreprise })
    console.log(this.state.isentreprise)
  }
  render(){
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Router history={history}>
            {this.state.isentreprise?
            <RoutesEntreprises/>:
            <RoutesPostulant />
            }
          </Router>
          <button onClick={()=> this.handleclick()}>change profil</button>
          </div>
          <Footer />
      </div>
    );
  }
}
export default App;

