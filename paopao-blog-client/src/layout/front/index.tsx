import React from 'react'
import { Layout, Row, Col } from 'antd';

import Header from './header/index';
import LeftSideBar from './leftSideBar/index';
import MainContent from './mainContent/index';

const PagesLayout = () => {  // 主页的布局
  // 响应式
  // xxl xl lg md sm xs 由大到小
  const leftSideBarLayout = { xxl: 4, xl: 5, lg: 5, md: 5, sm: 0, xs: 0 };
  const mainContentLayout = { xxl: 20, xl: 19, lg: 19, md: 19, sm: 24, xs: 24 };
  
  return (
    <Layout>
      <Header></Header>
      <Row>
        <Col { ...leftSideBarLayout }>
           <LeftSideBar></LeftSideBar>
        </Col>
        <Col { ...mainContentLayout }>
          <MainContent></MainContent>
        </Col>
      </Row>
    </Layout>
  )
}

export default PagesLayout
