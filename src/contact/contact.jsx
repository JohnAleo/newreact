import React from 'react'
import { Case,Caseleft,Caseright,Center,Button } from '../mainstyle'
import mainpage1 from './conasset/mainpage1.png'
import { About2,About2right,About2left,Ab } from '../about/aboutstyle'
import contact1 from './conasset/contact1.png'
import { Touch,Submit,Submitin } from '../home/homes'
import snazzy from '../home/home1asset/snazzy.png'

const Contact = () => {
  return (
    <div>
    <Case>
    <Caseleft>
      <div>
        <h2>Our Digital Journey</h2>
      
      <p>Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry. Lorem Ipsum has been <br />
          the industry's standard dummy.</p>
          </div>
          
    </Caseleft>
    <Caseright><img src={mainpage1} alt="main-img" /></Caseright>
   </Case> 

   <About2>
            <About2right><div><img src={contact1} alt="contact1" /></div></About2right>
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


          <Touch>
          <img src={snazzy} alt="snazzy" style={{zIndex:'1'}} />
          <div style={{marginTop:'-250px',zIndex:'2'}}>
          <Submit>
              <h2>Get in Touch</h2>
              <Submitin>
              <div> 
                <p>Name</p>
                <h5>Lorem Ipusum</h5>
                <div style={{width:'353px',height:'2px',background:'#A5A5A5',marginTop:'-25px'}}></div>
              </div>
              <div>
                <p>Email</p> 
                <h5>LoremIpusum@mail.com</h5>
                <div style={{width:'353px',height:'2px',background:'#A5A5A5',marginTop:'-25px'}}></div>
              </div>
              <div>
                <p>Phone</p> 
                <h5>+0 968 856 1524</h5>
                <div style={{width:'353px',height:'2px',background:'#A5A5A5',marginTop:'-25px'}}></div>
              </div>
              <div>
                <p>Subject</p> 
                <h5>Choose your subject</h5>
                <div style={{width:'353px',height:'2px',background:'#A5A5A5',marginTop:'-25px'}}></div>
              </div>
              </Submitin>
              <Center><Button style={{color:'#fff' ,marginBottom:'-45px'}}>Submit</Button></Center>
          </Submit>
          </div>
        </Touch>

    </div>
  )
}

export default Contact