import React from 'react';
import axios from "axios";
import config from '../../config';
import logo from '../../image/logo.png';
import '../../styles/connexion.scss';
import '../../styles/button.scss';
export default class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            type: '0',
            condition: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.handleType = this.handleType.bind(this);
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    handleConfirmPassword(event) {
        this.setState({ passwordConfirm: event.target.value });
    }
    handleType(event) {
        this.setState({ type: event.target.value });
    }
    inscription() {
        console.log(this.state.password)
        console.log(this.state.passwordConfirm)
        if (!this.state.email.includes('@')) {
            alert("format de l'e-mail non conforme")
            return
        }
        if (this.state.password != this.state.passwordConfirm) {
            alert('mot de passe et confirmation différent')
            return
        }
        if (!this.state.condition) {
            alert("vous devez accepter les dondition d'utilisation")
            return
        }
        axios.post(config.backEndURL + config.backEndApiURL + 'user', {
            email: this.state.email,
            password: this.state.password,
            entreprise: this.state.type
        })
            .then((res) => {
                if(res.data.message==='email already use'){
                    alert("email déja liée à un compte")
                }
                else{
                    console.log(res.data.message)
                    alert("compte créer avec succès")
                    this.props.history.push('/connexion');
                }
               
            })

    }
    render() {
        return (<div className="page-container">
            <div className="main-page">
                <div className="connexionTitleSection">
                    <h1>Inscription</h1>
                    <p>Connectez-vous afin de trouver le collaborateur ou l'entreprise de vos rêves</p>
                </div>
                <div className="section">
                    <div className='form-connection'>

                    <table>
                        <tbody>
                            <tr>
                                <td>
                                <p className='intituleInscription'>E-mail</p>
                                <input type="text" value={this.state.email} onChange={this.handleEmail} className='inputConnexion' />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                <p className='intituleInscription'>Mot de passe</p>
                                <input type="password" value={this.state.password} onChange={this.handlePassword} className='inputConnexion' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <p className='intituleInscription'>Confirmez le mot de passe</p>
                                <input type="password" value={this.state.passwordConfirm} onChange={this.handleConfirmPassword} className='inputConnexion' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <p className='intituleInscription'>type de compte</p>
                                <select value={this.state.type} className='inputConnexion' onChange={this.handleType}>
                                    <option value="0">Postulant</option>
                                    <option value="1">Entreprise</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <table class="confirmZone" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <td>
                                                <input type="checkbox" className='intitulé' checked={this.state.condition} onClick={() => this.setState({ condition: !this.state.condition })} />
                                            </td>
                                            <td>
                                                <label className='intitulé'> J'ai lu et j'accepte les conditions d'utilisation.</label>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a className="linkAccount" href="http://app.weallbackend.ch/connexion">J'ai déjà un compte</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="connexionBtnDiv">
                                    <button className='btn-neutral' onClick={() => this.inscription()}>
                                    Créer mon compte
                                    </button>
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="connexionImgSection">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </div>
        </div >
        );
    }
}

