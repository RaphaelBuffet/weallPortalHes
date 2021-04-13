import React, { Component } from 'react'
import {MenuItemsMain} from './MenuItemsEntreprise'
import { Button } from '../Button/Button'
import logo from '../../image/logo.png';
import {logout} from "../../Store/User/UsersActions";
import {connect} from "react-redux";
import '../../styles/header.scss'
class Navbar extends Component {

    state = { clicked:false}

    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }
    logout() {
        localStorage.removeItem('user');
        this.props.reduxLogOut();
        console.log('deconnexion')
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img src={logo} alt="Logo" className="logo" /></h1>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
                    {MenuItemsMain.map((item,index)=>{
                        return (
                            <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
                <Button className="btn" onClick={() => this.logout()}>
                   Déconnexion
                </Button>
            </nav>
        )
    }

}
// Mise à jour des variables de rédux
const mapDispatchToProps = (dispatch) =>{
    return{
        reduxLogOut:()=>dispatch(logout()),
    }}


export default connect(null,mapDispatchToProps)(Navbar)