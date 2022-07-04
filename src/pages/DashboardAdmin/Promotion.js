import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import SecMainPromotion from '../../wrapper/promotion/SecMainPromotion';

const Promotion = () => {
  return (<DrafDashboard txtpage={"โปรโมชั่น"}>
              <SecMainPromotion />
          </DrafDashboard>
  )
}

export default Promotion