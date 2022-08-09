import React,{useEffect} from 'react';
import MenuBar from './MenuBar';
import hotel_lobby from '../img/hotel-lobby.jpg';
import './css/About.css';
import Footer from './Footer';
// import Map from '../Map';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollTopButton from './ScrollTopButton';

const About = () => {
  useEffect(()=>{
    Aos.init();
  },[])

    return (
        <div>
          <MenuBar/>
          <div className='about'>
              <span className='deco'></span>
              <h1>About us</h1>
              <p>Features호텔앤리조트가 새롭게 선보이는 고전적 우아함과 현대적 감각의 특별한 경험이 시작됩니다</p>
              <img src={hotel_lobby} alt="#" data-aos="fade-right" />
          </div>
          <div className="intro">
              <h1 data-aos="fade-up">QUALITY MOMENTS,<br/> MEMORABLE PLEASURE</h1>
              <span data-aos="fade-up"></span>
              <div data-aos="fade-up">
                Features호텔앤리조트는 하와이에 있는 가장 큰 5성급호텔입니다.
                <br/>1910년에 개업한 이래 부단한 노력으로 하와이에서 가장 큰 사람을 받고 있습니다.
                <br/>로비에 들어서면 골든 우드톤이 세련미를 더하고 
                <br/>객실로 드는 순간
                탁 트인 천고와 넓은 로비가 휴식을 제공합니다.
              </div>
          </div>
          
          
          <div className='hotel_img'>
            <div className='text1'>
              <h1 data-aos="fade-up">JOURNEY TO DELIGHTFUL MOMENTS</h1>   
            </div> 
            <div className='text2'>
                  <p data-aos="fade-up">
                    
                    자연과 현대과 이루어진 공간에서<br/> 소중한 사람과
                    소중한 추억을 함께<br/> 간직할 수있게 
                    최고의 서비스와 편안함을<br/> 제공을 하도록 노력하겠습니다.

                  </p>
              </div>
          </div>
          
                      
          {/* <div className='location'>
            <h1 data-aos="fade-up">location</h1>
            <address data-aos="fade-up">
              2452 Features, Honolulu, HI 96814 USA
            </address>
            <Map data-aos="fade-up"/>
          </div> */}
          <ScrollTopButton/>
          <Footer/>
        </div>
    );
};

export default About;