import React from 'react';
import { Router } from 'react-router-dom'
import history from './services/history';
import { RoutesPostulant, RoutesEntreprises, RoutesConnexion } from './routes';
import Footer from './components/Footer/Footer';
import '../src/styles/app.scss'
import {connect} from 'react-redux';
import {login, logout} from "./Store/User/UsersActions";

class WeAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleclick() {
    this.setState({ isentreprise: !this.state.isentreprise })
    console.log(this.state.isentreprise)
  }
  componentDidMount() {
      if(localStorage.getItem('user')!=null){
        this.props.reduxUpdateUser(JSON.parse(localStorage.getItem('user')));
        console.log(localStorage.getItem('user'))
        console.log(this.props.user)
      }
  }
  render() {
    if (this.props.user.isLogged) {
      return (
        <div className="page-container" >
          <div className="content-wrap">
            <Router history={history}>
              {this.props.user.isEnterprise ?
                <RoutesEntreprises /> :
                <RoutesPostulant />
              }
            </Router>
          </div>
          <Footer />
        </div >
      )
    }
    return (
        <Router history={history}>
            <RoutesConnexion />
        </Router>
    );
  }
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
        msg: state.messages
    }}

// Mise à jour des variables de rédux
const mapDispatchToProps = (dispatch) =>{
    return{
        reduxUpdateUser:(user) => dispatch(login(user)),
        reduxLogOut:()=>dispatch(logout()),
    }}

export default connect(mapStateToProps,mapDispatchToProps)(WeAll)

