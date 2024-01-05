import {LOGO_URL} from "../utils/constants"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <a href="/">
            <img className="logo" src={LOGO_URL} alt="Food Fire Logo" />
        </a>
        <div className="nav-items">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header