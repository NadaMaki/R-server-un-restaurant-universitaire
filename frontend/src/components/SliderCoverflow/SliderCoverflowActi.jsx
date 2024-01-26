
import React from 'react';

import Coverflow from "react-coverflow";


const SliderCoverflowActi = () => {


    var fn = function () {
                           }

    return (
   <div   >
     <Coverflow
    width={1000}
    height={400}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
  >
    <div
      onClick={() => fn()}
      onKeyDown={() => fn()}
      role="menuitem"
      tabIndex="0"
    >
      <img
        src="/acti/A1.jpg"
        alt='A1'
        style={{ display: 'block'  , height: 250, width: 300   }}
      />
    </div>

<img     src="/acti/A2.jpg"
         alt='A2' 
         style={{  height: 250, width: 300   }}
        />


<img     src="/acti/A3.jpg"
         alt='A3' 
         style={{  height: 250, width: 300   }}
        />

<img     src="/acti/A4.jpg"
         alt='A4' 
         style={{  height: 250, width: 300   }}
        />

<img     src="/acti/A5.jpg"
         alt='A5' 
         style={{  height: 250, width: 300   }}
        />

<img     src="/acti/A6.jpg"
         alt='A6' 
         style={{  height: 250, width: 300   }}
        />

<img     src="/acti/A7.jpg"
         alt='A7' 
         style={{  height: 250, width: 300   }}
        />

<img     src="/acti/A8.jpg"
         alt='A8' 
         style={{  height: 250, width: 300   }}
        />

        

        <img     src="/acti/A9.jpg"
         alt='A9' 
         style={{  height: 250, width: 300   }}
        />

<img     src="/acti/A10.jpg"
         alt='A10' 
         style={{  height: 250, width: 300   }}
        />

<img     src="/acti/A11.jpg"
         alt='A11' 
         style={{  height: 250, width: 300   }}
        />


<img     src="/acti/A12.jpeg"
         alt='A12' 
         style={{  height: 250, width: 300   }}
        />


  </Coverflow>
  </div>
    )
}

export default SliderCoverflowActi
