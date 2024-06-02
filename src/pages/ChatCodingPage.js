import React, { useState } from 'react';
import Chat from '../components/Chat/Chat';
import CodeEditor from '../components/CodeEditor/CodeEditor';
import './ChatCodingPage.css';

function ChatCodingPage() {
  const [isChatVisible, setIsChatVisible] = useState(true);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div className="chat-coding-page">
      <div className={`side-panel ${isChatVisible ? '' : 'collapsed'}`}>
        <button onClick={toggleChatVisibility} className="toggle-chat-btn">
          {isChatVisible ? 'Hide Chat' : 'Show Chat'}
        </button>
        {isChatVisible && <Chat />}
      </div>
      <div className="center-panel">
        <CodeEditor />
      </div>
    </div>
  );
}

export default ChatCodingPage;
