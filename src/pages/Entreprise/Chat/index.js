import React from 'react'
import Navbar from '../../../components/Navbar/NavbarEntreprise'
import '../../../styles/chat.css';
import ChatShell from './containers/shell/ChatShell';

function Chat() {
  return (<div>
    <div className="App">
      <Navbar/>
    </div>
    <div className="main-page">
          <div className="section">
            <h1>Chat</h1>
            <p>&gt; Discutez avec les entreprises matchées et organisez un entretien !</p>
          </div>
          <div className='chat'>
            <ChatShell/>
          </div>
        </div>
        
    </div>
  );
}

export default Chat;