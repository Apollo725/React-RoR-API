import React, { Component } from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default class CustomTabPane extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Main info" key="1">
          <span>Main Info</span>
        </TabPane>
        <TabPane tab="History" key="2">
          <span>History</span>
        </TabPane>
        <TabPane tab="Message 2" key="3">
          <span>Message2</span>
        </TabPane>
      </Tabs>
    )
  }
}
