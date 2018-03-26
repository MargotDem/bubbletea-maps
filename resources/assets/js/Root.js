import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './lib/i18n'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import { HashRouter } from 'react-router-dom'
import { Scroller } from './components/scroller'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Scroller />
          <Sidebar />
          <Body />
        </div>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
