import React, { useState } from 'react'
import Logo from "../assets/images/logo.png"
import { FaUser, FaUsers } from 'react-icons/fa';
import { RiUserVoiceFill, RiArrowDownSFill} from 'react-icons/ri';


const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showData, setShowData] = useState(false);

  const toggleMenus = (e) => {
    setShowLinks(!showLinks);
    setShowData(false);
  }

  const toggleData = (e) => {
    setShowLinks(false);
    setShowData(!showData);
  }


  return (
    <header>
      <div className='logo'>
        <img src={Logo} className='logo' alt='Hernalytics' />
      </div>

      <div className="nav">
        <ul className="navLinks">

          <li className="navLink">About Us</li>

          <li className= "navLink dropbtn" onClick={toggleMenus}>OUR COMMUNITIES <span className="title_icon"><RiArrowDownSFill size={20} /></span></li>
          <div className={showLinks ? "dropdown-content show" : "dropdown-content"}>
            <div className="dropdown-inner-content">
              <div className="dropdown-inner-content-icon">
                <FaUser size={18} />
              </div>
              <div className="dropdown-inner-content-desc">
                <p className="desc">General User</p>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>

            <div className="dropdown-inner-content">
              <div className="dropdown-inner-content-icon">
                <FaUsers size={18} />
              </div>
              <div className="dropdown-inner-content-desc">
                <p className="desc">Decide To Run (DTR)</p>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>

            <div className="dropdown-inner-content">
              <div className="dropdown-inner-content-icon">
                <RiUserVoiceFill size={18} />
              </div>
              <div className="dropdown-inner-content-desc">
                <p className="desc">Election Canditates</p>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>

            <div className="dropdown-inner-content">
              <div className="dropdown-inner-content-icon">
                <RiUserVoiceFill size={18} /> 
              </div>
              <div className="dropdown-inner-content-desc">
                <p className="desc">Reporters</p>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>
            </div>
          </div>

            <li className= "navLink" onClick={toggleData}>Election Data  <span className="title_icon"><RiArrowDownSFill size={20} /></span>
            <div className={showData ? "dropdown-content-2 showLink" : "dropdown-content-2"}>
              <p>Election Day Live Updates</p>
              <p>Post-Election Analysis</p>
            </div>
          </li>

          <li className="navLink">E-Buddy</li>
          <li className="navLink">VEO Platform</li>
          <li className="navLink">Login</li>

            <button className="signup">Sign Up</button>
        </ul>
      </div>
    </header>
  )
}

export default Header