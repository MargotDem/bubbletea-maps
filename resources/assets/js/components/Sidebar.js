import React from 'react'

import BaseContainer from '../containers/BaseContainer'
import { NavLink } from 'react-router-dom'

export default class Sidebar extends BaseContainer {
  constructor (props) {
    super(props)
    this.state = ({
      showRightSidebar: false
    })
    this.handleOpenClick = this.handleOpenClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  handleCloseClick (showForm, form) {
    this.setState({
      showRightSidebar: false
    })
    if (showForm) {
      document.getElementById('searchForm').className = 'searchForm searchForm_show'
      document.getElementById(form).className = form + ' ' + form + '_show'
    } else {
      document.getElementById('searchForm').className = 'searchForm'
    }
  }

  handleOpenClick () {
    this.setState({
      showRightSidebar: true
    })
    document.getElementById('searchForm').className = 'searchForm'
  }

  renderMe (t) {
    let { showRightSidebar } = this.state
    return (
      <div className='sidebarContainer'>
        <div className='sidebar'>
          <div className='sidebar-top'>
            <div>
              <span className='sidebar-text sidebar-text_title'>
                <NavLink to={'/'}>
                  <span className='sidebar-BubbleTeaMaps-desktop'>BubbleTea Maps</span>
                  <span className='sidebar-BubbleTeaMaps-mobile'>B</span>
                </NavLink>
              </span>
            </div>
            <span className='sidebar-text' onClick={() => { this.handleOpenClick() }}>
              <span className='sidebar-search-desktop'>Recherche</span>
              <span className='sidebar-search-mobile'>R</span>
            </span>
          </div>
          <div className='sidebar-bottom'>
            <span className='sidebar-text'>
              <a href='mailto:margot.demaulmont@gmail.com' rel='noopener noreferrer'>
                <span className='sidebar-contact-desktop'>Contact</span>
                <span className='sidebar-contact-mobile'><i className='fa fa-at' /></span>
              </a>
            </span>
            <span className='sidebar-text'>
              <a href='https://github.com/MargotDem' rel='noopener noreferrer' target='_blank'>
                <span className='sidebar-mdm-desktop'>Margot de Maulmont</span>
                <span className='sidebar-mdm-mobile'><i className='fa fa-github' /></span>
              </a>
            </span>
          </div>
        </div>
        <div id='sidebar_right' className={'sidebar sidebar_right' + (showRightSidebar ? ' sidebar_right_show' : '')}>
          <div className='sidebar-top'>
            <button className='myRoundButton myButton_red' onClick={() => { this.handleCloseClick(false) }}>&times;</button>
            <span className='sidebar-text sidebar-text_title sidebar_right-text_title'>Critère</span>
            <span className='sidebar-text' onClick={() => this.handleCloseClick(true, 'borough-form')}>
              Arrondissement
            </span>
          </div>
          <div className='sidebar-bottom' />
        </div>
      </div>
    )
  }
}
