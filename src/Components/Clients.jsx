import React from 'react'
import AutoSlide from './AutoSlide';
import clientsImg1 from '../Images/clients-img-01.png';
import clientsImg2 from '../Images/clients-img-02.png';
import clientsImg3 from '../Images/clients-img-03.png';
import clientsImg4 from '../Images/clients-img-04.png';
import clientsImg5 from '../Images/clients-img-05.png';


function Clients() {

  const slidesData = [
    { id: '1', img: clientsImg1 },
    { id: '2', img: clientsImg2 },
    { id: '3', img: clientsImg3 },
    { id: '4', img: clientsImg4 },
    { id: '5', img: clientsImg5 }
  ]

  return (
    <div className='clients-main'>
      <div className="container">
        <AutoSlide slides={slidesData} noslides={5} breakpointsm={3} breakpointxsm={2} />
      </div>
    </div>
  )
}

export default Clients;