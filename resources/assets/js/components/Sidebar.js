import React from 'react'

import BaseContainer from '../containers/BaseContainer'
// import i18n from '../lib/i18n'
import { NavLink } from 'react-router-dom'

export default class Sidebar extends BaseContainer {
  handleOpenClick () {
    document.getElementById('sidebar_right').className = 'sidebar sidebar_right sidebar_right_show'
    document.getElementById('searchForm').className = 'searchForm'
  }

  handleCloseClick (showForm) {
    if (showForm) {
      document.getElementById('sidebar_right').className = 'sidebar sidebar_right'
      document.getElementById('searchForm').className = 'searchForm searchForm_show'
    } else {
      document.getElementById('sidebar_right').className = 'sidebar sidebar_right'
      document.getElementById('searchForm').className = 'searchForm'
    }
  }

  renderMe (t) {
    return (
      <div className='sidebarContainer'>
        <div className='sidebar'>
          <div className='sidebar-top'>
            <span className='sidebar-text sidebar-text_title'><NavLink to={'/'}>BubbleTea Maps</NavLink></span>
            <span className='sidebar-text' onClick={() => { this.handleOpenClick() }}>Recherche</span>
          </div>
          <div className='sidebar-bottom'>
            <span className='sidebar-text'><a href='' rel='noopener noreferrer'>Contact</a></span>
            <span className='sidebar-text'><a href='' rel='noopener noreferrer' target='_blank'>Margot de Maulmont</a></span>
          </div>
        </div>
        <div id='sidebar_right' className='sidebar sidebar_right'>
          <div className='sidebar-top'>
            <button className='myRoundButton myButton_red' onClick={() => { this.handleCloseClick(false) }}>&times;</button>
            <span className='sidebar-text sidebar-text_title'>Critère</span>
            <span className='sidebar-text' onClick={() => { this.handleCloseClick(true) }}>Arrondissement</span>
          </div>
          <div className='sidebar-bottom'>
            <span className='sidebar-text'><NavLink to={'/bubbleteas'}>Tous les bubbleteas</NavLink></span>
          </div>
        </div>
      </div>
    )
  }
}
