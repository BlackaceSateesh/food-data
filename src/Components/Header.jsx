import { NavLink } from "react-router-dom";
import "../Components/Header.css"
const Header = () => {
    return (
     <>
     <div className="header-main">
        <div className="logo-section">
            <div >< img className="logo-icon" src="../images/restaurant_48px.svg" alt="web-logo" /></div>
            <h1 className="web-name">Food's Restraurant</h1>
        </div>

        <div className="login-register">
            <button className="signin"><NavLink to="/user/signin" >Login</NavLink></button>
            <button className="signin"><NavLink to="/user/signup" >Register</NavLink></button>
            <button className="signin"><NavLink to="/menu/order">cart</NavLink></button>
            </div>
     </div>
     </>
    );
  }
  
  export default Header;