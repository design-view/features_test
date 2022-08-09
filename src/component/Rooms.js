import MenuBar from './MenuBar';
import Footer from './Footer';
import styled from 'styled-components/macro';
import React,{useEffect} from 'react';
import Room1Slider from './Room1Slider';
import Room2Slider from './Room2Slider';
import Room3Slider from './Room3Slider';
import './css/Rooms.css';
import icon1 from '../img/icon/icon1.png';
import icon2 from '../img/icon/icon2.png';
import icon3 from '../img/icon/icon3.png';
import icon4 from '../img/icon/icon4.png';
import icon5 from '../img/icon/icon5.png';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollTopButton from './ScrollTopButton';

const Room=styled.div`
    margin-top:100px;
    width:80%;
    height:50%;
    margin-left:8%;
    display:flex;
    position:relative;
    margin-bottom:120px;
    @media screen and (max-width: 1283px){
        width:90%;
    }
    @media screen and (max-width: 920px){
        width:100%;
    }

`;



const Roomintro=styled.div`
    width:40%;
    height:100%;
    background-color:#fff;
    position:absolute;
    top:0;
    left:50%;
    border:1px solid rgba(0,0,0,1);
    box-shadow: 2px 2px 2px #ccc;
   
  
    
`;


const Rooms = () => {
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        
        <div>
            <MenuBar/>
            <div className="rooms" > 
               <h1 data-aos="fade-right" >rooms</h1>
               <span className='decoroom'></span>
               <p data-aos="fade-right">
                   바다와 도시 풍경이 보여지는 방에서 휴식을 취해보세요.
                   <br/>같은 가격에 최고급 방을 제공 하고 있습니다. 
               </p> 
            </div>
           <Room>
                <Room1Slider/>
                <Roomintro className='roomintro'>
                    <h1>SUPERIOR</h1>
                    <ul>
                        <li>침대: 퀸</li>
                        <li>최대인원: 4인</li>
                    </ul>
                    <p><Link to="/reservation">예약하기</Link></p>
                    <div className='icons'>
                        <img src={icon1} alt=""/>
                        <img src={icon2} alt=""/>
                        <img src={icon3} alt=""/>
                        <img src={icon4} alt=""/>
                        <img src={icon5} alt=""/>
                    </div>
                </Roomintro>
                
           </Room>
           <Room>
                <Room2Slider/>
                <Roomintro className='roomintro'>
                    <h1>DELUXE</h1>
                    <ul>
                        <li>침대: 퀸</li>
                        <li>최대인원: 4인</li>
                    </ul>
                    <p><Link to="/reservation">예약하기</Link></p>
                    <div className='icons'>
                        <img src={icon1} alt=""/>
                        <img src={icon2} alt=""/>
                        <img src={icon3} alt=""/>
                        <img src={icon4} alt=""/>
                        <img src={icon5} alt=""/>
                    </div>
                </Roomintro>
                
           </Room>
           <Room>
                <Room3Slider/>
                <Roomintro className='roomintro'>
                    <h1>PRIMEIER</h1>
                    <ul>
                        <li>침대: 퀸</li>
                        <li>최대인원: 4인</li>
                    </ul>
                    <p><Link to="/reservation">예약하기</Link></p>
                    <div className='icons'>
                        <img src={icon1} alt=""/>
                        <img src={icon2} alt=""/>
                        <img src={icon3} alt=""/>
                        <img src={icon4} alt=""/>
                        <img src={icon5} alt=""/>
                    </div>
                </Roomintro>
                
           </Room>
           <ScrollTopButton/>
            <Footer/>
        </div>
    );
};

export default Rooms;