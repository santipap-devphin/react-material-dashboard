import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import SecmainConfirm from '../../wrapper/confirm/SecmainConfirm';

const Confirm = () => {
  return (<DrafDashboard txtpage={"ตรวจสอบยอดชำระ"}>
                <SecmainConfirm />
          </DrafDashboard>
  )
}

export default Confirm