import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import SecMainShipping from '../../wrapper/shipping/SecMainShipping';

const Shipping = () => {
  return (<DrafDashboard txtpage={"ส่งสินค้า"}>
              <SecMainShipping />
          </DrafDashboard>
        )
}

export default Shipping