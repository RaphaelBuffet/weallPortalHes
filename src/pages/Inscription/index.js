import React from 'react';
import axios from "axios";
import config from '../../config';
import logo from '../../image/logo.png';
import '../../styles/connexion.scss';
import '../../styles/button.scss';
import { login } from "../../Store/User/UsersActions";
import { connect } from "react-redux";
export default class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm:''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
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
    login() {
        console.log(config.backEndURL + config.backEndApiURL + 'user/login')
        axios.post(config.backEndURL + config.backEndApiURL + 'user/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then((res) => {
                console.log(res.data.token)
                if (res.data.isEnterprise) {
                    this.props.reduxUpdateUser({
                        token: res.data.token,
                        userId: res.data.userId,
                        isEnterprise: res.data.isEnterprise,
                        isLogged: true
                    })
                    localStorage.setItem('user', JSON.stringify({
                        token: res.data.token,
                        userId: res.data.userId,
                        isEnterprise: res.data.isEnterprise,
                        isLogged: true
                    }));

                }
                else {
                    this.props.reduxUpdateUser({
                        token: res.data.token,
                        userId: res.data.userId,
                        isEnterprise: res.data.isEnterprise,
                        isLogged: true
                    })
                    localStorage.setItem('user', JSON.stringify({
                        token: res.data.token,
                        userId: res.data.userId,
                        isEnterprise: res.data.isEnterprise,
                        isLogged: true
                    }));
                    this.createPostulant(res.data.userId, res.data.token)
                    console.log("postulant")
                }
            })
            .catch((err) => {
                console.log(err)
                alert("Email ou mot de passe incorrect")
            })
    }

    render() {
        return (<div className="page-container">
            <div className="main-page">
                <div className="connexionTitleSection">
                    <h1>Inscription</h1>
                    <p>Connectez-vous afin de trouver le collaboratuer ou l'entreprise de vos r??ves</p>
                </div>
                <div className="section">
                    <div className='form-connection'>
                        <div className='line'>
                            <div className='column'>
                                <p className='intituleInscription'>E-mail</p>
                                <input type="text" value={this.state.email} onChange={this.handleEmail} className='inputConnexion' />
                            </div>
                        </div>
                        <div className='line'>
                            <div className='column'>
                                <p className='intituleInscription'>Mot de passe</p>
                                <input type="password" value={this.state.password} onChange={this.handlePassword} className='inputConnexion' />
                            </div>
                        </div>
                        <div className='line'>
                            <div className='column'>
                                <p className='intituleInscription'>Confirmez le mot de passe</p>
                                <input type="password" value={this.state.passwordConfirm} onChange={this.handleConfirmPassword} className='inputConnexion' />
                            </div>
                        </div>
                        <table class="confirmZone" cellspacing="0">
                            <thead>
                                <tr>
                                    <td>
                                        <input type="checkbox"  className='intitul??' />
                                    </td>
                                    <td>
                                        <label className='intitul??'> J'ai lu et j'accepte les conditions d'utilisation.</label>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <div className="connexionBtnDiv">
                            <button className='btn-neutral' onClick={() => this.login()}>
                                Cr??er mon compte
                            </button>
                        </div>
                    </div>
                    <div className="connexionImgSection">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </div>
        </div >
        );
    }
//     createPostulant(userid, token) {
//         axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "postulant/user/" + userid, headers: { 'Authorization': 'Bearer ' + token } })
//             .then((response) => {
//                 response = response.data
//                 console.log(response.status)
//                 console.log(response)
//                 if (response[0] === null) {
//                     console.log("error in createProfil get")
//                 }
//                 else {
//                     console.log(response[0])
//                     localStorage.setItem('postulant', JSON.stringify({
//                         id: response[0].id_postulant,
//                         nom: response[0].nom,
//                         prenom: response[0].prenom,
//                         naissance: response[0].date_de_naissance,
//                         sexe: response[0].sexe,
//                         salaire_min: response[0].salaire_min,
//                         salaire_max: response[0].salaire_max,
//                         filtre: response[0].filtre,
//                         disponibilite: response[0].disponibilite,
//                         is_searchable: response[0].is_searchable,
//                         description: response[0].description,
//                         adresse: response[0].adresse,
//                         adresse_suplement: response[0].adresse_suplement,
//                         npa: response[0].npa,
//                         localite: response[0].localite,
//                         telephone: response[0].telephone,
//                         url_photo: response[0].url_photo
//                     }));
//                     this.createFormation(response[0].id_postulant, token)
//                     this.createExperience(response[0].id_postulant, token)
//                     this.createCompetence(response[0].id_postulant, token)
//                 }
//             })
//     }
//     createFormation(id, token) {
//         axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "formation/postulant/" + id, headers: { 'Authorization': 'Bearer ' + token } })
//             .then((response) => {

//                 if (response[0] === null) {
//                     console.log("pas de formation repertori??")
//                 }
//                 else {
//                     response = response.data
//                     let formations = []
//                     for (let i = 0; i < response.length; i++) {
//                         console.log(i)
//                         formations.push({
//                             id: response[i].id_formation,
//                             debut: response[i].date_debut,
//                             fin: response[i].date_fin,
//                             cursus: response[i].cursus,
//                             institut: response[i].institut,
//                             degree: response[i].degree,
//                             diplome: response[i].diplome
//                         })
//                     }
//                     localStorage.setItem('formation', JSON.stringify({
//                         formations
//                     }));
//                 }
//             })
//     }
//     createExperience(id, token) {
//         axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "experience/postulant/" + id, headers: { 'Authorization': 'Bearer ' + token } })
//             .then((response) => {
//                 if (response[0] === null) {
//                     console.log("pas d'experience repertori??")
//                 }
//                 else {
//                     response = response.data
//                     let experiences = []
//                     for (let i = 0; i < response.length; i++) {
//                         console.log(i)
//                         experiences.push({
//                             id: response[i].id_experience,
//                             entreprise: response[i].entreprise,
//                             poste: response[i].poste,
//                             debut: response[i].date_debut,
//                             fin: response[i].date_fin,
//                             secteur: response[i].id_secteur,
//                             pays: response[i].pays,
//                             localite: response[i].localite,
//                             npa: response[i].npa,
//                             description: response[i].description
//                         })
//                     }
//                     localStorage.setItem('experience', JSON.stringify({
//                         experiences
//                     }));
//                 }
//             })
//     }
//     createCompetence(id, token) {
//         axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "competence/postulant/" + id, headers: { 'Authorization': 'Bearer ' + token } })
//             .then((response) => {
//                 if (response[0] === null) {
//                     console.log("pas de competence repertori??")
//                 }
//                 else {
//                     response = response.data
//                     let competence = []
//                     for (let i = 0; i < response.length; i++) {
//                         console.log(i)
//                         competence.push(response[i].competence)
//                     }
//                     localStorage.setItem('competence', JSON.stringify({
//                         competence
//                     }));
//                 }
//             })
//     }
 }



// // R??cup??ration des variables de Redux
// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }

// // Mise ?? jour des variables de r??dux

// const mapDispatchToProps = (dispatch) => {
//     return {
//         reduxUpdateUser: (user) => dispatch(login(user))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
