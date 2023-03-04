import React, { useState } from 'react'
import "../assets/css/Hero.scss"
import {MdKeyboardArrowDown} from "react-icons/md"


const Hero = () => {
  const [electionData, setElectionData] = useState("Election Data");
  const [electionInfo, setElectionInfo] = useState("Presidential");
  const [electionYear, setElectionYear] = useState("2023");
  const [showValue, setShowValues] = useState(false);
  const [showproceedings, setShowProceedings] = useState(false);
  const [showYear, setShowYear] = useState(false);

  const showData = () => {
    setShowValues(!showValue);
    setShowYear(false);
    setShowProceedings(false);
  }

  const showSecondData = () => {
    setShowProceedings(!showproceedings);
    setShowValues(false);
    setShowYear(false)
  }

  const showThirdData = () => {
    setShowYear(!showYear);
    setShowProceedings(false);
    setShowValues(false);
  }

  return (
    <section className="hero">
      <div className="title-data">
        <h2>Post Election Data</h2>
        <div className="date">
          <p>
            Presidential <span className="slash">/</span> 2023
          </p>
        </div>
      </div>

      <div className="data">
        <h6>Presidential Race</h6>

        <div className="form-info">
          <div className="select">
            <div className="value"  onClick={showData}>
              <p  className="flex">{electionData} <MdKeyboardArrowDown /></p>
            </div>
            {showValue &&
              <div className={showValue ? "select-data show-data" : "select-data"}>
            <p>Pre-Election</p>
            <p>Election Day Live Updates</p>
            <p>Post-Election Analysis</p>
            </div>
            }
          </div>
          
          <div className="select">
            <div className="value" onClick={showSecondData}>
              <p  className="flex">{electionInfo} <MdKeyboardArrowDown /></p>
            </div>
            {showproceedings &&
              <div className={showproceedings ? "select-data show-data" : "select-data"}>
                <p>Gubernatorial</p>
                <p>Senate</p>
                <p>House of Representatives</p>
              </div>
            }
          </div>

          <div className="select">
            <div className="value" onClick={showThirdData}>
              <p className="flex">{electionYear} <MdKeyboardArrowDown /></p>
            </div>
            {showYear &&
              <div className={showYear ? "select-data show-data" : "select-data"}>
                <p>2019</p>
                <p>2015</p>
                <p>2011</p>
                <p>2007</p>
                <p>2003</p>
                <p>1999</p>
                <p>1995</p>
                <p>1991</p>
                <p>1987</p>
              </div>
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero