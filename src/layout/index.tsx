import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';

import '@/styles/layout.less';

const layout = () => {
  return (
    <div className="layout-container">
      <Header title="Design and Implementation of NPO - Non-Profit Network Architecture" />
      <div className="docs-layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
