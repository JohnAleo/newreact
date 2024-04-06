import React from 'react'
import group6 from '../../assets/group6.png'
import { CasegroupText1, CasegroupText2, Casegroupline, IMGcenter } from '../../mainstyle'
import { Button } from '../../mainstyle'
import { Casewrapper } from '../../mainstyle'
const Casegroup6 = () => {
  return (
    <Casewrapper> 
      <IMGcenter><img src={group6} alt="group6"/></IMGcenter>
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

export default Casegroup6