import React from 'react';
import newsImg from '../Images/news-img-01.png';
import BtnCommon from './BtnCommon';

function NewsLetter() {
  return (
    <section className='news-letter-main'>
      <div className="container">
        <div className="news-content-main row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={newsImg} alt="News-Image" className='news-img' />
          </div>

          <div className="col-lg-6 d-flex justify-content-end flex-column">
            <div className="section-common-sub-heading"><h5>Lorem ipsum dolor</h5></div>
            <div className="section-common-heading"><h3 className='display-6 fw-bold'>Finding the perfect trails to hike is easy with<span> newsletter</span></h3></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore minim veniam, quism.</p>

            <form class="row needs-validation" novalidate>
              <div class="col-sm-6">
                <input type="text" class="form-control" placeholder='Name' id="validationCustom01" required />
              </div>
              <div class="col-sm-6">
                <input type="email" class="form-control" placeholder='E-Mail' id="validationCustom02" required />
              </div>
              <div class="col-12 d-flex justify-content-center mt-3">
                <BtnCommon text="Subscribe"/>
              </div>
            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default NewsLetter;