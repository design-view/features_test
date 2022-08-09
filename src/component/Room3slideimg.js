import React from 'react';

function Room3slideimg({activeIndex,Room3_Data}) {
    return (
        <section>
            {
               Room3_Data.map((slide,index)=>(
                   <div key={index} className={index===activeIndex?"slides active":"inactive"}>
                       <img className='slide-image' src={slide.img} alt="" />
                   </div>
               )) 
            }
            
        </section>
    );
}

export default Room3slideimg;