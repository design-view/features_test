import React,{useEffect,useState} from 'react';
import { Room2_Data } from '../data/Room2_Data';
import Dot2 from './Dot2';
import Room2slideimg from './Room2slideimg';
import './css/RoomSlide.css';

const len = Room2_Data.length-1
function Room2Slider() {
    const[activeIndex,setActiveIndex] = useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setActiveIndex(activeIndex===len?0:activeIndex+1);
        },3000);
        return()=> clearInterval(interval);
    },[activeIndex]);
    return (

        <div className='slider-containter'>
            <Room2slideimg activeIndex={activeIndex} Room2_Data={Room2_Data}/>
            <Dot2 activeIndex={activeIndex} Room2_Data={Room2_Data} onclick={activeIndex=>setActiveIndex(activeIndex)}/> 
        </div>
    );
}

export default Room2Slider;