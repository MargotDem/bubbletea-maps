import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../containers/home/Home'
import SearchResult from '../containers/searchResult/SearchResult'
import Bubbletea from '../containers/bubbletea/Bubbletea'
import Admin from '../containers/admin/Admin'

export default class Body extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/bubbleteas' render={(props) => <SearchResult {...props} />} />
        <Route path='/bubbleteas/:name' render={(props) => <Bubbletea {...props} />} />
        <Route path='/admin' render={(props) => <Admin {...props} />} />
        <Route path='/' render={() => <Redirect to='/' />} />
      </Switch>
    )
  }
}
