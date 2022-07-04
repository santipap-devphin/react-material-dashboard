import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import SecMainBlog from '../../wrapper/Blog/SecMainBlog';

const Blog = () => {
  return (<DrafDashboard txtpage={"ข่าวสาร"}>
              <SecMainBlog />
              {/*<FrmBlogAdd />*/}
          </DrafDashboard>
  )
}

export default Blog