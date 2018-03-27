import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../containers/home/Home'
import SearchResult from '../containers/searchResult/SearchResult'
import Bubbletea from '../containers/bubbletea/Bubbletea'

export default class Body extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route path='/bubbleteas' render={(props) => <SearchResult {...props} />} />
        <Route path='/bubbleteas/:name' render={(props) => <Bubbletea {...props} />} />
        <Route path='/' render={() => <Redirect to='/' />} />
      </Switch>
    )
  }
}
