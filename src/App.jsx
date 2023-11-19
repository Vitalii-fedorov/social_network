import './App.css';
import Header from './Comps/Header/Header';
import NavBar from './Comps/NavBar/NavBar';
import Profile from './Comps/Profile/Profile';
import Dialogs from './Comps/Dialogs/Dialogs';
import {Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";


export default function App (props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataRes = await fetch('http://localhost:8080/state.json');
                const jsonData = await dataRes.json();

                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);

    return (
        <div className="App">
            <Header />
            <div className='Gridd'>
                <NavBar />
                <Routes>
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/'} element={<Profile />} />
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/dialogs'} element={<Dialogs dialogsData={data ? data.dialogsPage.dialogsData : []} />} />
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/dialogs/:id'} element={<Dialogs dialogsData={data ? data.dialogsPage.dialogsData : []} />} />
                </Routes>
            </div>
        </div>
    );
}