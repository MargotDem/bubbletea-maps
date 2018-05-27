import React from 'react'

import BaseContainer from '../containers/BaseContainer'
// import i18n from '../lib/i18n'
import { NavLink } from 'react-router-dom'

export default class Sidebar extends BaseContainer {
  handleOpenClick () {
    document.getElementById('sidebar_right').className = 'sidebar sidebar_right sidebar_right_show'
    document.getElementById('searchForm').className = 'searchForm'
  }

  handleCloseClick (showForm, form) {
    if (showForm) {
      document.getElementById('sidebar_right').className = 'sidebar sidebar_right'
      document.getElementById('searchForm').className = 'searchForm searchForm_show'
      document.getElementById(form).className = form + ' ' + form + '_show'
    } else {
      document.getElementById('sidebar_right').className = 'sidebar sidebar_right'
      document.getElementById('searchForm').className = 'searchForm'
      // document.getElementById('borough-form').className = 'borough-form'
      // document.getElementById('name-form').className = 'name-form'
    }
  }

  renderMe (t) {
    return (
      <div className='sidebarContainer'>
        <div className='sidebar'>
          <div className='sidebar-top'>
            <div>
              <span className='sidebar-text sidebar-text_title'><NavLink to={'/'}>BubbleTea Maps</NavLink></span>
            </div>
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
            <span className='sidebar-text sidebar-text_title sidebar_right-text_title'>Critère</span>
            <span className='sidebar-text' onClick={() => this.handleCloseClick(true, 'borough-form')}>Arrondissement</span>
            <span className='sidebar-text' onClick={() => this.handleCloseClick(true, 'name-form')}>Nom</span>
          </div>
          <div className='sidebar-bottom' />
        </div>
      </div>
    )
  }
}
