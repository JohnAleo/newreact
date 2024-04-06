import React from 'react'
import {Case3inleft,Button1,Button,CasegroupText1,CasegroupText2,Casegroupline
  ,Casewrapper,IMGcenter, Center,Testimonials,Testimonialwrapper,Imgback,Imgback2,Imgback1,
Testimonialsdown,Jenny,Jennyin,Dots} from '../mainstyle'
import {Reason,Brand,Reasonwrapper,
Brandright,Brandleft,Brleft,Brleftwr,Brandwrapper,Br,
Research, Researchleft,Researchright,Researchwr,
Resimg1,Resimg2,Resimg3,Blog,Blog1,Blog2,Alex,Bt,
Touch,Submit,Submitin
} from '../home/homes'
import brand from '../home/homeasset/brand.png'
import karn from '../home/homeasset/karn.png'
import reason from './home1asset/reason.png'
import reasonicon from './home1asset/reasonicon.png'
import reasondoira from './home1asset/reasondoira.png'
import blog2 from './home1asset/blog2.png'
import blog3 from './home1asset/blog3.png'
import alex1 from './home1asset/alex1.png'
import alex2 from './home1asset/alex2.png'
import alex3 from './home1asset/alex3.png'
import soat from './home1asset/soat.png'
import el1 from '../assets/el1.png'
import el2 from '../assets/el2.png'
import el3 from '../assets/el3.png'
import el4 from '../assets/el4.png'
import el5 from '../assets/el5.png'
import gr3 from '../assets/gr3.png'
import gr33 from '../assets/gr33.png'
import dots from '../assets/dots.png'
import snazzy from './home1asset/snazzy.png'
const Home1 = () => {
  return (

    <>
    <Reasonwrapper>
      <div style={{display:'flex',flexDirection:'column'}}>
          <Reason>
              <h4>Reason to Choose Us</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br />
               the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <br />
               type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
          </Reason>
          <div style={{margin:'50px 0px'}}>
          <Case3inleft>             
              <Button1> <div> <p>Show all</p></div></Button1>
              <Button1> <div><p>Coaching</p></div></Button1>
              <Button1> <div><p>Digital Partners</p> </div> </Button1>
              <Button1> <div> <p>SEO</p> </div></Button1>
          </Case3inleft>
          </div>
        <Br>
        <Brandwrapper>
          <Brand>
            <Brleftwr>
                <Brleft>
                    <Brandleft> <img src={brand} alt="brand" style={{borderRadius:'25px'}} /></Brandleft>
                </Brleft>
            </Brleftwr>
            <Brandright>
                    
                    <div style={{display:'flex',marginLeft:'-100px'}}><img src={karn} alt="karn" /> <h2>Branding</h2></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and <br /> 
                    typesetting industry. Lorem Ipsum has been the industry <br />
                     standard dummy text ever since the 1500s, when an <br />
                      unknown printer took a galley of type </p>
                    <div style={{marginLeft:'-90px'}}><Button $read>Read More</Button></div>
                    
            </Brandright>
          </Brand>
          </Brandwrapper>
          </Br> 

        </div>
    </Reasonwrapper> 



    <Research>

          <Reason>
              <h4>Our Research & Case Studies</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br />
               the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <br />
               type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
          </Reason>
     
          <Researchwr>
            <Researchleft>
              <h3>Lorem Ipsum is simply</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry <br />
              standard dummy text ever since the 1500s, when an unknown <br />
              printer took a galley of type Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting industry. Lorem Ipsum has <br />
              been the industry's standard dummy text ever since the 1500s, <br />
              when an unknown printer took.</p>
              <Button style={{color:'#FFF'}}>Read More</Button>
            </Researchleft>
            <Researchright>
              <Resimg1>
                  <div><img src={reasonicon} alt="reasonicon" /></div>
              </Resimg1>
              <Resimg2>
                 <div><img src={reason} alt="reason" style={{borderRadius: '25px'}} /></div> 
              </Resimg2>
              <Resimg3>
                  <img src={reasondoira} alt="reasondoira" />
              </Resimg3>
            </Researchright>
          </Researchwr>
    </Research>


    <Blog>
      <Blog1><h3>Our Blogs</h3></Blog1>
      <Blog2>
      <Casewrapper style={{height:'560px'}}> 
      <IMGcenter><img src={blog3} alt="blog3"/></IMGcenter>
     <CasegroupText1>Lorem ipsum is</CasegroupText1> 
     <CasegroupText2>Lorem Ipsum is simply  text of the <br />
                    printing and type setting industry. <br />
                    make a type specimen.
     </CasegroupText2>
     <Casegroupline><div></div></Casegroupline>
     <Alex><img src={alex1} alt="alex1" style={{width:'30px',height:'27px',flexShrink:0,borderRadius:'30px',boxShadow:'box-shadow: 0px 4px 4px 0px rgba(250, 202, 16, 0.20);'}}/> 
     <h5>Alex Liones</h5> <img src={soat} alt="soat" style={{width:'14px',height:'12px',flexShrink:'0'}}/> <h6>28,Aug 2020, 09:48:00</h6></Alex>
     <Button $read><p>Read More</p> </Button>
    </Casewrapper>

    <Casewrapper style={{height:'560px'}}> 
      <IMGcenter><img src={blog2} alt="blog2"/></IMGcenter>
     <CasegroupText1>Lorem ipsum is</CasegroupText1> 
     <CasegroupText2>Lorem Ipsum is simply  text of the <br />
                    printing and type setting industry. <br />
                    make a type specimen.
     </CasegroupText2>
     <Casegroupline><div></div></Casegroupline>
     <Alex><img src={alex2} alt="alex2" style={{width:'30px',height:'27px',flexShrink:0,borderRadius:'30px',boxShadow:'box-shadow: 0px 4px 4px 0px rgba(250, 202, 16, 0.20);'}}/> 
     <h5>Alex Liones</h5> <img src={soat} alt="soat" style={{width:'14px',height:'12px',flexShrink:'0'}}/> <h6>28,Aug 2020, 09:48:00</h6></Alex>
     <Button $read><p>Read More</p> </Button>
    </Casewrapper>

    <Casewrapper style={{height:'560px'}}> 
      <IMGcenter><img src={blog3} alt="blog3"/></IMGcenter>
     <CasegroupText1>Lorem ipsum is</CasegroupText1> 
     <CasegroupText2>Lorem Ipsum is simply  text of the <br />
                    printing and type setting industry. <br />
                    make a type specimen.
     </CasegroupText2>
     <Casegroupline><div></div></Casegroupline>
     <Alex><img src={alex3} alt="alex3" style={{width:'30px',height:'27px',flexShrink:0,borderRadius:'30px',boxShadow:'box-shadow: 0px 4px 4px 0px rgba(250, 202, 16, 0.20);'}} />
      <h5>Alex Liones</h5> <img src={soat} alt="soat" style={{width:'14px',height:'12px',flexShrink:'0'}} /> <h6>28,Aug 2020, 09:48:00</h6></Alex>
     <Button $read><p>Read More</p> </Button>
    </Casewrapper>
      </Blog2>
      <Center>
      <Bt ><p>View More</p></Bt>
      </Center>
    </Blog>
\

        
        <Testimonialwrapper style={{background:'#fff'}}> 
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
         



    </>
  )
}

export default Home1;