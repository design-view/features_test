import React from 'react';

function Dot3({activeIndex,onclick,Room3_Data}) {
    return (
        <div className='all-dots'>
            {
              Room3_Data.map((slide,index)=>(
                  <span key={index} className={`${activeIndex===index?"dot active-dot":"dot"}`}
                  onClick={()=>onclick(index)}></span>
              ))
            }
            
        </div>
    );
}

export default Dot3;