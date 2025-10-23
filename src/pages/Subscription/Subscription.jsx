import React from 'react';
import './Subscription.scss'

const Subscription = () => {
  return (
    <section className='subscription'>
      <div className="subscription_container">
        <div className="subscription_card">
          <h1 className='subscription_plan'>Free</h1>
          <p className='subscription_price'>$0/m</p>
          <ul>
            <li>5 free calculations</li>
            <li>Daily support</li>
            <li>Consultations every month</li>
          </ul>
          <button>Used</button>
        </div>
        <div className="subscription_card">
          <h1 className='subscription_plan'>Premium</h1>
          <p className='subscription_price'>$9.99/m</p>
          <ul>
            <li>10 daily calculations</li>
            <li>24/7 Support</li>
            <li>Daily consultations with experts</li>
          </ul>
          <button>Get access</button>
        </div>
        <div className="subscription_card">
          <h1 className='subscription_plan'>VIP</h1>
          <p className='subscription_price'>$99.99/m</p>
          <ul>
            <li>Unlimited amount of calculations</li>
            <li>Top experts support</li>
            <li>Individual calls and meetings</li>
          </ul>
          <button>Get access</button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;