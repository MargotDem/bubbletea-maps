import React from 'react'

import BaseContainer from '../containers/BaseContainer'
// import i18n from '../lib/i18n'

export default class Sidebar extends BaseContainer {
  renderMe (t) {
    return (
      <div className='sidebar'>
        <div className='sidebar-top'>
          <span className='sidebar-text sidebar-text.title'>BubbleTea Maps</span>
          <span className='sidebar-text'>Recherche</span>
        </div>
        <div className='sidebar-bottom'>
          <span className='sidebar-text'>Contact</span>
          <span className='sidebar-text'>Margot de Maulmont</span>
        </div>
      </div>
    )
  }
}
