import React,{useState,useEffect, useRef}from 'react';
import MenuBar from './MenuBar';
import Footer from './Footer';
import 'aos/dist/aos.css';
import main from '../img/facility/main/fc_main.jpg';
import Aos from 'aos';
import './css/Facility.css';
import ScrollTopButton from './ScrollTopButton';

// import swimming2 from '../img/facility/swimming_pool/sp2.jpg';
import swimming3 from '../img/facility/swimming_pool/sp3.jpg';
import swimming4 from '../img/facility/swimming_pool/sp4.jpg';
import sauna2 from '../img/facility/sauna/sauna2.jpg';
import sauna3 from '../img/facility/sauna/sauna3.jpg';
import sauna4 from '../img/facility/sauna/sauna4.jpg';
import fitness2 from '../img/facility/fitness/fitness2.jpg';
import fitness3 from '../img/facility/fitness/fitness3.jpg';
// import fitness4 from '../img/facility/fitness/fitness4.jpg';
import restaurant2 from '../img/facility/restaurant/restaurant2.jpg';
import restaurant3 from '../img/facility/restaurant/restaurant3.jpg';
import restaurant4 from '../img/facility/restaurant/restaurant4.jpg';


const Facility = () => {
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);
    const sectionsp =useRef(null);
    // const image1 =useRef(null);
    const [position,setPostion]=useState(0);
    const[background,setBackground]= useState(false);
    const[background1,setBackground1]= useState(false);
    const[background2,setBackground2]= useState(false);
    const[background3,setBackground3]= useState(false);
    const[sptoggle,setSptoggle]=useState(false);
    const[saunatoggle,setSaunatoggle]=useState(false);
    const[fitnesstoggle,setFitnesstoggle]=useState(false);
    const[restauranttoggle,setRestauranttoggle]=useState(false);
    console.log(position)
    const swimmingBackground=()=>{
        if(section1.current.offsetTop<=window.scrollY &&window.scrollY<section2.current.offsetTop){
            setBackground(true);

        }else{
            setBackground(false);
        }
    }
    const saunaBackground=()=>{
        if(section2.current.offsetTop<=window.scrollY && window.scrollY<section3.current.offsetTop){
            setBackground1(true);
          
        }else{
            setBackground1(false);
            
        }
    }
    
    const facilityBackground=()=>{
        console.log();
        if(section3.current.offsetTop<=window.scrollY && window.scrollY<section4.current.offsetTop ){
            setBackground2(true);
           
            
        }else{
            setBackground2(false);
         
        }
           
        
    }
    const restaurantBackground=()=>{
        if(window.scrollY >=section4.current.offsetTop){
            setBackground3(true);
          
         
        }else{
            setBackground3(false);
            
        }
    }
    window.addEventListener('scroll',swimmingBackground);
    window.addEventListener('scroll',saunaBackground);
    window.addEventListener('scroll',facilityBackground);
    window.addEventListener('scroll',restaurantBackground);

    // const sp_appear=sectionsp.current.offsetTop;

    function onScroll(){
        console.log(window.scrollY);
        setPostion(window.scrollY);
    }   
    // const swimminglist=[swimming pool]
    
    useEffect(()=>{
        
        window.addEventListener('scroll',onScroll)
        return ()=>{
            window.removeEventListener('scroll',onScroll)
        
    }},[])

    
    useEffect(()=>{
        Aos.init();
    },[])
    
    return (
        <div>
           <MenuBar/>
           <div className="facility"> 
               <h1 data-aos="fade-right" >facility</h1>
               <p data-aos="fade-left">
                    ????????? ????????? ???????????? ????????? ?????????, ????????? ????????? ?????? ?????? ?????????, ????????? ???????????? ????????? ?????? ???????????? ??????,
                    <br/>????????? ????????? ?????? ???????????? ????????? ????????? ????????? ???????????? ??????????????? ?????? ????????? ????????? ????????? ???????????????.
               </p>
               <img data-aos="fade-left" src={main}  alt="??????"/>
           </div>
            <div className={background? "color":"swimming_pool"} ref={section1} data-aos="fade-up" > 
            
                <div className="sp_content"  data-aos="fade-up">
                    <h2 className="title" >
                        Swimming Pool</h2>                                                                                                                               
                    {/* <figure className="sp_area">
                        <img src={swimming1} />
                        
                    </figure> */}
                </div>

                <div>                                                                                                                                            
                    <figure className="sp_area2">
                        <p  ref={sectionsp} data-aos="fade-up">
                            ??? ?????? ????????? ?????????  <br/>?????? ??????????????? ?????? ?????????<br/> ???????????????.
                        </p>
                        <img src="/img/facility/swimming_pool/sp2.jpg" data-aos="fade-up" alt="" />
                        
                    </figure>
                </div>
                
                <div className='sp_last' >                                                                                               
                    <figure className="sp_area3" data-aos="fade-up" >
                        <img src={swimming3} alt=""/>
                        <figcaption >???????????? ????????? ?????? ?????????</figcaption>
                    </figure>
                    <figure className="sp_area4" data-aos="fade-up">
                        <img src={swimming4} alt=""/>
                        <figcaption >????????? ?????? ?????????</figcaption>
                    </figure>
                    
                </div>
               <figure className='sp_box'>
                    <figure className='sp_more' onClick={()=>setSptoggle(!sptoggle)}>????????? <strong>+</strong></figure>
                    {sptoggle && <figure className='sp_info'>
                        <figcaption>????????????: 09:00~21:00</figcaption>
                        <figcaption>??????: 8000???</figcaption>
                        <figcaption>?????????: 6000???</figcaption>
                        <figcaption>?????????: 4000???</figcaption>
                    </figure>
                    }
                </figure>
            </div>

            {/* ????????? */}
            <div className={background1? "color2" : 'sauna'} ref={section2}> 
            
                <div className="sauna_content" >
                    <h2 data-aos="fade-right" className="title">Sanuna</h2>                                                                                                                               
                    {/* <figure className="sauna_area">
                        <img src={sauna1} data-aos="fade-right" />
                        
                    </figure> */}
                </div>

                <div>                                                                                                                                            
                    <figure className="sauna_area2">
                        <p data-aos="fade-up">
                            ???????????? ????????????  <br/>?????? ????????? ???????????????.
                        </p>
                        <img src={sauna2} data-aos="fade-up" alt=""/>
                        
                    </figure>
                </div>
                
                <div className='sauna_last'>                                                                                               
                    <figure className="sauna_area3">
                        <img src={sauna3} data-aos="fade-right" alt=""/>
                        <figcaption data-aos="fade-right">????????? ????????? ???????????? ????????????</figcaption>
                    </figure>
                    <figure className="sauna_area4">
                        <img src={sauna4} data-aos="fade-up" alt=""/>
                        <figcaption data-aos="fade-up">????????? ?????? ?????????</figcaption>
                    </figure>
                    
                </div>
                <figure className='sauna_box'>
                    <figure className='sauna_more' onClick={()=>setSaunatoggle(!saunatoggle)}>????????? <strong>+</strong></figure>
                    {saunatoggle && <figure className='sauna_info'>
                        <figcaption>????????????: 09:00~21:00</figcaption>
                        <figcaption>??????: 8000???</figcaption>
                        <figcaption>?????????: 6000???</figcaption>
                        <figcaption>?????????: 4000???</figcaption>
                    </figure>
                    }
                </figure>
            </div>
            {/* fitness */}
            <div className={background2?"fitness color3":"fitness"} ref={section3}>  
                
                <div className="fitness_content">
                    <h2 className="title" data-aos="fade-up">fitness</h2>                                                                                                                               
                    {/* <figure className="fitness_area">
                        <img src={fitness1} data-aos="fade-up"/>
                        
                    </figure> */}
                </div>

                <div>                                                                                                                                            
                    <figure className="fitness_area2">
                        <p data-aos="fade-up">
                            ?????? ???????????? <br/>?????? ??????????????? <br/>????????? ????????????.
                        </p>
                        <img src={fitness2} data-aos="fade-up" alt=""/>
                        
                    </figure>
                </div>
                
                                                                                                            
                <figure className="fitness_area3">
                    <img src={fitness3} data-aos="fade-up" alt=""/>
                    <figcaption data-aos="fade-up">???????????? ????????? ??????<br/> ???????????? ?????????<br/> 24?????? ???????????????</figcaption>
                </figure>
                <figure className='fitness_box'>
                    <figure className='fitness_more' onClick={()=>setFitnesstoggle(!fitnesstoggle)}>?????????<strong>+</strong></figure>
                    {fitnesstoggle && <figure className='fitness_info'>
                        <figcaption>????????????: 24??????</figcaption>
                        <figcaption>??????: 8000???</figcaption>
                        <figcaption>?????????: 6000???</figcaption>
                        <figcaption>?????????: 4000???</figcaption>
                    </figure>
                    }  
                </figure>
            </div>
            {/* restaurant */}
            <div className={background3?'color4':'restaurant'} ref={section4}> 
                    
                    <div className="restaurant_content">
                        <h2  className="title">restaurant</h2>                                                                                                                               
                        {/* <figure className="restaurant_area">
                            <img src={restaurant1} data-aos="fade-up"/>
                            
                        </figure> */}
                    </div>

                    <div>                                                                                                                                            
                        <figure className="restaurant_area2">
                            <img src={restaurant2} data-aos="fade-up" alt=""/>
                            <div className='restaurant_text'>
                                <p data-aos="fade-up">??????????????? ???????????? ????????????<br/> ?????????????????? ??????<br/>  ????????? ????????? ???????????????.  </p>
                                <img src={restaurant3} data-aos="fade-up" alt=""/>
                            </div>
                           
                        </figure>
                    </div>
                    
                    <div className='restaurant_last'>                                                                                               
                        <figure className="restaurant_area3">
                            <figcaption data-aos="fade-up">????????? ????????? ?????? <br/>????????? 2????????? ??????<br/> ????????? ????????? ???????????????.</figcaption>
                            <img src={restaurant4} data-aos="fade-up" alt=""/>
                        </figure>
                    <figure className='restaurant_box'>
                        <figure className='restaurant_more' onClick={()=>setRestauranttoggle(!restauranttoggle)}>?????????<strong>+</strong></figure>
                        {restauranttoggle && <figure className='restaurant_info' >
                            <figcaption>????????????: 09:00~21:00</figcaption>
                            <figcaption>??????: ??????</figcaption>
                        </figure>
                        }
                    </figure>
                    
                    </div>
            </div>
            <ScrollTopButton/>
            <Footer/>
        
        </div>
    );
}

export default Facility;