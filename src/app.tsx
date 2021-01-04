import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import userStore from './store/user'

import './app.scss'

const store = {
  userStore
}

class App extends Component {
  globalData = {}
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
