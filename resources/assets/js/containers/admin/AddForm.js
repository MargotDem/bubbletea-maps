import React, { Component } from 'react'
import axios from 'axios'

export default class AddForm extends Component {
  constructor (props) {
    super(props)
    this.state = ({})
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleSubmit () {
    console.log(this.state)
    axios.put('/public/api/bubbleteas', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleInputChange (e) {
    let field = e.target.name
    let value = e.target.value
    this.setState({
      [field]: value
    })
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.handleSubmit()
    }
  }

  handleCloseClick () {
    this.props.showAddForm(false)
  }

  render () {
    return (
      <div className='addForm'>
        <button className='myRoundButton myButton_red' onClick={() => { this.handleCloseClick(false) }}>&times;</button>
        <form>
          <input type='text' name='name' placeholder='Nom' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <input type='text' name='address' placeholder='Adresse' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <input type='text' name='phone' placeholder='Téléphone' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <input type='text' name='open_times' placeholder='Horaires' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <input type='text' name='additional_info' placeholder='Autre(s) info(s)' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <input type='text' name='longitude' placeholder='Longitude' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <input type='text' name='latitude' placeholder='Latitude' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <input type='text' name='borough' placeholder='Arrondissement' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <input type='text' name='price_range' placeholder='Prix' onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          <div onClick={() => { this.handleSubmit() }}>Add</div>
        </form>
      </div>
    )
  }
}
