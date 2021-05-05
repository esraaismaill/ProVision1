import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Subscription Plans</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$0.00</h4>
                <p>per month</p>
                <h4>Free</h4>
                <ul className='pricing__container-features'>
                  <li>Store 5 scans</li>
                  <li>1 Guardian Access</li>
                </ul>
                <Link to='/sign-up-form' className='btn-link'>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
                </Link>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>$5.00</h4>
                <p>per month</p>
                <h4>Most Popular</h4>
                <ul className='pricing__container-features'>
                  <li>Store 20 scans</li>
                  <li>3 Guardian Access</li>
                </ul>
                <Link to='/sign-up-form' className='btn-link'>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
                </Link>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$7.50</h4>
                <p>per month</p>
                <h4>Best Option</h4>
                <ul className='pricing__container-features'>
                  <li>Store 50+ scans</li>
                  <li>5 Guardian Access</li>
                </ul>
                <Link to='/sign-up-form' className='btn-link'>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
