import React from 'react'
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entreprise: '',
            email: '',
            sujet: '',
            message: ''
        };
        // changement des input
        this.handleEntreprise = this.handleEntreprise.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSujet = this.handleSujet.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        // gestion des actions des bouttons
        this.handleEnregistrer = this.handleEnregistrer.bind(this);
    }
    handleEntreprise(event) {
        this.setState({ entreprise: event.target.value });
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleSujet(event) {
        this.setState({ sujet: event.target.value });
    }
    handleMessage(event) {
        this.setState({ message: event.target.value });
    }
    handleEnregistrer(event) {
        alert('Le nom a été soumis : ' + this.state.entreprise);
        event.preventDefault();
    }
    render() {
        return (
            <div className='form'>
                <p className='intitulé'>Vous rencontrez un problème ou avez des questions ? Remplissez le formulaire suivant :</p>
                <div className='line'>
                    <div className='column'>
                        <input type="text" value={this.state.entreprise} onChange={this.handleEntreprise} className='input' placeholder='Entreprise' />
                    </div>
                    <div className='column'>
                        <input type="text" value={this.state.email} onChange={this.handleEmail} className='input' placeholder='E-mail' />
                    </div>
                </div>
                <div className='line'>
                    <div className='column'>
                        <select value={this.state.sujet} onChange={this.handleSujet} className='input' placeholder='Sujet'>
                            <option value="" disabled selected>Sujet</option>
                            <option value="0">Bug</option>
                            <option value="1">Aide</option>
                            <option value="2">Autre</option>
                        </select>
                    </div>
                </div>
                <textarea value={this.state.message} onChange={this.handleMessage} className='inputlong-mono' placeholder='Message' />
                <button className='btn-enregistrer' onClick={this.handleEnregistrer}>envoyer</button>
            </div>
        );
    }
}