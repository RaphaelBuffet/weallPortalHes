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
            checked: false
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
                            {/* <div className='column'>
                                <button className='btn'>
                                    Connexion
                        </button>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
        );
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
