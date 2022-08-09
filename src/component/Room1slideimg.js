import React from 'react';

function Room1slideimg({activeIndex,Room1_Data}) {
    return (
        <section>
            {
               Room1_Data.map((slide,index)=>(
                   <div key={index} className={index===activeIndex?"slides active":"inactive"}>
                       <img className='slide-image' src={slide.img} alt=""/>
                   </div>
               )) 
            }
            
        </section>
    );
}

export default Room1slideimg;