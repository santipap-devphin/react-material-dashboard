import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import SecMainCoupon from '../../wrapper/coupon/SecMainCoupon';


const Coupon = () => {
  return (<DrafDashboard txtpage={"คูปองส่วนลด"}>
              <SecMainCoupon />
         </DrafDashboard>
  )
}

export default Coupon