import './App.css';
import Header from './Comps/Header/Header';
import NavBar from './Comps/NavBar/NavBar';
import Profile from './Comps/Profile/Profile';
import Dialogs from './Comps/Dialogs/Dialogs';
import {Routes, Route, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import { useStore } from './storage.js';

export default function App (props) {
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

    //burger-menu
    

    return (
        <div className="App">
            <Header />

            <div className="menu">
        <nav className="menu-nav">
            <li><NavLink to="/">Profile</NavLink></li>
            <li><NavLink to="/dialogs">Messages</NavLink></li>
            <li><NavLink to="/News">News</NavLink></li>
            <li><NavLink to="/Settings">Settings</NavLink></li>
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