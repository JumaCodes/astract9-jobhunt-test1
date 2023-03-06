import React from 'react'
import "../assets/css/Charts.scss"
import SmallerMap from './SmallerMap';
import MaleIcon from "../assets/images/male.png"
import FemaleIcon from "../assets/images/female.png"
import Donut from './Donut';

const PieChart = () => {
  return (
    <section className='charts'>
      <div className="chart-wrapper">
        <div className="donut-chart inner">
          <Donut />
        </div>

        <div className="map-chart inner">
          <h6>CANDIDATES BY GEOPOLITICAL ZONES</h6>
          <div className="map-info">
            <SmallerMap />
            <div className="region-info">
              <div className="info">
                <span className='info-green multi'></span>
                <p>North East</p>
                <div className="number">
                  <span>3000</span>
                </div>
              </div>

              <div className="info">
                <span className='info-gray multi'></span>
                <p>North West</p>
                <div className="number">
                  <span>3000</span>
                </div>
              </div>

              <div className="info">
                <span className='info-puple multi'></span>
                <p>North Central</p>
                <div className="number">
                  <span>3000</span>
                </div>
              </div>

              <div className="info">
                <span className='info-red multi'></span>
                <p>South West</p>
                <div className="number">
                  <span>3000</span>
                </div>
              </div>

              <div className="info">
                <span className='info-blue multi'></span>
                <p>South South</p>
                <div className="number">
                  <span>3000</span>
                </div>
              </div>

              <div className="info">
                <span className='info-cyn multi'></span>
                <p>South East</p>
                <div className="number">
                  <span>3000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gender-info inner">
          <div className="right-info">
            <h6>TOTAL ELECTED MEMBERS</h6>
            <p>10,000</p>
          </div>

          <div className="right-info">
            <h6>
              MALE
              <img src={MaleIcon} alt="MaleIcon" />
            </h6>
            <p>9,000</p>
          </div>

          <div className="right-info">
            <h6>
              FEMALE
              <img src={FemaleIcon} alt="FemaleIcon" />
            </h6>
            <p>1,000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PieChart