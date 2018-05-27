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
    let { bubbleTeaId, showEditForm, fetchBubbleTea } = this.props
    let bubbletea = { ...this.state, id: bubbleTeaId }
    let url = '/public/api/bubbleteas/' + bubbleTeaId
    axios.put(url, bubbletea)
    .then(response => {
      console.log(response)
      showEditForm(false)
      fetchBubbleTea()
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
    this.props.showEditForm(false)
  }

  render () {
    return (
      <div className='addForm'>
        <button className='myRoundButton myButton_red' onClick={() => { this.handleCloseClick(false) }}>&times;</button>
        <form>
          <input
            type='text'
            name='name'
            placeholder='Nom'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.name}
          />
          <input
            type='text'
            name='address'
            placeholder='Adresse'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.adress}
          />
          <input
            type='text'
            name='phone'
            placeholder='Téléphone'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.phone}
          />
          <input
            type='text'
            name='open_times'
            placeholder='Horaires'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.open_times}
          />
          <input
            type='text'
            name='additional_info'
            placeholder='Autre(s) info(s)'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.additional_info}
          />
          <input
            type='text'
            name='longitude'
            placeholder='Longitude'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.longitude}
          />
          <input
            type='text'
            name='latitude'
            placeholder='Latitude'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.latitude}
          />
          <input
            type='text'
            name='borough'
            placeholder='Arrondissement'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.borough}
          />
          <input
            type='text'
            name='price_range'
            placeholder='Prix'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.price_range}
          />
          <input
            type='text'
            name='pic_link'
            placeholder='Lien photo'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.pic_link}
          />
          <div onClick={() => { this.handleSubmit() }}>Edit</div>
        </form>
      </div>
    )
  }
}
