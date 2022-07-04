import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import SecMainOrders from '../../wrapper/Orders/SecMainOrders';

const Orders = () => {

  return (<DrafDashboard txtpage={"รายการสั้งซื้อ"}>
            <SecMainOrders />
          </DrafDashboard>
         )
}

export default Orders