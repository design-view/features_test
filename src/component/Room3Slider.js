import React,{useEffect,useState} from 'react';
import { Room3_Data } from '../data/Room3_Data';
import Dot3 from './Dot3';
import Room3slideimg from './Room3slideimg';
import './css/RoomSlide.css';

const len = Room3_Data.length-1
function Room3Slider() {
    const[activeIndex,setActiveIndex] = useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setActiveIndex(activeIndex===len?0:activeIndex+1);
        },3000);
        return()=> clearInterval(interval);
    },[activeIndex]);
    return (

        <div className='slider-containter'>
            <Room3slideimg activeIndex={activeIndex} Room3_Data={Room3_Data}/>
            <Dot3 activeIndex={activeIndex} Room3_Data={Room3_Data} onclick={activeIndex=>setActiveIndex(activeIndex)}/> 
        </div>
    );
}

export default Room3Slider;