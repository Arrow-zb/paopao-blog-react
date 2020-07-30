import React from 'react';
import { Layout, Row, Col } from 'antd';

import './index.scss';

const Header = () => {
  const headerLeftLayout = { xxl: 4, xl: 5, lg: 5, md: 5, sm: 0, xs: 0 };
  const headerMiddleLayout = { xxl: 15, xl: 14, lg: 14, md: 16, sm: 24, xs: 24 };
  const headerRightLayout = { xxl: 5, xl: 4, lg: 4, md: 3, sm: 0, xs: 0 };
  
  return (
    <Layout className="header">
      <Row>
        <Col { ...headerLeftLayout }>
          logo和名字
          <img src="@/assets/logo-v0.011.png" alt=""/>
        </Col>
        <Col { ...headerMiddleLayout }>
          导航
        </Col>
        <Col { ...headerRightLayout }>
          登录注册和个人信息
        </Col>
      </Row>
    </Layout>
  )
};

export default Header;
