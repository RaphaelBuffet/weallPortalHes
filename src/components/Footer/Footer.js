import React from 'react'
import '../../styles/footer.scss'
import SocialMediaButtons from 'react-social-media-buttons';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="Container-footer">
                <div className="Row">
                    {/* 1er colonne*/}
                    <div className="Col-left">
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
                            &copy;{new Date().getFullYear()} Weall Sarl | Tous droit reservé | Condition d'utilisation | Politique de confidentialité
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer