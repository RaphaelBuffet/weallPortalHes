import React from 'react';
import axios from "axios";
import config from '../../config'
import { login } from "../../Store/User/UsersActions";
import { connect } from "react-redux";
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
                    this.createPostulant(res.data.userId, res.data.token)
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
                    
                    console.log("postulant")
                }
            })
            .catch((err) => {
                console.log(err)
                alert("Email ou mot de passe incorrect")
            })
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
                                <input type="text" value={this.state.email} onChange={this.handleEmail} className='input' />
                            </div>
                        </div>
                        <div className='line'>
                            <div className='column'>
                                <p className='intitulé'>Mot de passe</p>
                                <input type="password" value={this.state.password} onChange={this.handlePassword} className='input' />
                            </div>
                        </div>
                        <div className='line'>
                            <div className='column'>
                                <button className='btn' onClick={() => this.login()}>
                                    Connexion
                        </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
        );
    }
    createPostulant(userid, token) {
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
                        naissance: response[0].date_de_naissance,
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
                    this.createFormation(response[0].id_postulant, token)
                    this.createExperience(response[0].id_postulant, token)
                    this.createCompetence(response[0].id_postulant, token)
                    this.createSoftskill(response[0].id_postulant, token)
                    this.createLangue(response[0].id_postulant, token)
                    this.createSejours(response[0].id_postulant, token)
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
                            debut: response[i].date_debut,
                            fin: response[i].date_fin,
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
                            debut: response[i].date_debut,
                            fin: response[i].date_fin,
                            secteur: response[i].id_secteur,
                            pays: response[i].pays,
                            localite: response[i].localite,
                            npa: response[i].npa,
                            description: response[i].description
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
                            langue.push({
                                langue:response[i].langue,
                                niveau:response[i].niveau,
                                certificat:response[i].certificat,
                                obtention:response[i].obtention,
                                id_langue:response[i].id_langue
                            })
                    }
                    localStorage.setItem('langue', JSON.stringify({
                        langue
                    }));
                }
            })
    }
    createSejours(idPostulant, token) {
        axios({ method: 'get', url: config.backEndURL + config.backEndApiURL + "langue/sejours/" + idPostulant+"/", headers: { 'Authorization': 'Bearer ' + token } })
        .then((response)=> {
            response=response.data
            let sejour= []
            for(let i=0;i<response.length;i++){
                sejour.push({
                    pays:response[i].pays,
                    type:response[i].type,
                    debut: response[i].debut,
                    fin: response[i].fin,
                    id_langue: response[i].id_langue
                })
            }
            localStorage.setItem('sejours', JSON.stringify({
                sejour
            }));
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
