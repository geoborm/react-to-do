import React from 'react';
import Navbar from './components/Navbar';
import ToDo from './views/ToDo';
import PokeData from './views/PokeData';
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className='container'>
                <Navbar />
                <Routes>
                    <Route path = '/' element = {<ToDo/>}/>
                    <Route path = '/PokeData' element = {<PokeData/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
