import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <div className="NavBar">
            <nav id="navBar">
            <NavLink to="/">Profile</NavLink>

            <NavLink to="/dialogs/*">Messages</NavLink>

            <NavLink to="/News">News</NavLink>

            <NavLink to="/Music">Music</NavLink>
                <br />
                <br />
                <br />
                <br />
            <NavLink to="/Settings">Settings</NavLink>
            </nav>

        </div>
    )
}

export default NavBar;