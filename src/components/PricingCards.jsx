import React from 'react';
import './PricingCards.css';

const PricingCards = () => {
  const plans = [
    {
      title: 'Starter',
      price: '$19.99',
      duration: 'per month',
      features: ['5GB Storage', 'Basic Support', 'Single User Access'],
      buttonText: 'Get Started',
      gradient: 'linear-gradient(135deg, #6DD5FA, #2980B9)',
    },
    {
      title: 'Pro',
      price: '$49.99',
      duration: 'per month',
      features: ['50GB Storage', 'Priority Support', '5 Users Access'],
      buttonText: 'Go Pro',
      gradient: 'linear-gradient(135deg, #FF9A9E, #FAD0C4)',
    },
    {
      title: 'Enterprise',
      price: '$99.99',
      duration: 'per month',
      features: ['Unlimited Storage', '24/7 Support', 'Unlimited Users'],
      buttonText: 'Contact Us',
      gradient: 'linear-gradient(135deg, #84FAB0, #8FD3F4)',
    },
  ];

  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="pricing-card"
          style={{ background: plan.gradient }}
        >
          <h2 className="pricing-title">{plan.title}</h2>
          <div className="pricing-price">
            {plan.price}
            <span className="pricing-duration">/{plan.duration}</span>
          </div>
          <ul className="pricing-features">
            {plan.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <button className="pricing-button">{plan.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
