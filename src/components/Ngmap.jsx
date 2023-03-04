import React from 'react'
import ZoonIn from "../assets/images/zoomin.png"
import ZoonOut from "../assets/images/zoomout.png"
import "../assets/css/Ngmap.scss"
import Map from './Map'

const Ngmap = () => {
  return (
    <section className="map-section">
    <div className='map-wrapper'>
      <div className="map-inner">
        <div className="iframe-wrapper">
            <Map />
        </div>

        <div className="info-wrapper">
          <div className="zoom-btns">
            <img src={ZoonIn} alt="ZoomIn Button" />
            <img src={ZoonOut} alt="ZZoomOut Button" />
          </div>

          <div className="party-info">
            <div className="party">
              <span className="color-blue"></span>
              <p>APC</p>
            </div>
            
            <div className="party">
              <span className="color-green"></span>
              <p>LP</p>
            </div>

            <div className="party">
              <span className="color-red"></span>
              <p>PDP</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
  )
}

export default Ngmap