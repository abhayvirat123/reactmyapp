import React from 'react';
import {  Link } from 'react-router-dom';
import HeaderDiv from './HeaderDiv';
import { Layout, Menu, Icon } from 'antd';
const { Header,Sider, Content } = Layout;

class Layouts extends React.Component {
  state = {
    collapsed: true,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4','sub5','sub3', 'sub6'];

  state = {
    openKeys: '',
    collapsed: true,
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  render() {
   
    // const classname = (this.props, "classname", " ");
    return (
        <Layout className={`${ this.props.classname }`} >
          <Sider trigger={null}  style={{ background: '#fff' }} className="sidebar-left"  >
          <div className="logo" />
              <Menu theme="light" mode="inline" 
               >
                <Menu.Item key="1">
                    <Link style={{marginTop:"10px"}} to="/">
                          Dashboard
                          <Icon type="dashboard" style={{marginLeft:"20px"}}/>
                    </Link>
                </Menu.Item>
                
              </Menu>
                 
              </Sider>
              <Layout>
                <Header className="headerTop">
                    <HeaderDiv />
                    {/* <Icon
                className="trigger layout-trigger header-toggle"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                />  */}
                </Header>
                <Content
                style={{
                padding: 24,
                minHeight: '100vh',
                }}
                className={ "mainContnet"}
                >
               
                {this.props.children}
                </Content>
              </Layout>
        </Layout>

   
  );
  }
}
export default Layouts;