import React from 'react';

function Dot({activeIndex,onclick,Room1_Data}) {
    return (
        <div className='all-dots'>
            {
              Room1_Data.map((slide,index)=>(
                  <span key={index} className={`${activeIndex===index?"dot active-dot":"dot"}`}
                  onClick={()=>onclick(index)}></span>
              ))
            }
            
        </div>
    );
}

export default Dot;