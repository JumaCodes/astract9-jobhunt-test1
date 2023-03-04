import React from 'react'
import Map from "../assets/images/Frame.svg"
import ZoonIn from "../assets/images/zoomin.png"
import ZoonOut from "../assets/images/zoomout.png"
import "../assets/css/Ngmap.scss"

const Ngmap = () => {
  return (
    <div className='map-wrapper'>
      <div className="map-inner">
        <div className="iframe-wrapper">
          <iframe src={Map} frameborder="0" className="map"></iframe>
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
  )
}

export default Ngmap