import React,{useEffect,useState} from 'react';
import { Room1_Data } from '../data/Room1_Data';
import Dot from './Dot';
import Room1slideimg from './Room1slideimg';
import './css/RoomSlide.css';

const len = Room1_Data.length-1
function Room1Slider() {
    const[activeIndex,setActiveIndex] = useState(0);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setActiveIndex(activeIndex===len?0:activeIndex+1);
        },3000);
        return()=> clearInterval(interval);
    },[activeIndex]);
    return (

        <div className='slider-containter'>
            <Room1slideimg activeIndex={activeIndex} Room1_Data={Room1_Data}/>
            <Dot activeIndex={activeIndex} Room1_Data={Room1_Data} onclick={activeIndex=>setActiveIndex(activeIndex)}/> 
        </div>
    );
}

export default Room1Slider;