import React from 'react';

function Room2slideimg({activeIndex,Room2_Data}) {
    return (
        <section>
            {
               Room2_Data.map((slide,index)=>(
                   <div key={index} className={index===activeIndex?"slides active":"inactive"}>
                       <img className='slide-image' src={slide.img} alt=""/>
                   </div>
               )) 
            }
            
        </section>
    );
}

export default Room2slideimg;