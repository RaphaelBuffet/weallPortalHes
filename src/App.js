import React from 'react';
import { Router } from 'react-router-dom'
import history from './services/history';
import {RoutesPostulant,RoutesEntreprises} from './routes';
import Footer from './components/Footer/Footer';
import './App.css'
let state={
  isentreprise:true
}
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router history={history}>
          {state.isentreprise?
          <RoutesEntreprises/>:
          <RoutesPostulant />
          }
          
        </Router>
        </div>
        <Footer />
    </div>
  );
}
export default App;

