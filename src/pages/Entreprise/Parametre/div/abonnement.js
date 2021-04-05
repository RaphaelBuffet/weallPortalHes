import React from 'react'
import '../../../../styles/parametre.css';
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idoffre: '2'
        };
        // gestion des actions des bouttons
        this.handleOffre = this.handleOffre.bind(this);
    }
    handleOffre(event) {
        this.setState({ entreprise: event.target.value });
    }
    render() {
        return (
            <div className='form'>
                <div className='abonnementcontainer'>
                    <div className='abonnementdescription'>
                        <h2>Abonnement 1</h2>
                        <p>offre blblblblblblblblbblbl bbllblblblbblblbl blblblblblblbblblbl blblblbblblblbl</p>
                    </div>
                    <div className='abonnementprix'>
                        <p>CHf 100.-</p>
                        <button>Sélectionner</button>
                    </div>
                </div>
                <div className='abonnementcontainer'>
                    <div className='abonnementdescription'>
                        <h2>Abonnement 2</h2>
                        <p>offre blblblblblblblblbblbl bbllblblblbblblbl blblblblblblbblblbl blblblbblblblbl</p>
                    </div>
                    <div className='abonnementprix'>
                        <p>CHf 100.-</p>
                        <button>Sélectionner</button>
                    </div>
                </div>
                <div className='abonnementcontainer'>
                    <div className='abonnementdescription'>
                        <h2>Abonnement 3</h2>
                        <p>offre blblblblblblblblbblbl bbllblblblbblblbl blblblblblblbblblbl blblblbblblblbl</p>
                    </div>
                    <div className='abonnementprix'>
                        <p>CHf 100.-</p>
                        <button>Sélectionner</button>
                    </div>
                </div>

            </div>
        );
    }
}