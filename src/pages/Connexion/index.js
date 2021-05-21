import React from 'react';
import axios from "axios";
import config from '../../config';
import logo from '../../image/logo.png';
import '../../styles/connexion.scss';
import '../../styles/button.scss';
import { login } from "../../Store/User/UsersActions";
import { connect } from "react-redux";
import Moment from 'moment';
import { getConfig } from '@testing-library/dom';

class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'entreprise1@fake.ch',
            password: 'passwordTest',
            checked: false,
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
    login() {
        console.log(config.backEndURL + config.backEndApiURL + 'user/login')
        axios.post(config.backEndURL + config.backEndApiURL + 'user/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then((res) => {
                console.log(res.data.token)
                if (res.data.isEnterprise) {
                    this.createEntreprise(res.data.userId, res.data.token, res.data.isEnterprise)
                }
                else {
                    this.createPostulant(res.data.userId, res.data.token, res.data.isEnterprise)
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
                    <h1>Connexion</h1>
                    <p>Connectez-vous afin de trouver le collaboratuer ou l'entreprise de vos rêves</p>
                </div>
                <div className="section">
                    <div className='form-connection'>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <p className='intituleProfil'>E-mail</p>
                                <input type="text" value={this.state.email} onChange={this.handleEmail} className='inputConnexion' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='intituleProfil'>Mot de passe</p>
                                <input type="password" value={this.state.password} onChange={this.handlePassword} className='inputConnexion' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className='linkAccount' href="http://app.weallbackend.ch/inscription">Je n'ai pas de compte</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="connexionBtnDiv">
                                <button className='btn-neutral' onClick={() => this.login()}>
                                    Connexion
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
    createEntreprise(userid, token, isentreprise) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "entreprise/user/" + userid, headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                response = response.data
                if (response[0] === null) {
                    console.log("error in createEntreprise get")
                }
                else {
                    let benefice=[response[0].benefice_externe_1,response[0].benefice_externe_2,response[0].benefice_externe_3]
                    localStorage.setItem('entreprise', JSON.stringify({
                        nom: response[0].nom,
                        localite: response[0].localite,
                        type: response[0].type_entreprise,
                        secteur: response[0].secteur,
                        description: response[0].description,
                        adresse: response[0].adresse,
                        adresse_suplémentaire: response[0].adresse_suplémentaire,
                        NPA: response[0].NPA,
                        ethique: response[0].ethique,
                        label: response[0].label,
                        benefice: benefice,
                        logo: response[0].image_url,
                    }));
                    localStorage.setItem('responsable', JSON.stringify({
                        nom: response[0].nom_responsable_RH,
                        prenom: response[0].prenom_responsable_RH,
                        poste: response[0].poste_responsable_RH,
                        telephone: response[0].telephone_responsable_RH,
                    }));
                    this.createOffre(response[0].id_entreprise, token)
                    this.props.reduxUpdateUser({
                        token: token,
                        userId: userid,
                        isEnterprise: isentreprise,
                        isLogged: true
                    })
                    localStorage.setItem('user', JSON.stringify({
                        token: token,
                        userId: userid,
                        isEnterprise: isentreprise,
                        isLogged: true
                    }));
                }
            })
            this.props.history.push('/entreprise/profil');
    }
    createPostulant(userid, token, isentreprise) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "postulant/user/" + userid, headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                response = response.data
                if (response[0] === null) {
                    console.log("error in createProfil get")
                }
                else {
                    console.log(response[0])
                    localStorage.setItem('postulant', JSON.stringify({
                        id: response[0].id_postulant,
                        nom: response[0].nom,
                        prenom: response[0].prenom,
                        naissance: Moment(response[0].date_de_naissance).format('YYYY-MM-DD'),
                        sexe: response[0].sexe,
                        salaire_min: response[0].salaire_min,
                        salaire_max: response[0].salaire_max,
                        filtre: response[0].filtre,
                        disponibilite: response[0].disponibilite,
                        is_searchable: response[0].is_searchable,
                        description: response[0].description,
                        adresse: response[0].adresse,
                        adresse_suplement: response[0].adresse_suplement,
                        npa: response[0].npa,
                        localite: response[0].localite,
                        telephone: response[0].telephone,
                        url_photo: response[0].url_photo
                    }));
                    localStorage.setItem('user', JSON.stringify({
                        token: token,
                        userId: userid,
                        isEnterprise: isentreprise,
                        isLogged: true
                    }));
                    this.props.reduxUpdateUser({
                        token: token,
                        userId: userid,
                        isEnterprise: isentreprise,
                        isLogged: true
                    })
                    this.createFormation(response[0].id_postulant, token)
                    this.createExperience(response[0].id_postulant, token)
                    this.createCompetence(response[0].id_postulant, token)
                    this.createSoftskill(response[0].id_postulant, token)
                    this.createLangue(response[0].id_postulant, token)
                }
            })
            this.props.history.push('/postulant/profil');
    }
    createOffre(id, token) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "offre/entreprise/" + id, headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                response = response.data
                if (response[0] === null) {
                    console.log("error in createEntreprise get")
                }
                else {
                    let offres=[]
                    for(let i=0;i<response.length;i++){
                        offres.push({
                            poste:response[i].nom,
                            taux:response[i].taux,
                            contrat:response[i].contrat,
                            duree:response[i].duree,
                            dispo:Moment(response[i].dispo).format('YYYY-MM-DD'),
                            salaire:response[i].salaire_min+" - "+response[i].salaire_max,
                            url:response[i].url,
                            localite:response[i].NPA,
                            publish:response[i].is_searchable,
                            filtre: response[i].id_filtre_offre
                        })
                    }
                    localStorage.setItem('offre', JSON.stringify({
                        offre: offres
                    }));
                }
            })
    }
    createFormation(id, token) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "formation/postulant/" + id, headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {

                if (response[0] === null) {
                    console.log("pas de formation repertorié")
                }
                else {
                    response = response.data
                    let formations = []
                    for (let i = 0; i < response.length; i++) {
                        formations.push({
                            id: response[i].id_formation,
                            debut: Moment(response[i].date_debut).format('YYYY-MM-DD'),
                            fin: Moment(response[i].date_fin).format('YYYY-MM-DD'),
                            cursus: response[i].cursus,
                            institut: response[i].institut,
                            degree: response[i].degree,
                            diplome: response[i].diplome
                        })
                    }
                    localStorage.setItem('formation', JSON.stringify({
                        formations
                    }));
                }
            })
    }
    createExperience(id, token) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "experience/postulant/" + id, headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                if (response[0] === null) {
                    console.log("pas d'experience repertorié")
                }
                else {
                    response = response.data
                    let experiences = []
                    for (let i = 0; i < response.length; i++) {
                        experiences.push({
                            id: response[i].id_experience,
                            entreprise: response[i].entreprise,
                            poste: response[i].poste,
                            debut: Moment(response[i].date_debut).format('YYYY-MM-DD'),
                            fin: Moment(response[i].date_fin).format('YYYY-MM-DD'),
                            secteur: response[i].id_secteur,
                            pays: response[i].pays,
                            localite: response[i].localite,
                            npa: response[i].npa,
                            description: response[i].description,
                            actuelle: response[i].actuelle,
                        })
                    }
                    localStorage.setItem('experience', JSON.stringify({
                        experiences
                    }));
                }
            })
    }
    createCompetence(id, token) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "competence/postulant/" + id, headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                if (response[0] === null) {
                    console.log("pas de competence repertorié")
                }
                else {
                    response = response.data
                    let competence = []
                    for (let i = 0; i < response.length; i++) {
                        competence.push(response[i].competence)
                    }
                    localStorage.setItem('competence', JSON.stringify({
                        competence
                    }));
                }
            })
    }
    createSoftskill(id, token) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "softskill/postulant/" + id, headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                if (response[0] === null) {
                    console.log("pas de softskill repertorié")
                }
                else {
                    response = response.data
                    let softskill = []
                    for (let i = 0; i < response.length; i++) {
                        softskill.push(response[i].softskill)
                    }
                    localStorage.setItem('softskill', JSON.stringify({
                        softskill
                    }));
                }
            })
    }
    createLangue(id, token) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "langue/postulant/" + id, headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                if (response[0] === null) {
                    console.log("pas de langue repertorié")
                }
                else {
                    response = response.data
                    let langue = []
                    for (let i = 0; i < response.length; i++) {
                        console.log(response)
                        langue.push({
                            langue: response[i].langue,
                            niveau: response[i].niveau,
                            certificat: response[i].certificat,
                            obtention: Moment(response[i].obtention).format('YYYY-MM-DD'),
                            id_langue: response[i].id_langue,
                            sejours: response[i].sejours,
                        })
                    }
                    localStorage.setItem('langue', JSON.stringify({
                        langue
                    }));
                }
            })
    }
}



// Récupération des variables de Redux
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

// Mise à jour des variables de rédux

const mapDispatchToProps = (dispatch) => {
    return {
        reduxUpdateUser: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
