import './App.css';
import Header from './Comps/Header/Header';
import NavBar from './Comps/NavBar/NavBar';
import Profile from './Comps/Profile/Profile';
import Dialogs from './Comps/Dialogs/Dialogs';
import {Routes, Route, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import { useStore } from './storage.js';

export default function App () {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataRes = await fetch('https://raw.githubusercontent.com/Vitalii-fedorov/social_network/main/data/state.json');
                const jsonData = await dataRes.json();
                setData(jsonData);

                useStore.setState ({
                    dialogsPage: jsonData.dialogsPage,
                })

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    
    const handleNavLinkClick = () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('active');
        const menuBtn = document.querySelector('.menu-btn');
        menuBtn.classList.remove('active');
        console.log('Menu button NOT clicked');
    };

    return (
        <div className="App">
            <Header />

            <div className="menu">
        <nav className="menu-nav">
            <li><NavLink to="/" onClick={handleNavLinkClick}>Profile</NavLink></li>
            <li><NavLink to="/dialogs" onClick={handleNavLinkClick}>Messages</NavLink></li>
            <li><NavLink to="/News" onClick={handleNavLinkClick}>News</NavLink></li>
            <li><NavLink to="/Settings" onClick={handleNavLinkClick}>Settings</NavLink></li>
        </nav>
    </div>

            <div className='Gridd'>
                <NavBar />
                <Routes>
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/'} element={<Profile />} />
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/dialogs'} element={<Dialogs dialogsData={data ? data.dialogsPage.dialogsData : []} />} />
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/dialogs/*'} element={<Dialogs dialogsData={data ? data.dialogsPage.dialogsData : []} />} />
                </Routes>
            </div>
        </div>
    );
}