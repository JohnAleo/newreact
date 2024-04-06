import React from 'react'
import group2 from '../../assets/group2.png'
import { CasegroupText1, CasegroupText2, Casegroupline, IMGcenter } from '../../mainstyle'
import { Button } from '../../mainstyle'
import { Casewrapper } from '../../mainstyle'
const Casegroup2 = () => {
  return (
<   Casewrapper> 
      <IMGcenter><img src={group2} alt="group2"/></IMGcenter>
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

export default Casegroup2