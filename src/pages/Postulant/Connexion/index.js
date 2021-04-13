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
        
    }
    render() {
        return (<div>
            <div className="main-page">
                <div className="section">
                    <h1>Connexion</h1>
                    <p>&gt; Veuillez remplir vos informations de connexion</p>
                </div>
                <div className="section">
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