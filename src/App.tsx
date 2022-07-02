import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {friendsType} from "./Redux/friends_reducer";
import {dialogsPageType} from "./Redux/dialogs_reducer";
import {postsType} from "./Redux/profile_reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer />}/>
                        <Route path='/profile'
                               element={<Profile />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;