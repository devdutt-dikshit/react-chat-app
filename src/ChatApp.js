import React from 'react';
import './css/Chatapp.css';
import Navbar from './navbar'
import BottomBar from './Bottombar'

function ChatApp(){
    return(
        <div className="main-container">
            <Navbar />
            <BottomBar />
        </div>
    )
}

export default ChatApp;