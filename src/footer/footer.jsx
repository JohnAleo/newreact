import React from 'react'
import { Link } from 'react-router-dom'
import { Center } from '../mainstyle'
import thefirm from "../assets/thefirm.png"
import tobe from '../assets/tobe.png'
import linkedin from '../assets/linkedin.png'
import pinterest from '../assets/pinterest.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import handpoint from '../assets/handpoint.png'
import { Footercontainer,Logowrapper,Tobewrapper,Handwrapper,Copyright} from '../mainstyle'
import { NavRightContainer } from '../navbar/navbarstyle'

const Footer = () => {
  return (
    <>
          <Center><img src={thefirm} alt="thefirm" /></Center>
          <Center>
          <Footercontainer>
              <NavRightContainer>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <p>Home</p>
                </Link>
                <Link to="/solutions" style={{ textDecoration: "none", color: "black" }}>          
                    <p>Solutions</p>
                </Link>
                <Link to="/cases" style={{ textDecoration: "none", color: "black" }}>
                    <p>Cases</p>
                </Link>
                <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
                    <p>About-us</p> 
                </Link>
                <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
                    <p>Contact-us</p> 
                </Link>
            </NavRightContainer> 
        </Footercontainer>
        </Center>
        <Center>
        <Logowrapper>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <Tobewrapper>
            <img src={tobe} alt="youtobe" />
          </Tobewrapper>
          <Handwrapper>
            <img src={handpoint} alt="handpoint" />
          </Handwrapper>
          <img src={linkedin} alt="linkedin" />
          <img src={pinterest} alt="pinterst" />
          </Logowrapper> 
          </Center> 
          <Center>
          <Copyright>Copyrights ©2020 Thefirm. All Right Reserved</Copyright> 
          </Center> 
    </>
  )
}

export default Footer;

