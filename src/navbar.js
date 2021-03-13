import './css/Chatapp.css';
function Navbar(){
    return(
        <div className='nav-container'>
            <div className="nav-items">
                <i className="fa fa-bars"></i>
                <h3>User Name</h3>
                <i className="fa fa-ellipsis-v"></i>
            </div>
        </div>
    )
}
export default Navbar;