import React from "react";
import "./AboutUs.css";
import network_pic from "../../images/network-pic.jpg";
import vedant_dp from "../../images/dp/vedant_dp.jpeg";
import joy_dp from "../../images/dp/joy_dp.jpeg";
import anish_dp from "../../images/dp/anish_dp.jpeg";
import naman_dp from "../../images/dp/naman_dp.png";
import { Image } from "react-bootstrap";
import instagram_icon from "../../images/social-icons/instagram-icon.png";
import email_icon from "../../images/social-icons/mail-icon.png";
import linkedin_icon from "../../images/social-icons/linkedin-icon.png";
import { useHistory } from "react-router";
//import anish_dp from "../../images/dp/anish2.jpeg"
//import anish_dp from "../../images/dp/anish3.jpeg"
import Navbars from "../Navbar/Navbar.jsx"
function Aboutus() {
  const history = useHistory();
  function handle()
  {
    history.push("/contact");
  }
  return (
    <div className="about_page">
   
      <section id="name_sec" className="contain" >
        <div className="name_sec_upper" >
          <h1>Meet Our Team</h1>
        </div>
        <div className="name_sec_bottom">
          <div className="name_card">
            <div className="display_pic">
              <img src={vedant_dp} alt="vedant dp" className="dp" />
            </div>
            <div className="disc">
              <div className="name_job">
                <h5 className="name_">Vedant Gandhi</h5>
                <h5 className="job_">Frontend</h5>
              </div>
              <div className="social_sec">
                <a href="https://instagram.com/ved__g?r=nametag" target="_blank" title="Instagram account">
                  <Image src={instagram_icon} roundedCircle className="social_icon" />
                </a>
                <a href="mailto:gandhi_961973@student.nitw.ac.in?subject=Personal Contact to Vedant Gandhi" title="Email">
                  <Image src={email_icon} roundedCircle className="social_icon" />
                </a>
                <a href="https://www.linkedin.com/in/vedant-gandhi-4776a3209" target="_blank" title="LinkedIn account">
                  <Image src={linkedin_icon} roundedCircle className="social_icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="name_card">
            <div className="display_pic" style={{background:"linear-gradient(90deg, rgba(204, 231, 229, 1) 100%, rgba(7, 58, 187, 1) 100%)"}}>
              <img src={naman_dp} alt="naman dp" className="dp" />
            </div>
            <div className="disc">
              <div className="name_job">
                <h5 className="name_">Naman Balai</h5>
                <h5 className="job_">Backend</h5>
              </div>
              <div className="social_sec">
                <a href="#" target="_blank" title="Instagram account">
                  <Image src={instagram_icon} roundedCircle className="social_icon" />
                </a>
                <a href="#" title="Email">
                  <Image src={email_icon} roundedCircle className="social_icon" />
                </a>
                <a href="#" target="_blank" title="LinkedIn account">
                  <Image src={linkedin_icon} roundedCircle className="social_icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="name_card">
            <div className="display_pic">
              <img src={anish_dp} alt="anish dp" className="dp" />
            </div>
            <div className="disc">
              <div className="name_job">
                <h5 className="name_">Anish Agarwal</h5>
                <h5 className="job_">Backend</h5>
              </div>
              <div className="social_sec">
                <a href="#" target="_blank" title="Instagram account">
                  <Image src={instagram_icon} roundedCircle className="social_icon" />
                </a>
                <a href="#" title="Email">
                  <Image src={email_icon} roundedCircle className="social_icon" />
                </a>
                <a href="#" target="_blank" title="LinkedIn account">
                  <Image src={linkedin_icon} roundedCircle className="social_icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="name_card">
            <div className="display_pic">
              <img src={joy_dp} alt="joy dp" className="dp" />
            </div>
            <div className="disc">
              <div className="name_job">
                <h5 className="name_">Joy Chhajed</h5>
                <h5 className="job_">Frontend</h5>
              </div>
              <div className="social_sec">
                <a href="#" target="_blank" title="Instagram account">
                  <Image src={instagram_icon} roundedCircle className="social_icon" />
                </a>
                <a href="#" title="Email">
                  <Image src={email_icon} roundedCircle className="social_icon" />
                </a>
                <a href="#" target="_blank" title="LinkedIn account">
                  <Image src={linkedin_icon} roundedCircle className="social_icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intro" className="contain">
        <div className="intro_upper">
          <h4>NITW Connect- College Social Networking Website</h4>
          <h1>About Our Team</h1>
          <div className="intro_para_div">
            <p className="intro_para"></p>
          </div>
          <button type="button" className="intro_btn" onClick={handle}>
            Contact Us
          </button>
        </div>
        <div className="intro_bottom">
          <img alt="intro pic" src={network_pic} className="intro_pic" />
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
