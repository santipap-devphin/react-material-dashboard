import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import SecMainPayment from '../../wrapper/payment/SecMainPayment';

const Payment = () => {
  return (<DrafDashboard txtpage={"ตั้งค่าวิธีชำระเงิน"}>
                <SecMainPayment />
          </DrafDashboard>
        )
}

export default Payment