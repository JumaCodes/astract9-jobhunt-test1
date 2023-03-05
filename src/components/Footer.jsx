import React from 'react'
import "../assets/css/Footer.scss"
import Logo from "../assets/images/logo.png"
import Instagram from "../assets/images/instagram.png"
import Twitter from "../assets/images/twitter.png"
import Whatsapp from "../assets/images/whatsapp.png"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="inner">
        <div className="footer-info break-words">
          <img src={Logo} alt="Logo" />
          <p>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria</p>
          <p>&copy; 2022 Hernalytics</p>
        </div>
        <div className="footer-info">
          <h5 className="title">About</h5>
          <ul className="links-wrapper">
            <li className="link">
              <a href="home">Our Story</a>
            </li>

            <li className="link">
              <a href="home">Blog</a>
            </li>

            <li className="link">
              <a href="home">About Hernalytics</a>
            </li>

            <li className="link">
              <a href="home">Videos</a>
            </li>
          </ul>
      </div>
        <div className="footer-info">
          <h5 className="title">Support</h5>
          <ul className="links-wrapper">
            <li className="link">
              <a href="home">FAQs</a>
            </li>

            <li className="link">
              <a href="home">Privacy Policy</a>
            </li>

            <li className="link">
              <a href="home">Terms of Service</a>
            </li>
          </ul>
      </div>
        <div className="footer-info">
          <h5 className="title">Let’s chat!</h5>
          <p className="space">hernalytics@gmail.com</p>
          <p className="space">+234 801 234 5678</p>

          <div className="footer-icons-wrapper">
            <img src={Instagram} alt="Instagram" />
            <img src={Twitter} alt="Twitter" />
            <img src={Whatsapp} alt="Whatsapp" />
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer