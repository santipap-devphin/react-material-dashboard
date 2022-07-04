import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import SecMainSupply from '../../wrapper/supply/SecMainSupply';

const Supply = () => {
  return (<DrafDashboard txtpage={"ตั้งค่าวิธีการจัดส่ง"}>
             <SecMainSupply />
         </DrafDashboard>
  )
}

export default Supply