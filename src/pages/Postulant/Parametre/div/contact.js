import React from 'react'
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prénom: '',
            email: '',
            sujet: '',
            message: ''
        };
        // changement des input
        this.handleNom = this.handleNom.bind(this);
        this.handlePrenom = this.handlePrenom.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSujet = this.handleSujet.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        // gestion des actions des bouttons
        this.handleEnregistrer = this.handleEnregistrer.bind(this);
    }
    handleNom(event) {
        this.setState({ nom: event.target.value });
      }
      handlePrenom(event) {
        this.setState({ prénom: event.target.value });
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
        alert('Le nom a été soumis : ' + this.state.nom + " "+this.state.prénom);
        event.preventDefault();
      }
    render() {
        return (
            <div className='form'>
                <p className='subtitle'>Vous rencontrez un problème ou avez des questions? En remplissant le formulaire suivant, l'un de nos collaborateurs pourra vous aiguiller. </p>
                <div className='line'>
                    <div className='column'>
                        <input type="text" value={this.state.nom} onChange={this.handleNom} className='input' placeholder='Nom' />
                    </div>
                    <div className='column'>
                        <input type="text" value={this.state.prénom} onChange={this.handlePrenom} className='input' placeholder='Prénom' />
                    </div>
                </div>
                <div className='line'>
                    <div className='column'>
                        <input type="text" value={this.state.email} onChange={this.handleEmail} className='input' placeholder='E-mail' />
                    </div>
                    <div className='column'>
                        <select value={this.state.sujet} onChange={this.handleSujet} className='input' placeholder='Sujet'>
                            <option value="" disabled selected>Sujet</option>
                            <option value="0">Bug</option>
                            <option value="1">Aide</option>
                            <option value="2">Autre</option>
                        </select>
                    </div>
                </div>
                <textarea value={this.state.message} onChange={this.handleMessage} className='inputlongmonoline' placeholder='Message' />
                <div className="finalButtonZone">

                <button className='btn-neutral'onClick={this.handleEnregistrer}>Envoyer</button>
                </div>
            </div>
        );
    }
}