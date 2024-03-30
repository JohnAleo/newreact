import React from 'react'
import  mainpage from "../assets/mainpage.png";
import {
  Case,
  Caseright,
  Caseleft,
  Button,
} from "../mainstyle"
import Case2 from './case2';

const CaseComponent = () => {
  return (
    <>
   <Case>
    <Caseleft>
      <div>
        <h2>Our research & <br />
            Case Studies</h2>
      
      <p>Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry. Lorem Ipsum has been <br />
          the industry's standard dummy.</p>
          </div>
        <Button $asosiy style={{marginLeft:'150px',color:'white'}}>
          Get in Touch 
        </Button>
    </Caseleft>
    <Caseright><img src={mainpage} alt="main-img" /></Caseright>
   </Case>
  <Case2 />
  </>
  )
}

export default CaseComponent ;


