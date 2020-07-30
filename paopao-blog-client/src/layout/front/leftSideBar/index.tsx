import React from 'react';
import { Layout, Row } from 'antd';

const LeftSideBar = () => {
  return (
    <Layout>
      <Row>
        个人展示
      </Row>
      <Row>
        最新文章
      </Row>
      <Row>
        个人标签
      </Row>
      <Row>
        归档
      </Row>
    </Layout>
  )
};

export default LeftSideBar;
