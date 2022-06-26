import React from 'react';
import styles from './index.less';
import { connect } from 'dva'
import ErrorBoundary from '@/components/ErrorBoundary';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import 'antd/dist/antd.css'
import router from 'umi/router'
import Link from 'umi/link';
const BasicLayout: React.FC = props => {
  const menuArr = ['Home','喵窝','React','CatInfo']
  function changeRouter(e:any){
    console.log(e)
    if(e==='喵窝'){
      router.push('/uploadImg')
    }else if(e==='Home'){
      router.push('/')
    }else if(e==='React'){
      router.push('/reactDemo')
    }else if(e==='CatInfo'){
      router.push('/catinfo')
    }
  }
  return (
    <>
      <Layout className={`${styles.out} layout`}>
        <Header>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            {menuArr.map((e, index) => {
              const key = index + 1;
              return <Menu.Item onClick={changeRouter.bind(null,e)} key={key}>{e}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>

  );
};

export default connect((global) => { return { ...global } })(BasicLayout);
