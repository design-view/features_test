import React from 'react';

function Dot2({activeIndex,onclick,Room2_Data}) {
    return (
        <div className='all-dots'>
            {
              Room2_Data.map((slide,index)=>(
                  <span key={index} className={`${activeIndex===index?"dot active-dot":"dot"}`}
                  onClick={()=>onclick(index)}></span>
              ))
            }
            
        </div>
    );
}

export default Dot2;