import React from 'react'
import './ShoppableStory.css';
import shop1 from '../../Assets/shop-1.png';
import shop2 from '../../Assets/shop-2.png';
import shop3 from '../../Assets/shop-3.png';

const ShoppableStory = () => {
  return (
    <section className='ShoppableStory'>
      <div className="container">
        <div className='shop-title text-center'>
            <h1>More than just an organizer.</h1>
            <h1>Your complete <span className='mark p-0'>Productivity Partner.</span></h1>
        </div>
        <div className="row g-4 align-items-center shop">
            <div className="col-md-6 col-12">
               <div className='shop-img'>
               <img  src={shop1} alt="" />
               </div>
            </div>
            <div className="col-md-6 col-12">
                <div className="shop-content">
                      <h6> <img src={shop2} alt="" /> Shoppable Story</h6>
                    <h2> Make your Instagram Stories, Shoppable</h2>
                    <div className='d-flex align-items-start'>
                    <img className='mt-2 me-2' src={shop3} alt="" />
                    <p> Use the Call to Acton feature and add buy links to the Instagram stories</p>
                    </div>
                   <div className='d-flex align-items-start mt-3'>
                   <img className='mt-2 me-2' src={shop3} alt="" />
                    <p> Allow your web visitors to interact and directly buy the product showcased in the Instagram story.</p>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ShoppableStory