import React, { Component } from 'react'

import { I18n } from 'react-i18next'

export default class BaseContainer extends Component {
  render () {
    return (
      <I18n>
        {
        (t) => {
          return (this.renderMe(t))
        }
      }
      </I18n>
    )
  }
}
