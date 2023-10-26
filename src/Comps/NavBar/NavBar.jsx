import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <div className="NavBar">

            <NavLink to="/" style={({ isActive }) => {
                return {
                    color: isActive ? "#000000" : ""
                };
            }}>Profile</NavLink>

            <NavLink to="/dialogs" style={({ isActive }) => {
                return {
                    color: isActive ? "#000000" : ""
                };
            }}>Messages</NavLink>

            <NavLink to="">News</NavLink>

                <NavLink to="">Music</NavLink>
                <br />
                <br />
                    <NavLink to="">Settings</NavLink>

        </div>
    )
}

export default NavBar;