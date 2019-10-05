import React, { Component } from 'react'
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 48 }} spin />;
export default class LoadingSpinner extends Component {
  render() {
    return (
      <div>
        <Spin indicator={antIcon} />
      </div>
    )
  }
}
