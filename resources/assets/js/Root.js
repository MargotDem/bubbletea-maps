import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './lib/i18n'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import { HashRouter } from 'react-router-dom'
import { Scroller } from './components/scroller'
import { CookiesProvider } from 'react-cookie'

class App extends Component {
  render () {
    return (
      <CookiesProvider>
        <HashRouter>
          <div className='appContainer'>
            <Scroller />
            <Sidebar />
            <Body />
          </div>
        </HashRouter>
      </CookiesProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
