import React from 'react'
import  mainpage from "../assets/mainpage.png";
import {
  Case,
  Caseright,
  Caseleft,
  Button,
  Center,
  
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
          <Center>
            <Button $home>
             <h4> Get in Touch </h4>
            </Button>
        </Center>
    </Caseleft>
    <Caseright><img src={mainpage} alt="main-img" /></Caseright>
   </Case>
    
  <Case2 />
  </>

  )
}

export default CaseComponent ;


