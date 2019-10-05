import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';


const Navigation = (props) => {
  
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link className="icon" to="/home">
          <Icon type="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="contacts">
        <Link className="icon" to="/contacts">
          <Icon type="contacts" />
          Contacts
        </Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link className="icon" to="/profile">
          <Icon type="profile" />
          Profile
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(Navigation);
