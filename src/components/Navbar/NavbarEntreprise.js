import React, { Component } from 'react'
import {MenuItemsMain} from './MenuItemsEntreprise'
import { Button } from '../Button/Button'
import logo from '../../image/logo.png';
import './Navbar.css'
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
                <Button>
                   Déconnexion
                </Button>
            </nav>
        )
    }

}
export default Navbar