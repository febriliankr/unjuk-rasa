import React from "react";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Button } from "./Button";
import './Pricing.css'

function Pricing() {
    return (
      <IconContext.Provider value={{ color: '#fff', size: 56 }}>
        <div className='pricing__section'>
          <div className='pricing__wrapper'>
            <h1 className='pricing__heading'>Pricing</h1>
            <div className='pricing__container'>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <FaFire />
                  </div>
                  <h3>Basic</h3>
                  <h4>Rp100K</h4>
                  <p>one ticket</p>
                  <ul className='pricing__container-features'>
                    <li>1 Departement Package</li>
                    <li>Live Q&A Session</li>
                    <li>MCQ Quiz</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonStyle="btn--evoblue-light">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <BsXDiamondFill />
                  </div>
                  <h3>VIP</h3>
                  <h4>Rp200K</h4>
                  <p>one ticket</p>
                  <ul className='pricing__container-features'>
                    <li>1 Departement Package</li>
                    <li>Live Q&A Session</li>
                    <li>MCQ Quiz</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonStyle="btn--evoblue-dark">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <GiCrystalize />
                  </div>
                  <h3>Premium</h3>
                  <h4>Rp500K</h4>
                  <p>one ticket</p>
                  <ul className='pricing__container-features'>
                    <li>Free DVD Recording</li>
                    <li>1 hour Q&A Session</li>
                    <li>Free Merchandise</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonStyle="btn--evoblue-light">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    );
  }
  export default Pricing;