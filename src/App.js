import React from 'react';
import { Router } from 'react-router-dom'
import history from './services/history';
import Routes from './routes';
import Footer from './components/Footer/Footer';
import './App.css'
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router history={history}>
          <Routes />
        </Router>
        </div>
        <Footer />
    </div>
  );
}
export default App;

