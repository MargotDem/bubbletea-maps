import React, { Component } from 'react'

export default class Home extends Component {
  handleCloseClick () {
    document.getElementById('searchForm').className = 'searchForm'
  }
  handleSubmit () {
    document.getElementById('searchForm-borough').submit()
  }
  render () {
    return (
      <div className='mainContainer'>
        <div className='homeContainer'>
          <div className='homeMessage'>Trouvez un bubble tea près de chez vous</div>
          <div id='searchForm' className='searchForm'>
            <button className='myRoundButton myButton_red' onClick={() => { this.handleCloseClick() }}>&times;</button>
            <section className='searchForm-top'>
              <form id='searchForm-borough' method='post' action=''>
                <select name='searchForm-borough'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </form>
            </section>
            <section className='searchForm-bottom'>
              <button className='myButton myButton_red' onClick={() => { this.handleSubmit() }}>Rechercher</button>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
