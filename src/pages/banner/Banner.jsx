import React from 'react';
import "./Banner.css";
import banner1 from '../../Assets/banner-img-1.png';
import banner2 from '../../Assets/banner-img-2.png';
import banner3 from '../../Assets/banner-img-3.png';
import popup from '../../Assets/popup-free.png';
import instragam from '../../Assets/instragam.png';
import bannergroup from '../../Assets/Group-banner.png';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='container'>
        <div className="row g-4 align-items-center ">
          <div className="col-lg-7 col-md-6 col-12">
            <div className='banner-content'>
              <h3>Your own home to organize <br /> just  <span className='mark'>everything.</span></h3>
              <p>Turn chaos into productivity, organize everything that you can think of into beautiful home pages and become more focused.</p>
              <button>Try Now, It’s Free!</button>
              <small>No credit card required.</small>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            {/* <div className="row gx-1 align-items-center">
              <div className="col-lg-8 col-md-7 col-8 banner-right-img">
                <img className='img-fluid float-end' src={popup} alt="" />
                  <img className='img-fluid float-end' src={banner1} alt="" />
                  <img className='instragam-img' src={instragam} alt="" />
              </div>
              <div className="col-lg-4 col-md-5 col-4">
                  <img className='img-fluid float-start' src={banner2} alt="" />
                  <img className='img-fluid float-start' src={banner3} alt="" />
              </div>
            </div> */}
            <img className='img-fluid' src={bannergroup} alt="" />
          </div>
        </div>
        <p className='join'>JOIN THE BETA AND BE A PART OF SOMETHING AWESOME.</p>
      </div>
    </section>
  )
}

export default Banner