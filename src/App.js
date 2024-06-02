import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import VideoPage from './pages/VideoPage';
import ChatCodingPage from './pages/ChatCodingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/video" element={<VideoPage />} />
          <Route path="/chat-coding" element={<ChatCodingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
