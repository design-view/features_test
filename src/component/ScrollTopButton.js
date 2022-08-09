import React,{useState,useEffect} from 'react';

function ScrollTopButton() {
    const[scroll,setScroll]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setScroll(true);
            }else{
                setScroll(false);
            }
        })
    })
    const scrollup=()=>{
       window.scrollTo({
           top:0,
           behavior:"smooth"
       })
    }

  
    
    return (
        <div>
            {scroll && (<button
            style={{
                position:"fixed", 
                bottom:"50px",
                right:"50px",
                height:"50px",
                width:"50px",
                fontSize:"50px",
                borderRadius:"50%",
                border:"1px solid skyblue",
                backgroundColor:"rgba(0,0,0,0.25)",
                textAlign:"center"

                
            }}
            onClick={scrollup}
            >up</button>

            )}
        </div>
    );
}

export default ScrollTopButton;