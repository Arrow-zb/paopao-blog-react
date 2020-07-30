import React from 'react'
import { Layout, Row, Col } from 'antd';

import MainContentLeft from './left/index';
import MainContentRight from './right/index';

const MainContent = () => {  // 主要内容的布局
  const leftLayout = { xxl: 18, xl: 18, lg: 19, md: 20, sm: 24, xs: 24 };
  const rightLayout = { xxl: 6, xl: 6, lg: 5, md: 4, sm: 0, xs: 0 };
  
  return (
    <Layout>
      <Row>
        <Col { ...leftLayout }>
          <MainContentLeft></MainContentLeft>
        </Col>
        <Col { ...rightLayout }>
          <MainContentRight></MainContentRight>
        </Col>
      </Row>
    </Layout>
  )
}

export default MainContent
