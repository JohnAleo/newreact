import React from 'react'
import { Perfect,Perfectleft1,Perfectleft2,Perfectleft22,Perfectleft2wrapper
,Perfectleft3,Perfectright,Do1wrapper,Do3wrapper,Do5wrapper,Do6wrapper } from '../home/homes'
import { Center,Button } from '../mainstyle'
import doira1 from '../home/homeasset/doira1.png'
import group9 from '../home/homeasset/group9.png'
import doira3 from '../home/homeasset/doira3.png'
import karnay from '../home/homeasset/karnay.png'
import doira5 from '../home/homeasset/doira5.png'
import greting from '../home/homeasset/greting.png'
import sol1 from './solasset/sol1.png'
import sol2 from './solasset/sol2.png'
import sol3 from './solasset/sol3.png'
import coaching from './solasset/coaching.png'
import about3 from '../about/aboutasset/about3.png'
import seo from './solasset/seo.png'
import digit from './solasset/digit.png'
import { CasegroupText11, CasegroupText22, Casegroupline1, IMGcenter1,Casewrapper1,Solwrapper,Aboutimg22,Aboutwr1 } from './solstyle'
import { Aboutright,Aboutleft,Aboutimg3 } from '../about/aboutstyle'
import { Testimonials,Testimonialwrapper,Imgback1,Imgback2 ,Imgback,Jenny,Jennyin,Dots,Testimonialsdown} from '../mainstyle'
import el1 from '../assets/el1.png'
import el2 from '../assets/el2.png'
import el3 from '../assets/el3.png'
import el4 from '../assets/el4.png'
import el5 from '../assets/el5.png'
import gr3 from '../assets/gr3.png'
import gr33 from '../assets/gr33.png'
import dots from '../assets/dots.png'
const Solutions = () => {
  return (
  <div>
  
    <Perfect>
          <Perfectleft1>
            <Perfectleft2wrapper>

              <Perfectleft2>
                <img src={group9} alt="group9" /> <h5>Coaching</h5> <p>Loren rasion gravida aeum <br /> is bibenua tase</p>
              </Perfectleft2>
              <div style={{display:'flex'}}> 
                <Do1wrapper>
                  <img src={doira1} alt="doira1" />
                </Do1wrapper>
                <Do5wrapper>
                  <img src={doira5} alt="doira5" />
                </Do5wrapper>
                <Do3wrapper>
                  <img src={doira3} alt="doira3" />
                </Do3wrapper>
                <Do6wrapper>
                <img src={doira3} alt="doira3" />
                </Do6wrapper>
              </div>
              <Perfectleft22>
                <img src={karnay} alt="seo" /> <h5>SEO</h5> <p>Loren rasion gravida aeum <br /> is bibenua tase</p>
              </Perfectleft22>

            </Perfectleft2wrapper>

          <Center>
            <Perfectleft3>
              <img src={greting} alt="greting" /> <h5>Digital Partner</h5> <p>Loren rasion gravida aeum <br /> is bibenua tase</p>
            </Perfectleft3>
          </Center>

          </Perfectleft1>
        

        <Center>
        <Perfectright>
          <h2>Perfect Solution for <br />your Business</h2>
          <p>Lorem Ipsum is simply dummy text of the printing <br />
           and typesetting industry. Lorem Ipsum has been the <br />
            industry's standard dummy text ever since the 1500s, <br />
             when an unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book. It has <br />
               survived not only five centuries,</p>
               <Button $read1 style={{color:'white'}}>Read More</Button>
        </Perfectright>
        </Center>
      </Perfect>
    <Solwrapper>
      <Casewrapper1> 
      <IMGcenter1><img src={sol1} alt="sol1"/></IMGcenter1>
     <CasegroupText11>Lorem ipsum is</CasegroupText11> 
     <CasegroupText22>Lorem Ipsum is simply  text of the <br />
                    printing and type setting industry. <br />
                    make a type specimen.
     </CasegroupText22>
     <Casegroupline1><div></div></Casegroupline1>
     <Button $read><p>Read More</p> </Button>
    </Casewrapper1>

    <Casewrapper1> 
      <IMGcenter1><img src={sol2} alt="sol2"/></IMGcenter1>
     <CasegroupText11>Lorem ipsum is</CasegroupText11> 
     <CasegroupText22>Lorem Ipsum is simply  text of the <br />
                    printing and type setting industry. <br />
                    make a type specimen.
     </CasegroupText22>
     <Casegroupline1><div></div></Casegroupline1>
     <Button $read><p>Read More</p> </Button>
    </Casewrapper1>

    <Casewrapper1> 
      <IMGcenter1><img src={sol3} alt="sol3"/></IMGcenter1>
     <CasegroupText11>Lorem ipsum is</CasegroupText11> 
     <CasegroupText22>Lorem Ipsum is simply  text of the <br />
                    printing and type setting industry. <br />
                    make a type specimen.
     </CasegroupText22>
     <Casegroupline1> <div></div></Casegroupline1>
     <Button $read><p>Read More</p> </Button>
    </Casewrapper1>
    </Solwrapper>

    <Aboutwr1>
            <Aboutleft>
              <h3>Coaching</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and <br />
               typesetting industry. Lorem Ipsum has been the industry <br />
                standard dummy text ever since the 1500s, when an unknown <br />
                 printer took a galley of type Lorem Ipsum is simply dummy <br />
                  text of the printing and typesetting industry. Lorem Ipsum has <br />
                   been the industry's standard dummy text ever since the 1500s, <br />
                    when an unknown printer took.   </p>
             
            </Aboutleft>
            <Aboutright>
              <Aboutimg22>
                 <div><img src={coaching} alt="coaching" style={{borderRadius: '25px'}} /></div> 
              </Aboutimg22>
              <Aboutimg3>
                  <img src={about3} alt="aboutd" />
              </Aboutimg3>
            </Aboutright>
          </Aboutwr1>

          <Aboutwr1  style={{marginTop:'-200px'}}>
            
            <Aboutright>
              <Aboutimg22>
                 <div><img src={digit} alt="digit" style={{borderRadius: '25px'}} /></div> 
              </Aboutimg22>
              <Aboutimg3>
                  <img src={about3} alt="aboutd" />
              </Aboutimg3>
            </Aboutright>
            <Aboutleft>
              <h3>Digital Partner</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and <br />
               typesetting industry. Lorem Ipsum has been the industry <br />
                standard dummy text ever since the 1500s, when an unknown <br />
                 printer took a galley of type Lorem Ipsum is simply dummy <br />
                  text of the printing and typesetting industry. Lorem Ipsum has <br />
                   been the industry's standard dummy text ever since the 1500s, <br />
                    when an unknown printer took.   </p>
             
            </Aboutleft>
          </Aboutwr1>

          <Aboutwr1 style={{marginTop:'-200px'}}>
            <Aboutleft>
              <h3>SEO</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and <br />
               typesetting industry. Lorem Ipsum has been the industry <br />
                standard dummy text ever since the 1500s, when an unknown <br />
                 printer took a galley of type Lorem Ipsum is simply dummy <br />
                  text of the printing and typesetting industry. Lorem Ipsum has <br />
                   been the industry's standard dummy text ever since the 1500s, <br />
                    when an unknown printer took.   </p>
             
            </Aboutleft>
            <Aboutright>
              <Aboutimg22>
                 <div><img src={seo} alt="seo" style={{borderRadius: '25px'}} /></div> 
              </Aboutimg22>
              <Aboutimg3>
                  <img src={about3} alt="aboutd" />
              </Aboutimg3>
            </Aboutright>
          </Aboutwr1>


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

export default Solutions