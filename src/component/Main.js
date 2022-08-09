import React,{useState} from 'react';
import Slide from './Slide';
import {Link} from'react-router-dom';
import './css/Main.css';
import MainToggle from '../img/icon/toggle1.png';

const Header = () => {
    const[headertoggle,setHeadertoggle]=useState(false);

    return (
        <div className='wrap'>
            <header>
                <h1 className='logo'><Link to="/">Features</Link></h1>
                <ul className="menu">
                    <li className="submenu"><Link to="/about">About</Link></li>
                    <li className="submenu"><Link to="/facility">facility</Link></li>
                    <li className="submenu"><Link to="/rooms">rooms</Link></li>
                    <li className="submenu"><Link to="/reservation">reservation</Link></li>
                </ul>
            </header>
            <div className='header2'>
                <div className='clicktoggle'>
                    <img src={MainToggle} onClick={()=>setHeadertoggle(!headertoggle)} alt=""/>
                </div>
                {headertoggle && <ul>
                    <li ><Link to="/about">About</Link></li>
                    <li ><Link to="/facility">facility</Link></li>
                    <li ><Link to="/rooms">rooms</Link></li>
                    <li ><Link to="/reservation">reservation</Link></li> 
                </ul>
                }
            </div>
            <Slide />
        </div>
    );
}

export default Header;