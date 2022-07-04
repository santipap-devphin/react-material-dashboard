import React from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import FrmEditCategory from '../../component/Form/FrmEditCategory';

const CategoryEdit = () => {
    return (<DrafDashboard txtpage={"แก้ไขหมวดหมู่"}>
                 <FrmEditCategory />
            </DrafDashboard>
            )
}

export default CategoryEdit