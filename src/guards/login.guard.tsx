import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { observer, inject } from 'mobx-react';

interface Props {
  store: {
    userStore: any;
  };
}

@inject('store')
@observer
export class LoginGuard<T extends Props , U> extends Component<T, U> {
  constructor(props) {
    super(props);
    this.CHILD_COMPONENT_DID_MOUNT = this.componentDidMount;
    this.componentDidMount = this.DID_MOUNT;
  }

  private readonly CHILD_COMPONENT_DID_MOUNT: (() => void) | undefined;

  DID_MOUNT() {
    const user = this.props.store.userStore.getUser();
    if (!user) {
      return Taro.navigateTo({
        url: '/path/to/login',
      });
    }
    this.CHILD_COMPONENT_DID_MOUNT && this.CHILD_COMPONENT_DID_MOUNT();
  }
}
