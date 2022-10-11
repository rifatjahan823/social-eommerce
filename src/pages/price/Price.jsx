import React from 'react';
import "./Price.css";

const Price = () => {
  return (
    <div className='container'>
      <div className='text-center'>
        <h3> Try all PRO features 7 days free.</h3>
        <p>Get everything done that you can ever imagine.</p>
        <button>Annualy, save 20%</button><button>Monthly</button>
      </div>
      <div className='d-flex justify-content-center align-items-center'>

        <div className='price-feature'>
          <div>
            <h4>Free</h4>
            <h4>$0/month</h4>
            <button>Start Using For Free</button>
            <p><i class="fa-solid fa-check"></i> 1 Instagram Business Account</p>
            <p><i class="fa-solid fa-check"></i> Auto Update</p>
            <p><s><i class="fa-solid fa-check"></i> Unlimited Story Widgets</s></p>
            <p><s><i class="fa-solid fa-check"></i> Unlimited Galleries</s></p>
            <p><s><i class="fa-solid fa-check"></i>Multiple Layouts & Options</s></p>
            <p><s><i class="fa-solid fa-check"></i>Convert to AMP Format</s></p>
            <p><s><i class="fa-solid fa-check"></i>API Access</s></p>
            <p><s><i class="fa-solid fa-check"></i>Team Sub-Accounts</s></p>
            <p><s><i class="fa-solid fa-check"></i>Advance Analytics</s></p>
          </div>
          <div>
            <h4>Pro</h4>
            <h4>$29/month</h4>
            <button>Try Free For 7 Days</button>
            <p><i class="fa-solid fa-check"></i> 1 Instagram Business Account</p>
            <p><i class="fa-solid fa-check"></i> Auto Update</p>
            <p><i class="fa-solid fa-check"></i> Unlimited Story Widgets</p>
            <p><i class="fa-solid fa-check"></i> Unlimited Galleries</p>
            <p><i class="fa-solid fa-check"></i>Multiple Layouts & Options</p>
            <p><i class="fa-solid fa-check"></i>Convert to AMP Format</p>
            <p><i class="fa-solid fa-check"></i>API Access</p>
            <p><s><i class="fa-solid fa-check"></i>Team Sub-Accounts</s></p>
            <p><s><i class="fa-solid fa-check"></i>Advance Analytics</s></p>
          </div>
          <div>
            <h4>Pro Plus</h4>
            <h4>$49/month</h4>
            <button>Try Free For 7 Days</button>
            <p><i class="fa-solid fa-check"></i> 3 Instagram Business Account</p>
            <p><i class="fa-solid fa-check"></i> Auto Update</p>
            <p><i class="fa-solid fa-check"></i> Unlimited Story Widgets</p>
            <p><i class="fa-solid fa-check"></i> Unlimited Galleries</p>
            <p><i class="fa-solid fa-check"></i>Multiple Layouts & Options</p>
            <p><i class="fa-solid fa-check"></i>Convert to AMP Format</p>
            <p><i class="fa-solid fa-check"></i>API Access</p>
            <p><s><i class="fa-solid fa-check"></i>Team Sub-Accounts</s></p>
            <p><s><i class="fa-solid fa-check"></i>Advance Analytics</s></p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Price