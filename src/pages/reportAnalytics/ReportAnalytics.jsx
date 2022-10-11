import React from 'react'
import shop3 from '../../Assets/shop-3.png';
import report2 from '../../Assets/report-2.png';
import report1 from '../../Assets/report-1.png';
import './ReportAnalytics.css'
const ReportAnalytics = () => {
  return (
    <section className='report'>
      <div className="container">
        <div className="row g-4 align-items-center">
        <div className="col-md-6 col-12">
            <div className='shop-img'>
              <img className='img-fluid' src={report1} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="shop-content report-content">
              <h6> <img src={report2} alt="" /> Reports and Anayitics</h6>
              <h2 className='pe-3'>Create. Analyze. Grow.</h2>
              <div className='d-flex align-items-start'>
                <img className='mt-2 me-2' src={shop3} alt="" />
                <p> Analyze conversions, clicks, views</p>
              </div>
              <div className='d-flex align-items-start my-3'>
                <img className='mt-2 me-2' src={shop3} alt="" />
                <p> Compare metrics between products</p>
              </div>
              <div className='d-flex align-items-start'>
                <img className='mt-2 me-2' src={shop3} alt="" />
                <p >See the direct effect.
 </p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default ReportAnalytics