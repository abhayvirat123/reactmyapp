import * as React from 'react';
import logo from '../static/images/header.jpg';
import avatar from '../static/images/flat-avatar.png';

import { Link} from 'react-router-dom';

import { Menu, Input, Avatar} from 'antd';

const SubMenu = Menu.SubMenu;

const Search = Input.Search;

class HeaderDiv extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      current: 'search',
      rtl: true,
    };
    this.sidebarToggle = this.sidebarToggle.bind (this);
  }
  sidebarToggle () {
    this.setState ({
      rtl: !this.state.rtl,
    });
    var body = document.body;
    body.classList.toggle ('rtl');
  }

  handleClick = e => {
    console.log ('click ', e);
    this.setState ({
      current: e.key,
    });
  };

  render () {

    return (
      <Menu
        mode="horizontal"
        theme="dark"
        className="d-flex align-items-center custom-navigation"
        style={{padding:"0 60px 0 60px"}}
      >

        <Menu.Item key="brand-logo" className="brand-logo">
          <Link to="/">
            <img src={logo} className="m-r-5" alt={"img"}/>
            <span>Finance</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="search" className="custom-search auto">
          <Search onSearch={value => console.log (value)} />
        </Menu.Item>

        <Menu.Item key="sidebar-toggle" onClick={this.sidebarToggle}>
          <span>LTR/RTR</span>
        </Menu.Item>
        {/* <SubMenu
          title={
            <span className="submenu-title-wrapper">
              Language{' '}
            </span>
          }
          className="custom-dropdown language-list"
        >
          <Menu.Item key="setting:1">English</Menu.Item>
          <Menu.Item key="setting:2">Dutch</Menu.Item>
          <Menu.Item key="setting:3">Hindi</Menu.Item>
          <Menu.Item key="setting:4">Urdu</Menu.Item>
        </SubMenu> */}

        <SubMenu
          key="profile"
          title={
            <span>
              <Avatar size={24} src={avatar} />
              <span> Profile</span>
            </span>
          }
          className=""
        >
        </SubMenu>

      </Menu>
    );
  }
}
export default HeaderDiv;
