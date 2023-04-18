import React from 'react'
import Maincom from './Maincom'
import Rightmain from './Rightmain'
import "./Superdiv.css"
import './MainSuper.css'
import Basicinfo from './LeftMaterials/Basicinfo'
import Promoinfo from './LeftMaterials/Promoinfo'
import Address from './LeftMaterials/Address'
import Industype from './LeftMaterials/Industype'
import Businessseg from './LeftMaterials/Businessseg'
import Loantype from './LeftMaterials/Loantype'
import PurchaseAse from './LeftMaterials/PurchaseAse'
import Termloan from './LeftMaterials/Termloan'
import Workcap from './LeftMaterials/Workcap'

const Mainsuper = () => {
    return (
        <div className="row MainSuperComp">

            <Maincom className='col-3' />
            {/* <Rightmain className='col-8' /> */}
            {/* <Basicinfo className='col-8'/> */}

            {/* <Promoinfo className='col-8'/> */}
            {/* <Address className='col-8'/> */}
            {/* <Industype  className='col-8'/> */}
            {/* <Businessseg className='col-8'/> */}
            {/* <Loantype className='col-8'/> */}
            {/* <PurchaseAse className='col-8'/> */}
            {/* <Termloan  className='col-8'/> */}
            <Workcap className='col-8'/>
            <hr style={{marginTop:"14px"}}></hr>
        </div>
        
    )
}

export default Mainsuper