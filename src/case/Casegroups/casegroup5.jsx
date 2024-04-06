import React from 'react'
import group5 from '../../assets/group5.png'
import { CasegroupText1, CasegroupText2, Casegroupline, IMGcenter } from '../../mainstyle'
import { Button } from '../../mainstyle'
import { Casewrapper } from '../../mainstyle'
const Casegroup5 = () => {
  return (
    <Casewrapper> 
      <IMGcenter><img src={group5} alt="group5"/></IMGcenter>
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

export default Casegroup5