import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import "../css/Shaping.css";

function Shaping() {
    return (
        <div className='shaping'>
            <Navbar />
            <Outlet />  
        </div>
    );
}

export default Shaping;
