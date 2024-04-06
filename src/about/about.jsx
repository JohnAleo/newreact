import React from 'react'
import { Aboutwr, Aboutleft,Aboutright,
  Aboutimg2,Aboutimg3,Bwrapper,About2,About2left,About2right,Ab,Abo,Aboleft} from './aboutstyle'

import { Pwrapper,Clientsleft,Clientsleftin, } from '../home/homes'
import { Button, Center,  } from '../mainstyle'
import about2 from './aboutasset/about2.png'
import about3 from './aboutasset/about3.png'
import about from './aboutasset/about.png'
import soroq1 from '../home/homeasset/soroq1.png'




const About = () => {
  return (
    <div>
      <Aboutwr>
            <Aboutleft>
              <h3>Lorem Ipsum</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
               industry. Lorem Ipsum has been the industry standard dummy <br />
                text ever since the 1500s, when an unknown printer took a galley <br />
                 of type Lorem Ipsum is simply dummy text of the printing and  <br />
                 typesetting industry. Lorem Ipsum has been the industry's  <br />
                 standard dummy text ever since the 1500s, when an unknown <br />
                  printer took. Lorem Ipsum is simply dummy text of the printing <br />
                   and typesetting industry. Lorem Ipsum is simply dummy text of <br />
                    the printing and typesetting industry. Lorem Ipsum has been the <br />
                     industry standard dummy text ever since the 1500s, when an <br />
                      unknown printer took a galley of type Lorem Ipsum is simply <br />
                       dummy text of the printing and typesetting industry. </p>
              <Bwrapper>
                  <Button style={{color:'#FFF'}}>Digital PArtners</Button>
                  <Button style={{color:'#FFF'}}>Coaching</Button>
               </Bwrapper>
            </Aboutleft>
            <Aboutright>
              <Aboutimg2>
                 <div><img src={about2} alt="about" style={{borderRadius: '25px'}} /></div> 
              </Aboutimg2>
              <Aboutimg3>
                  <img src={about3} alt="aboutd" />
              </Aboutimg3>
            </Aboutright>
          </Aboutwr>

          <About2>
            <About2right><div><img src={about} alt="about" /></div></About2right>
            <Ab>
            <About2left>
              <h6>Lorem Ipsum</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
               industry. Lorem Ipsum has been the industry standard dummy text <br />
                ever since the 1500s, when an unknown printer took a galley of type <br />
                 Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                  industry. Lorem Ipsum has been the industry's standard dummy text <br />
                   ever since the 1500s when an unknown printer took. Lorem Ipsum is <br />
                    simply dummy text of the printing and typesetting industry.   Lorem  <br />
                    Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </About2left>
              </Ab>
          </About2>
    
   
    <Aboleft>
      <Abo>
          <Clientsleftin>Lorem Ipsum</Clientsleftin>
        <div style={{margin:'30px 0px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever <br />
         since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply <br />
           dummy text of the printing and typesetting industry.   Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
      
          <Pwrapper> <p> <img src={soroq1} alt="icon" /> Loren rasion gravida auem is bibenua tase. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document <br />
           or a typeface without relying on meaningful content</p></Pwrapper>
          <Pwrapper><p> <img src={soroq1} alt="icon" /> Lorem Ipsum is simply dummy text of the. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic <br />
           or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic <br />
           or web designs.</p></Pwrapper>
          <Pwrapper><p><img src={soroq1} alt="icon" /> Printing and typesetting industry. Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs.</p></Pwrapper>
          <Pwrapper><p><img src={soroq1} alt="icon" /> When an unknown printer took a galley of type and scrambled it <br />
           scrambled it</p>
           </Pwrapper>
        </Abo>
      </Aboleft>
    </div>
  )
}

export default About;