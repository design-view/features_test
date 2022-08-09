import React,{useState} from 'react';
import {Link} from'react-router-dom';
import './css/MenuBar.css';
import MenuToggle from '../img/icon/toggle2.png';


const MenuBar = () => {
    const[submenutoggle,setSubmenutoggle]=useState(false);
    return (
        <div>
            <div className='MenuBar'>
                <h1><Link to="/">Features</Link></h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/facility">facility</Link></li>
                    <li><Link to="/rooms">rooms</Link></li>
                </ul>
                <div className="reservation"><Link to="/reservation">reservation</Link></div>
            </div>    
            <div className='MenuBar2'>
                <h1><Link to="/">Features</Link></h1>
                <div className='clickmenutoggle'>
                    <img src={ MenuToggle} onClick={()=>setSubmenutoggle(!submenutoggle)} alt=""/>
                </div>
            </div>
            {submenutoggle && <ul className='hidemenu'>
                        <li ><Link to="/about">About</Link></li>
                        <li ><Link to="/facility">facility</Link></li>
                        <li ><Link to="/rooms">rooms</Link></li>
                        <li ><Link to="/reservation">reservation</Link></li> 
                    </ul>   
                    }
        </div>
        
    );
}

export default MenuBar;