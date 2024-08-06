import React, { useEffect } from 'react';
import slider1 from '../Images/hero-slider-1.jpg';
import slider2 from '../Images/hero-slider-2.jpg';
import slider3 from '../Images/hero-slider-3.jpg';

function Hero() {

    let i = 0;

    const sliderItems = [
        { id: '1', date: 'October 11, 2019', writter: 'Alisha Michals', title: 'Everyday Urban Concrete Jungle', imgurl: slider1, active: 'active' },
        { id: '2', date: 'December 14, 2018', writter: 'Alisha Michals', title: 'Amazon RainForest Experience', imgurl: slider2, active: '' },
        { id: '3', date: 'June 28, 2022', writter: 'Alisha Michals', title: 'Climbing In The Swiss Alps', imgurl: slider3, active: '' }
    ];

    // const HandleIndicatorClick = (e) => {
    //     const value = (e.target.value);
    //     i = value;
    //     console.log(i)
    // }

    useEffect(() => {
        const sliderInner = document.querySelectorAll('.slider-inner');

        const interval = setInterval(() => {
            if (i < sliderInner.length) {
                sliderInner.forEach(inner => {
                    inner.classList.remove('active');
                });
                sliderInner[i].classList.add('active');
                i++;
            }
            else { i = 0; }

        }, 4000);

        return () => clearInterval(interval);
    }, []);



    return (
        <section className="hero-main">
            <div className="slider-main">
                <div className="slider-item">

                    {sliderItems.map(item => (
                        <div className={`slider-inner ${item.active}`} key={item.id}>
                            <img src={item.imgurl} alt={item.title} className='slider-img' />
                            <div className="slider-caption">
                                <div className="slider-subtitle slider-reveal">
                                    <i className="bi bi-calendar-event"></i>{item.date} <i className="bi bi-pencil-fill"></i> {item.writter}
                                </div>
                                <div className="slider-title slider-reveal"><h3 className='display-5 fw-bolder'>{item.title}</h3></div>
                                <div className="slider-content slider-reveal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate repellendus provident iste architecto, saepe sed. Dolorum officiis consectetur illum. Rerum.</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero