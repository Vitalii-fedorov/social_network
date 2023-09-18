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

            <NavLink to="" style={({ isActive }) => {
                return {
                    color: isActive ? "#000000" : ""
                };
            }}>News</NavLink>

                <NavLink to="" style={({ isActive }) => {
                    return {
                        color: isActive ? "#000000" : ""
                    };
                }}>Music</NavLink>
                <br />
                <br />
                    <NavLink to="" style={({ isActive }) => {
                        return {
                            color: isActive ? "#000000" : ""
                        };
                    }}>Settings</NavLink>

        </div>
    )
}

export default NavBar;