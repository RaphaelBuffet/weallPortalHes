import React, { Component } from 'react'
import {MenuItems} from './MenuItemsPostulant'
import '../../styles/header.scss'
import '../../styles/button.scss'
import logo from '../../image/logo.png';

class Navbar extends Component {

    state = { clicked:false}

    handleClick = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img src={logo} alt="Logo" className="logo" /></h1>
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                            <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
                <button className="btn-reject">
                   Déconnexion
                </button>
            </nav>
        )
    }

}

export default Navbar