import React, { Component } from 'react'

import SearchForm from '../../components/SearchForm'

export default class Home extends Component {
  render () {
    return (
      <div className='mainContainer'>
        <div className='homeContainer'>
          <div className='homeMessage'>Trouvez un bubble tea près de chez vous</div>
          <SearchForm />
        </div>
      </div>
    )
  }
}
