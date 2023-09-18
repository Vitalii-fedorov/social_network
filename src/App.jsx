import './App.css';
import Header from './Comps/Header/Header';
import NavBar from './Comps/NavBar/NavBar';
import Profile from './Comps/Profile/Profile';
import Dialogs from './Comps/Dialogs/Dialogs';
import {Routes, Route} from "react-router-dom";

const App = (props) => {
//dskflodjgkofsdhgjif
    return (
        <div className="App">
            <Header />
            <div className='Gridd'>
                <NavBar />
                <Routes>
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/'} element={<Profile />} />
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/dialogs'} element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} />} />
                    {/* eslint-disable-next-line react/prop-types */}
                    <Route path={'/dialogs/:id'} element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
