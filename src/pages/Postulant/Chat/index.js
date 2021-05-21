import React from 'react'
import Navbar from '../../../components/Navbar/NavbarPostulant'
import '../../../styles/chat.scss';

class Chat extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">
          <Navbar />
        </div>
        <div className="main-page">
          <div className="section">
            <h1>Chat</h1>
            <p>&gt; Discutez avec les entreprises matchées et organisez un entretien !</p>
          </div>
          <div className='chat'>
            <p>En construction</p>
          </div>
        </div>
      </div>
    );
  }
}
  export default Chat;