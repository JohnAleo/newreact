import React from "react";
import { Link } from "react-router-dom" ;
import { NavContainer, 
        NavLeftContainer,
        NavLeftSymContainer,
        NavRightContainer
    } from "./navbarstyle"
import { Button } from "../mainstyle";    
    const Navbar = ()=> {
        return (
            <NavContainer> 
                <NavLeftContainer>
                    <NavLeftSymContainer>
                        <Link to="/" style={{textDecoration: "none", color:"black"}}>
                        <h2>TheFirm</h2>
                        </Link>
                    </NavLeftSymContainer>
                </NavLeftContainer>

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
                <Button style={{color:'white',
                        fontFamily:'Nunito',
                        fontSize:'18px',
                        fontStyle:'normal',
                        fontWeight:'700',
                        lineHeight:'normal',
                        letterSpacing:'0.9px'
                        }}>Get in Touch</Button>
                </NavRightContainer>
                
            </NavContainer>
        );
    };
    export default Navbar;
