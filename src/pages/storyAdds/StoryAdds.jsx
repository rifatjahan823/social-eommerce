import React from 'react';
import shop3 from '../../Assets/shop-3.png';
import story1 from '../../Assets/story-1.png';
import story2 from '../../Assets/story-2.png';
import './StoryAdds.css'

const StoryAdds = () => {
  return (
    <section className='story-add'>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 col-12">
            <div className="shop-content story-content">
              <h6> <img src={story1} alt="" /> Story Ads</h6>
              <h2 className='pe-3'>Boost your Instagram stories with few clicks</h2>
              <div className='d-flex align-items-start'>
                <img className='mt-2 me-2' src={shop3} alt="" />
                <p> Create Instagram Story Ads in just a few clicks</p>
              </div>
              <div className='d-flex align-items-start my-3'>
                <img className='mt-2 me-2' src={shop3} alt="" />
                <p> Archive Instagram Stories with EmbesStories and re-use them for Instagram Ads..</p>
              </div>
              <div className='d-flex align-items-start'>
                <img className='mt-2 me-2' src={shop3} alt="" />
                <p className='fw-bold'> This is an option that is not available in the Facebook Ads Manager. </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className='shop-img'>
              <img className='img-fluid' src={story2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryAdds