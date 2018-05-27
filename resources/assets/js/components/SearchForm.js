import React, { Component } from 'react'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      'searchFormBorough': 1
    })
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // why the hell does this.props.location not exist at this point in time??
  }

  handleCloseClick () {
    document.getElementById('searchForm').className = 'searchForm'
  }

  handleSubmit (e) {
    window.location = ('#/bubbleteas#' + this.state.searchFormBorough)

    // have to reload so that if user does another search while on /#/bubbleteas#12
    // already, it reloads and fetches the right results
    // TODO: not do this but watch for url change or something (because manually changing the url this doesnt reload)?
    window.location.reload()
    document.getElementById('searchForm').className = 'searchForm'
  }

  handleInputChange (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div id='searchForm' className='searchForm'>
        <button className='myRoundButton myButton_red' onClick={() => { this.handleCloseClick() }}>&times;</button>
        <section className='searchForm-top'>

          <div className='borough-form' id='borough-form'>
            <p>Choisissez l’arrondissement :</p>
            <form method='post' action=''>
              <select className='mySelect' name='searchFormBorough' onChange={this.handleInputChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </form>
          </div>

          <div className='name-form' id='name-form'>
            <p>Entrez le nom de l’établissement recherché :</p>
            <form method='post' action=''>
              <input
                type='text'
                name='searchFormName'
                onChange={this.handleInputChange}
              />
            </form>
          </div>

        </section>
        <section className='searchForm-bottom'>
          <button className='myButton myButton_red' onClick={this.handleSubmit}>Rechercher</button>
        </section>
      </div>
    )
  }
}
