import React, { Component } from 'react'
import {MenuItemsMain} from './MenuItemsEntreprise'
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
        localStorage.removeItem('entreprise');
        localStorage.removeItem('responsable');
        localStorage.removeItem('offre');
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
                    <li onClick={() => this.logout()}>
                        <div className='nav-linksDeco'>
                            Déconnexion
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }

}
// Mise à jour des variables de réducer
const mapDispatchToProps = (dispatch) =>{
    return{
        reduxLogOut:()=>dispatch(logout()),
    }}


export default connect(null,mapDispatchToProps)(Navbar)