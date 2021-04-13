import React from 'react';
import axios from "axios";


export default class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'postulant2@fake.ch',
            password: 'passwordTest',
            checked: false
        }
    }
    login() {
        console.log("je fait un truc")
        localStorage.setItem('entreprise',"test")
    }
    render() {
        return (<div>
            <div className="main-page">
                <div className="section">
                    <h1>Connexion</h1>
                    <p>&gt; Veuillez remplir vos informations de connexion</p>
                </div>
                <div className="section">
                    <div className='form'>
                        <div className='line'>
                            <div className='column'>
                                <p className='intitulé'>E-mail</p>
                                <input type="text" value={this.state.email} className='input' />
                            </div>
                        </div>
                        <div className='line'>
                            <div className='column'>
                                <p className='intitulé'>Mot de passe</p>
                                <input type="password" value={this.state.password} className='input' />
                            </div>
                        </div>
                        <div className='line'>
                            <div className='column'>
                                <button className='btn' onClick={this.login}>
                                    Connexion
                        </button>
                            </div>
                            <div className='column'>
                                <button className='btn'>
                                    Connexion
                        </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}

/*
// Récupération des variables de Redux
const mapStateToProps = (state) => {
    return{
        user: state.user
    }}

// Mise à jour des variables de rédux

const mapDispatchToProps = (dispatch) =>{
    return{
        reduxUpdateUser:(user) => dispatch(login(user))
    }}

export default connect(mapStateToProps,mapDispatchToProps)(ConnexionPostulant);
*/