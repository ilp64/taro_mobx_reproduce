import React  from 'react';
import { View } from '@tarojs/components'
import './index.scss';
import { LoginGuard } from '../../guards/login.guard';

console.log('这里不是一个函数或者类了', LoginGuard);

class Index extends LoginGuard<any, any> {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  render () {
    return (
      <View className='index'>
        🐞🐞🐞
      </View>
    );
  }
}

export default Index;
