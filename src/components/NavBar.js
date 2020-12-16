import { React } from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{
    
    return ( <nav className="navbar navbar-expand navbar-dark bg-dark">
    <a href="/users" className="navbar-brand">
      Abdulrazak
    </a>
    <div className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={"/users"} className="nav-link">
          Users list
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/addnewuser"} className="nav-link">
          Add new user
        </Link>
      </li>
    </div>
  </nav>)
}

export default NavBar;