import React, { Component } from 'react';
import { Drawer } from 'antd';
import './NavDrawer.css';
import DrawerUserCard from '../DrawerUserCard';
import CustomTabPane from '../CuustomTabPane';

export default class NavDrawer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      visible: false,
    }
  }

  render() {
    const {
      openDrawer,
      toggleDrawer,
      activeContact = {},
    } = this.props;

    const {
      name,
      tags,
    } = activeContact;

    return (
      <div>
        <Drawer
          placement="right"
          closable={false}
          onClose={toggleDrawer}
          visible={openDrawer}
        >
          <div className="drawer-container">
            <DrawerUserCard
              name={name}
              tags={tags}
            />
            <CustomTabPane />
          </div>
        </Drawer>
      </div>
    );
  }
}
