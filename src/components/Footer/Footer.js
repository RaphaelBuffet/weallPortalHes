import React from 'react'
import './Footer.css'
import SocialMediaButtons from 'react-social-media-buttons';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="Container-footer">
                <div className="Row">
                    {/* 1er colonne*/}
                    <div className="Col-left">
                        <h3>A propos de nous</h3>
                        <ul className="list-unstyled">
                            <li> Lien 1 </li>
                            <li> Lien 2 </li>
                            <li> Lien 3 </li>
                            <li> Lien 4 </li>
                        </ul>
                    </div>
                    {/* 2e colonne*/}
                    <div className="Col-center">
                        <div className='social-button'>
                        <SocialMediaButtons
                            links={['https://www.facebook.com/weallstartup', 'https://www.instagram.com/weall_startup/', 'https://www.linkedin.com/company/weall-bex/']}
                            buttonStyle={{ width: '50px', height: '50px', margin: '0px 10px', backgroundColor: '#0065b3', borderRadius: '50%' }}
                            iconStyle={{ color: '#e8e8e8' }}
                            openNewTab={true}
                        />
                        </div>
                    </div>
                    {/* 3e colonne*/}
                    <div className="Col-right">
                        <h3>Application mobile</h3>
                        <ul className="list-unstyled">
                            <li>
                                <input type="text" placeholder="adresse e-mail" />
                            </li>
                            <li>
                                <button>
                                    être avertis de sa sortis
                                 </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="privacy">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Weall Sarl | Tous droit reservé | Condition d'utilisation | Politique de confidentialité
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer