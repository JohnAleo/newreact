import React from 'react'
import group4 from '../../assets/group4.png'
import { CasegroupText1, CasegroupText2, Casegroupline, IMGcenter } from '../../mainstyle'
import { Button } from '../../mainstyle'
import { Casewrapper } from '../../mainstyle'
const Casegroup4 = () => {
  return (
    <Casewrapper> 
      <IMGcenter><img src={group4} alt="group4"/></IMGcenter>
     <CasegroupText1>Lorem ipsum is</CasegroupText1> 
     <CasegroupText2>Lorem Ipsum is simply  text of the <br />
                    printing and type setting industry. <br />
                    make a type specimen.
     </CasegroupText2>
     <Casegroupline></Casegroupline>
     <Button $read><p>Read More</p></Button>
    </Casewrapper>
  )
}

export default Casegroup4