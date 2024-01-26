import React from 'react';

import Coverflow from "react-coverflow";


const SliderCoverflowServ = () => {


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
        src="/serv1000.png"
        alt='serv1000'
        style={{ display: 'block'  , height: 250, width: 300   }}
      />
    </div>

<img src="/serv1001.PNG"
         alt='serv1001' 
         
         style={{  height: 250, width: 300   }}
        />




  </Coverflow>
  </div>
    )
}

export default SliderCoverflowServ
