import React from "react";
import { Link } from "react-router-dom" ;
import thefirm from "../assets/thefirm.png"
import { NavContainer, 
        NavLeftContainer,
        NavLeftSymContainer,
        NavRightContainer
    } from "./navbarstyle"
import { Button, Thefirm, } from "../mainstyle";    
    const Navbar = ()=> {
        return (
            <NavContainer> 
                <NavLeftContainer>
                    <NavLeftSymContainer>
                        <Link to="/">
                        <Thefirm><div><img src={thefirm} alt="thefirm" /></div></Thefirm>
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
                <Button $home><h4>Get in Touch</h4> </Button>
                </NavRightContainer>
                
            </NavContainer>
        );
    };
    export default Navbar;
