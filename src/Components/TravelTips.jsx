import React from 'react'
import Tilt from 'react-vanilla-tilt'
import travel from '../Images/travel-post-img-01.jpg'
import travel2 from '../Images/travel-post-img-02.jpg'
import BtnCommon from './BtnCommon';


function TravelTips() {
    return (
        <section className='travel-tips-main'>
            <div className="container">
                <div className="row">

                    <div className="col-12 text-center position-relative z-index-1">
                        <div className="travel-sub-heading section-common-sub-heading">
                            <h5>Lorem ipsum dolor</h5>
                        </div>
                        <div className="travel-heading section-common-heading">
                            <h3 className='display-5 fw-bold'>
                                Travel essentials <span>tips</span>
                            </h3>
                        </div>
                    </div>
                    {/* ---------->Travel-Card-1<---------- */}
                    <div className='travel-card-1 row'>
                        <div className="col-lg-6">
                            <div className="travel-img-main d-flex justify-content-center align-items-center">
                                <Tilt options={{ reverse: true, max: 95, glare: true }} style={{ width: "fit-content", padding: '0px' }} >
                                    <img src={travel} alt="blog-image" className='travel-img' />
                                </Tilt>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="travel-content-main">
                                <div className='travel-subtitle'>
                                    <h6> <i className="bi bi-calendar-event"></i> December 14, 2019 <i className="bi bi-pencil-fill ms-2"></i> by Alisa Michaels </h6>
                                </div>
                                <h3 className='travel-title'><a href="/">Moving Through: The Everyday Urban Jungle OF Your City</a></h3>
                                <p className='travel-discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam </p>
                                <BtnCommon text="Read More"/>
                            </div>
                        </div>
                    </div>

                    {/* ---------->Travel-Card-2<---------- */}
                    <div className='travel-card-2 row'>
                        <div className="col-lg-6 order-1 order-lg-0">
                            <div className="travel-content-main">
                                <div className='travel-subtitle'>
                                    <h6> <i className="bi bi-calendar-event"></i> June 28, 2022 <i className="bi bi-pencil-fill ms-2"></i> by Alisa Michaels </h6>
                                </div>
                                <h3 className='travel-title'><a href="/">Top Hicking Trails In The PEruvian Amazon Rain Forest</a></h3>
                                <p className='travel-discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam </p>
                                <BtnCommon text="Read More"/>
                            </div>
                        </div>
                        <div className="col-lg-6 order-0 order-lg-1">
                            <div className="travel-img-main d-flex justify-content-center align-items-center">
                                <Tilt options={{ reverse: true, max: 95, glare: true }} style={{ width: "fit-content", padding: '0px' }} >
                                    <img src={travel2} alt="blog-image" className='travel-img' />
                                </Tilt>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >

    )
}

export default TravelTips;