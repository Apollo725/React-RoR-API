import React, { Component } from 'react';
import { getUserName } from '../../utils/UserUtil';

export default class Home extends Component {

  render() {
    return (
      <div>
        Hello, {getUserName()}
      </div>
    )
  }
}
