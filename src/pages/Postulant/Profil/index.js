import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import '../../../styles/profil.scss';
import '../../../styles/button.scss';
import Accordion from '../../../components/Accordion/Accordion'
import InfoPersonelle from './div/InfoPersonelle'
import Formation from './div/Formation'
import Experience from './div/Experience'
import Competence from './div/Competence'
import Langue from './div/Langue'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { FaInfoCircle } from 'react-icons/fa';

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publish: true
    };
  }
  handlePublish(){
    let status = JSON.parse(localStorage.getItem("postulant"))
    if(status!=null){
      console.log(status)
      console.log(status.is_searchable)
    if(status.is_searchable===1){
      this.setState({publish:true})
    }
    else{
      this.setState({publish:false})
    }
    }
    /*else{
      setTimeout(function(){
        console.log(status)
        window.location.reload(false);
      },600
      )
    }*/
      
  }
  componentDidMount(){
    this.handlePublish()
  }
  handleToogle() {
    let publish = !this.state.publish
    this.setState({ publish: publish })
    console.log("test")
  }
  render() {
    return (
      <div>
        <div className="Header">
          <Navbar />
        </div>
        <div className="main-page">
          <div className="section">
            <h1>Votre Profil</h1>
            <p>Créez votre profil pour commencer vos recherches !</p>
          </div>
          <div className="section">
            <Accordion  title="Infomations Personelle">
              <InfoPersonelle />
            </Accordion>
          </div>
          <div className="section">
            <Accordion title="Formations">
              <Formation />
            </Accordion>
          </div>
          <div className="section">
            <Accordion title="Experiences professionnelles">
              <Experience />
            </Accordion>
          </div>
          <div className="section">
            <Accordion title="Langues">
              <Langue />
            </Accordion>
          </div>
          <div className="section">
            <Accordion title="Compétences et Softskills">
              <Competence />
            </Accordion>
          </div>

          <div className='section'>
            <div className="line">
              <div className="column">
                <div>
                  <FormControlLabel
                    control={<Switch checked={this.state.publish} onChange={() => this.handleToogle()} color="primary" name="checkedA" />}
                    label={this.state.publish ? 'Profil actif et disponible à la recherche' : 'Profil indisponible à la recherche'}
                  />
                  <table class="tg">
                    <thead>
                      <tr>
                        <th rowspan="2">
                          <FaInfoCircle className='icon' />
                        </th>
                        <th>
                          <p className="info">Désactiver cette option empêche les recruteurs de voir le profil</p>
                        </th>
                      </tr>
                      <tr>
                        <td>
                        <p className="info">Le chat reste néanmoins accessible avec les entreprises matchées.</p>
                          </td>
                      </tr>
                    </thead>
                  </table>
                </div>

              </div>
              <div className="column">
                <div className="btn-divRight">
                  <button className='btn-neutral'>Aperçus profil</button>
                  <button className='btn-neutral'>Commencer la recherche</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Profil;