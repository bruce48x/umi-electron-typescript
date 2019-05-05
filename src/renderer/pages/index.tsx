import { connect } from 'dva';
import React, { Component } from 'react';
import { Button } from 'antd';

interface IIndexProps {}
@connect(global => global)
export default class Index extends Component<IIndexProps> {
  static defaultProps: IIndexProps = {};

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Yay! Welcome to umi-electron-typescript!</h1>
        {this.props.global.name}
      </div>
    );
  }
}
