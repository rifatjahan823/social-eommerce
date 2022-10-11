import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className=' footer_style '>
      <div className='container '>
      <div className='row'>
        <div className='col-md-4'>
          <h6>embedsocial</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id rhoncus suspendisse mattis ultricies adipiscing quam pretium eleifend.</p>
        </div>
        <div className='col-md-2'>
          <ul style={{ listStyle: 'none' }}>
            <li className='h6'>Product
            </li>
            <li>Reviews management
            </li>
            <li>Embed Instagram stories</li>
            <li>Display Instagram feeds</li>
            <li>Collect reviews</li>
            <li>Send email requests</li>
          </ul>
        </div>
        <div className='col-md-2'>
          <ul style={{ listStyle: 'none' }}>
            <li className='h6'>Company
            </li>
            <li>About EmbedSocial
            </li>
            <li>Brand Guidelines</li>
            <li>Press Kit</li>
            <li>Support</li>
          </ul>

        </div>
        <div className='col-md-2'>

          <ul style={{ listStyle: 'none' }}>
            <li className='h6'>Integrations
            </li>
            <li>WordPress
            </li>
            <li>Shopify</li>
            <li>Magento</li>
            <li>Squarespace</li>
            <li>Intercom</li>
            <li>Slack</li>
          </ul>
        </div>
        <div className='col-md-2'>
          <ul style={{ listStyle: 'none' }}>
            <li className='h6'>Integrations
            </li>
            <li>WordPress
            </li>
            <li>Shopify</li>
            <li>Magento</li>
            <li>Squarespace</li>
            <li>Intercom</li>
            <li>Slack</li>
          </ul>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Footer