import React from 'react'
import homepage from '../assets/homepage.png';
import { Button, Center } from '../mainstyle';
import Reasonwrapper from '../home/home1'
import Research from '../home/home1'
import { Busiright
  ,Our,Companies,
  Companieswrapper,
  Imgwrapper,
  Busi,Busileft,
Cwrapper,Ellipwrapper,
Strelwrapper,
Strelwrapper1,
Strwrapper , 
Clients, Clientsright,
Clientsleft,Clientsleftin,
Pwrapper,Diagramwrapper,Barwrapper,Soroqwrapper,
Doira1wrapper,Doira2wrapper,Doira3wrapper,
Doira4wrapper,Shapeswrapper,Clientswrapper,
Perfect,Perfectright,
Perfectleft1, Perfectleft2,Perfectleft3,Perfectleft22,
Perfectleft2wrapper,Do1wrapper,Do3wrapper,Do5wrapper,Do6wrapper,
} from './homes';
import partner from '../assets/partner.png'
import strelchap from '../home/homeasset/strelchap.png'
import strelong from '../home/homeasset/strelong.png'
import aylana1 from '../home/homeasset/aylana1.png'
import aylana2 from '../home/homeasset/ayalana2.png'
import google from '../home/homeasset/google.png'
import safari from '../home/homeasset/safari.png'
import firefox from '../home/homeasset/firefox.png'
import windows from '../home/homeasset/windows.png'
import solution from './/homeasset/solution.png'
import ellip from '../home/homeasset/ellip.png'
import soroq1 from '../home/homeasset/soroq1.png'
import soroq from '../home/homeasset/soroq.png'
import diagram from '../home/homeasset/diagram.png'
import bar from '../home/homeasset/bar.png'
import doira1 from '../home/homeasset/doira1.png'
import doira2 from '../home/homeasset/doira2.png'
import doira3 from '../home/homeasset/doira3.png'
import doira4 from '../home/homeasset/doira4.png'
import doira5 from '../home/homeasset/doira5.png'
import greting from '../home/homeasset/greting.png'
import karnay from '../home/homeasset/karnay.png'
import group9 from '../home/homeasset/group9.png'
import doira6 from '../home/homeasset/doira6.png'
import doira7 from '../home/homeasset/doira7.png'
const Home = () => {
  return (
    <>
    <Cwrapper>
    <Busi>
    <Busileft>
      <div>
       <img src={solution} alt="solution" />
      <p>Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry. Lorem Ipsum has been <br />
          the industry's standard dummy.</p>
          </div>
          <Center>
            <Button $home>
             <h4> Get in Touch </h4>
            </Button>
        </Center>
    </Busileft>
      <Busiright> <Ellipwrapper><img src={ellip} alt="ellip" /></Ellipwrapper> 
                <img src={homepage} alt="homepage" style={{borderRadius:'37px'}} />
      </Busiright>
   </Busi>
   </Cwrapper>


   <Companieswrapper>
   <Center>
    <Our><img src={partner} alt="Our partner" /></Our>
    </Center>
    <Companies>
      <Strwrapper>
        <Strelwrapper>
          <img src={strelchap} alt="strelka" />
        </Strelwrapper>
        <img src={aylana1} style={{marginLeft:'-53px'}} alt="ellipse" />
      </Strwrapper>
      <Imgwrapper>
      <img src={windows} alt="windows" />
      </Imgwrapper>
      <Imgwrapper>
      <img src={google} alt="google" />
      </Imgwrapper>
      <Imgwrapper>
      <img src={firefox} alt="firefox" />
      </Imgwrapper>
      <Imgwrapper>
      <img src={safari} alt="safari" />
      </Imgwrapper>
      <Strwrapper>
        <img src={aylana2} style={{marginRight:'-53px'}}   alt="ellipse2" />
        <Strelwrapper1>
          <img src={strelong} alt="strelka2" />
        </Strelwrapper1>
      </Strwrapper> 
    </Companies>
    </Companieswrapper>

    <Clientswrapper>
    <Clients>
      <Clientsleft>
        <Clientsleftin>Frustrstion of Clients</Clientsleftin>
        <div style={{margin:'30px 0px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
         industry. Lorem Ipsum has been the industry's standard dummy <br />
          text ever since the 1500s,</div>
      
          <Pwrapper> <p> <img src={soroq1} alt="icon" /> Loren rasion gravida auem is bibenua tase</p></Pwrapper>
          <Pwrapper><p> <img src={soroq1} alt="icon" /> Lorem Ipsum is simply dummy text of the.</p></Pwrapper>
          <Pwrapper><p><img src={soroq1} alt="icon" /> Printing and typesetting industry. Lorem Ipsum</p></Pwrapper>
          <Pwrapper><p><img src={soroq1} alt="icon" /> When an unknown printer took a galley of type and <br />
           scrambled it</p>
           </Pwrapper>
      </Clientsleft>
      <Shapeswrapper>
      <Clientsright>
        <Diagramwrapper>
          <img src={diagram} alt="diagram" />
        </Diagramwrapper>
        <Barwrapper>
          <img src={bar} alt="bar" />
        </Barwrapper>
        <Soroqwrapper>
          <img src={soroq} alt="soroq" />
        </Soroqwrapper>
        <Doira1wrapper>
          <img src={doira1} alt="doira1" />
        </Doira1wrapper>
        <Doira2wrapper>
          <img src={doira2} alt="doira2" />
        </Doira2wrapper>
        <Doira3wrapper>
          <img src={doira3} alt="doira3" />
        </Doira3wrapper>
        <Doira4wrapper>
          <img src={doira4} alt="doira4" />
        </Doira4wrapper>
      </Clientsright>
      </Shapeswrapper>
    </Clients>
    </Clientswrapper>

  
  
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

    
      <Research />
        

 </>
  )
}

export default Home;