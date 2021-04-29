import React from 'react'
import '../../styles/footer.scss'
import '../../styles/colors.scss'
import SocialMediaButtons from 'react-social-media-buttons';
import { colors } from '@material-ui/core';
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
                                buttonStyle={{ width: '50px', height: '50px', margin: '0px 10px', backgroundColor: '#2B2E42', borderRadius: '50%' }}
                                iconStyle={{ color: '#B6CDE8' }}
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