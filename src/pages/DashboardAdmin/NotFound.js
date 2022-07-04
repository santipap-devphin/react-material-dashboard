import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import Error404 from '../../component/NotFound/Error404';

const NotFound = () => {
  return (<DrafDashboard txtpage={"ErrorPage"}>
            <Error404 />
          </DrafDashboard>
    
  )
}

export default NotFound