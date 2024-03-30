import React from 'react'
import search from "../assets/search.png"
import group1 from "../assets/group1.png"
import group2 from "../assets/group2.png"
import group3 from "../assets/group3.png"
import group4 from "../assets/group4.png"
import group5 from "../assets/group5.png"
import group6 from "../assets/group6.png"
import group7 from "../assets/group7.png"
import group8 from "../assets/group8.png"
import group9 from "../assets/group9.png"
import el1 from '../assets/el1.png'
import el2 from '../assets/el2.png'
import el3 from '../assets/el3.png'
import el4 from '../assets/el4.png'
import el5 from '../assets/el5.png'
import { Button } from '../mainstyle'
import { Case1 } from '../mainstyle'
import { Case3 } from '../mainstyle'
import { Case4 } from '../mainstyle'
import { Case5 } from '../mainstyle'


const Case2 = () => {
  return (
   
    <div> 
        <div >
            <Case1 >Our Cases</Case1>
            
            <Case3 >
                <div style={{width: '157px',height: '48px',flexShrink: 0}}><p>Show all</p></div>
                <div style={{width: '157px',height: '48px',flexShrink: 0}}><p>Coaching</p></div>
                <div style={{width: '157px',height: '48px',flexShrink: 0}}><p>Digital Partners</p></div>
                <div style={{width: '157px',height: '48px',flexShrink: 0}}><p>SEO</p></div>
                <div style={{display:'flex',justifyContent:'center',
                   gap:'10px'}}><input type="text" />search <img src={search} alt="search" 
                   /></div>
            </Case3>
            <Case4 >
            
                <div >
                    <img src={group1} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div>
                <div>
                    <img src={group2} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div>
                <div>
                    <img src={group3} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div>
                <div>
                    <img src={group4} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div>
                <div>
                    <img src={group5} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div>
                <div>
                    <img src={group6} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div><div>
                    <img src={group7} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div><div>
                    <img src={group8} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div>
                <div>
                    <img src={group9} alt="group1" />
                    <h4>Lorem Ipsum is </h4>
                    <p>Lorem Ipsum is simply  text of the <br />
                     printing and type setting industry. <br />
                      make a type specimen. </p>
                      <div style={{width: '319px',height:'1px',background: '#E7E7E7'}}></div>
                      <Button $read>Read More</Button>
                </div>
               
            </Case4>
            <Button $load  style={{marginLeft:'654px', color:'white',marginTop:'70px'}}>Load More</Button>
        </div  >
        <Case5>
            <h2>Our Testimonials</h2>
            <div>
                <img src={el1} alt="el1" />
                <img src={el2} alt="el2" />
                <img src={el3} alt="el3" />
                <img src={el4} alt="el4" />
                <img src={el5} alt="el5" />
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br />
             the industry's standard dummy text ever since the 1500s, when an unknown printer took  type <br />
              scrambled it to make a type specimen book. It has survived not only five centuries,</p>

        </Case5>
    </div>
  )
}

export default Case2;   
