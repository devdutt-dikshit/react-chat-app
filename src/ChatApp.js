import React, {useState} from 'react';
import './css/Chatapp.css';
import Navbar from './navbar'
import BottomBar from './Bottombar'



function ChatApp(){
    const [msg ,updatemsg]=useState('')
    return(
        <div className="main-container">
            <Navbar />
            <div className="msg-body">
            <Receive_msg />
            <Send_msg />
            </div>
            
            <div className='bottom-container'>
                <div className="bottom-items">
                <input className="msg-input" placeholder="Type message here........" />
                    <div className="send">
                    <i className="fa fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Receive_msg(){
    const MsgList=[
        "Excuse me sir, you dropped your wallet..",
        "I really appreciate your help",
        "You can also use this phrase to thank someone.",
        "Excuse me sir, you dropped your wallet..",
        "I really appreciate your help",
        "You can also use this phrase to thank someone.",
        "Excuse me sir, you dropped your wallet..",
        "I really appreciate your help",
        "You can also use this phrase to thank someone.",
    ]
    const listItems=MsgList.map((msg)=>{
        
        return     <div className="receiver-msg">
                <p className="user-name">Dev</p>
                <span className="receive-body">{msg}</span>
            </div>
     })
     return(
         <div>
         {listItems}
         </div>
     )
}
function Send_msg(){
    const MsgList=[
        "Thanks so much for the birthday money.",
        "I really appreciate your help",
        "You can also use this phrase to thank someone."
    ]
    const listItems=MsgList.map((msg)=>{
        
       return <div className="sender-msg">
            <p className="user-name">Manu</p>
            <span className="sender-body">{msg}</span>
        </div>  
    })
    return(
        <div>
        {listItems}
        </div>
    )
}

export default ChatApp;