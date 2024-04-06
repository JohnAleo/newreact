import React from 'react'
import search from "../assets/search.png"
import el1 from '../assets/el1.png'
import el2 from '../assets/el2.png'
import el3 from '../assets/el3.png'
import el4 from '../assets/el4.png'
import el5 from '../assets/el5.png'
import gr3 from '../assets/gr3.png'
import gr33 from '../assets/gr33.png'
import { Button, Center, Testimonials, Testimonialsdown, Testimonialwrapper,Case3inleft,
  Case3inright, } from '../mainstyle'
import { Case1 } from '../mainstyle'
import { Case3 } from '../mainstyle'
import Casegroup1 from './Casegroups/casegroup1'
import Casegroup2 from './Casegroups/casegroup2'
import Casegroup3 from './Casegroups/casegroup3'
import Casegroup4 from './Casegroups/casegroup4'
import Casegroup5 from './Casegroups/casegroup5'
import Casegroup6 from './Casegroups/casegroup6'
import Casegroup7 from './Casegroups/casegroup7'
import Casegroup8 from './Casegroups/casegroup8'
import Casegroup9 from './Casegroups/casegroup9'
import dots from '../assets/dots.png'
import { Casegroupwrapper,Button1,Imgback,Imgback1,Imgback2,Jenny,Jennyin,Dots } from '../mainstyle'
const Case2 = () => {
  return (
   
    <div> 
        <div >
            <Case1><p>Our Cases</p></Case1>
            
            <Case3 >
              <Case3inleft>
              
                  <Button1> <div> <p>Show all</p></div></Button1>
                  <Button1> <div><p>Coaching</p></div></Button1>
                  <Button1> <div><p>Digital Partners</p> </div> </Button1>
                  <Button1> <div> <p>SEO</p> </div></Button1>
                
              </Case3inleft>
              <Case3inright>
                <div style={{display:'flex',justifyContent:'center',
                   gap:'10px',width:'170px',height:'48px',border:'none'}}><input type="search" placeholder='search'/> <img src={search} alt="search" 
                   />
                </div>
              </Case3inright>
            </Case3>
            <Casegroupwrapper >
              <Casegroup1></Casegroup1>
              <Casegroup2></Casegroup2>
              <Casegroup4></Casegroup4>
              <Casegroup3></Casegroup3>
              <Casegroup5></Casegroup5>
              <Casegroup6></Casegroup6>
              <Casegroup7></Casegroup7>
              <Casegroup8></Casegroup8>
              <Casegroup9></Casegroup9>
            </Casegroupwrapper>

           <Center>
              <Button $load ><h4>Load More</h4> </Button>
              </Center>
        </div  >
            <Testimonialwrapper> 
            <Center>
            <Testimonials>Our Testimonials</Testimonials>
            </Center>
            <Center>
            <div style={{display:'flex',gap:'80px'}}>
                <img src={el1} alt="el1" />
                <img src={el2} alt="el2" />
                <Imgback><img src={el3} alt="el3"/></Imgback>
                <Imgback1><img src={gr3} alt="gr3" /></Imgback1>
                <Imgback2><img src={gr33} alt="gr33" /></Imgback2>
                <img src={el4} alt="el4" />
                <img src={el5} alt="el5" />
            </div>
            </Center>
            <Center>
            <Testimonialsdown>
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br />
             the industry's standard dummy text ever since the 1500s, when an unknown printer took  type <br />
              scrambled it to make a type specimen book. It has survived not only five centuries, 
            </div>
            </Testimonialsdown>
            </Center>
            <Jenny>Jenny Wilson | <Jennyin>Digital Academy</Jennyin></Jenny>
            <Dots><img src={dots} alt="dots" /></Dots>
            </Testimonialwrapper> 
         
    </div>
  )
}

export default Case2;   
