import React from 'react';

import Coverflow from "react-coverflow";


const SliderCoverflow = () => {
<h1> ba </h1>

    var fn = function () {
                           }

    return (
   <div  style={{ marginBottom: '50px' }} >
     <Coverflow
    width={200}
    height={200}
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
        src="/imageP1.jpeg"
        alt='Esprit'
        style={{ display: 'block', width: '100%' }}
      />
    </div>

<img src="/imageP2.jpeg"
         alt='ANETI' />

 <img src="/imageP3.jpeg"
         alt='UNICEF' />

<img src="/imageP4.jpeg"
         alt='Cité des sciences' />

<img src="/imageP5.jpeg"
         alt='CONECT' />

<img src="/imageP6.jpeg"
         alt='IECD' />

<img src="/imageP7.jpeg"
         alt='MEDNC' />

<img src="/imageP8.jpeg "
         alt='Munici palité Tunis' />

<img src="/imageP9.jpeg"
         alt='PCPA' />

<img src="imageP10.jpeg"
         alt='Tunisia88' />

<img src="imageP11.jpeg"
         alt='Ambassade Suisse' />




  </Coverflow>
  </div>
    )
}

export default SliderCoverflow
