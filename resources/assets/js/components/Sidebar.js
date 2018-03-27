import React from 'react'

import BaseContainer from '../containers/BaseContainer'
// import i18n from '../lib/i18n'

export default class Sidebar extends BaseContainer {
  handleOpenClick () {
    setTimeout(function () {
      document.getElementById('sidebar-bottom').className = 'sidebar-bottom sidebar-bottom_show'
      document.getElementById('sidebar-top').className = 'sidebar-top sidebar-top_show'
    }, 500)
    document.getElementById('sidebar_right').className = 'sidebar sidebar_right sidebar_right_show'
  }

  handleCloseClick () {
    setTimeout(function () {
      document.getElementById('sidebar_right').className = 'sidebar sidebar_right'
    }, 500)
    document.getElementById('sidebar-bottom').className = 'sidebar-bottom'
    document.getElementById('sidebar-top').className = 'sidebar-top'
  }

  renderMe (t) {
    return (
      <div className='sidebarContainer'>
        <div className='sidebar'>
          <div className='sidebar-top'>
            <span className='sidebar-text sidebar-text_title'><a href=''>BubbleTea Maps</a></span>
            <span className='sidebar-text' onClick={() => { this.handleOpenClick() }}>Search</span>
          </div>
          <div className='sidebar-bottom'>
            <span className='sidebar-text'><a href='' rel='noopener noreferrer'>Contact</a></span>
            <span className='sidebar-text'><a href='' rel='noopener noreferrer' target='_blank'>Margot de Maulmont</a></span>
          </div>
        </div>
        <div id='sidebar_right' className={'sidebar sidebar_right'}>
          <div id='sidebar-top' className={'sidebar-top'}>
            <button className='myRoundButton myRoundButton_color' onClick={() => { this.handleCloseClick() }}>&times;</button>
            <span className='sidebar-text sidebar-text_title'>Criterion</span>
            <span className='sidebar-text'>Borough</span>
          </div>
          <div id='sidebar-bottom' className={'sidebar-bottom'}>
            <span className='sidebar-text'>See all bubbleteas</span>
          </div>
        </div>
      </div>
    )
  }
}
