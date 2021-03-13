import './css/Chatapp.css';
function BottomBar(){
    return(
        <div className='bottom-container'>
            <div className="bottom-items">
               <input className="msg-input" placeholder="Type message here........" />
                <div className="send">
                <i className="fa fa-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}
export default BottomBar;