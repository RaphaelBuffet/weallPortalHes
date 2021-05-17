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
                    <p>Connectez-vous afin de trouver le collaboratuer ou l'entreprise de vos rêves</p>
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
                        <div className='line'>
                            <div className='column'>
                                <p className='intituleInscription'>type de compte</p>
                                <select value={this.state.type} className='inputConnexion' onChange={this.handleType}>
                                    <option value="0">Postulant</option>
                                    <option value="1">Entreprise</option>
                                </select>
                            </div>
                        </div>
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
                        <a href="connexion">J'ai déjà un compte</a>
                        <div className="connexionBtnDiv">
                            <button className='btn-neutral' onClick={() => this.inscription()}>
                                Créer mon compte
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
    //                     console.log("pas de formation repertorié")
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
    //                     console.log("pas d'experience repertorié")
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
    //                     console.log("pas de competence repertorié")
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



// // Récupération des variables de Redux
// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }

// // Mise à jour des variables de rédux

// const mapDispatchToProps = (dispatch) => {
//     return {
//         reduxUpdateUser: (user) => dispatch(login(user))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
