import React from 'react'
import '../../../../styles/parametre.scss';
import '../../../../styles/profil.scss';
import '../../../../styles/button.scss';
import '../../../../styles/accordion.scss';
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
                <div className='block'>
                    <p className='intituleProfil'>Abonnement 1</p>
                    <div className="accordion">
                        <div className="subForm">
                            <table className="tableAbonnement">
                                <tbody>
                                    <tr>
                                        <td className="abonnementdescription">                                        
                                            <label className="swipeSubtitle">Offre: </label>
                                            <label>C'est l'offre de l'abonnement 1. Il est cool l'abonnement 1. Il est sympatoche, genre vraiment, il est cool.</label>
                                        </td>
                                        <td rowspan="2">
                                            <div className="btn-divRight">
                                                <button className="btn-neutral">Sélectionner</button>
                                            </div>      
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="abonnementprix">                                        
                                            <label className="swipeSubtitle">Prix:</label>
                                            <label >CHf 30.-</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='block'>
                    <p className='intituleProfil'>Abonnement 2</p>
                    <div className="accordion">
                        <div className="subForm">
                            <table className="tableAbonnement">
                                <tbody>
                                    <tr>
                                        <td className="abonnementdescription">                                        
                                            <label className="swipeSubtitle">Offre: </label>
                                            <label>Celle là, c'est l'offre de l'abonnement 2. Il est mieux que l'abonnement 1. Un abonnement franchement intéressant</label>
                                        </td>
                                        <td rowspan="2">
                                            <div className="btn-divRight">
                                                <button className="btn-neutral">Sélectionner</button>
                                            </div>      
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="abonnementprix">                                        
                                            <label className="swipeSubtitle">Prix:</label>
                                            <label>CHf 50.-</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='block'>
                    <p className='intituleProfil'>Abonnement 3</p>
                    <div className="accordion">
                        <div className="subForm">
                            <table className="tableAbonnement">
                                <tbody>
                                    <tr>
                                        <td className="abonnementdescription">                                        
                                            <label className="swipeSubtitle">Offre: </label>
                                            <label>Ca, c'est le top: L'abonnement 3. Nettement supérieur à l'abonnement 1 et 2. C'est le nec plus ultra des abonnements, la crème de la crème!</label>
                                        </td>
                                        <td rowspan="2">
                                            <div className="btn-divRight">
                                                <button className="btn-neutral">Sélectionner</button>
                                            </div>                              
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="abonnementprix">                                        
                                            <label className="swipeSubtitle">Prix:</label>
                                            <label>CHf 100.-</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}