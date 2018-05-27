import React, { Component } from 'react'
import axios from 'axios'

export default class CommentForm extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      showFullForm: false
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      showFullForm: e.target.value !== '',
      [name]: value
    })
  }

  handleSubmit () {
    let { author_name, text } = this.state
    let { bubbleTeaId, fetchComments } = this.props
    let url = '/public/api/comments'
    axios.post(url, {
      bubble_tea_id: bubbleTeaId,
      author_name: author_name,
      text: text
    })
    .then(response => {
      console.log(response)
      this.setState({
        author_name: '',
        text: '',
        showFullForm: false
      })
      fetchComments()
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    let { showFullForm } = this.state
    return (
      <div>
        <form className='comment-form'>
          <textarea
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Votre commentaire ici...'
            onChange={this.handleChange}
          />
          <div className={showFullForm ? 'full-form-show' : 'full-form'}>
            <input
              type='text'
              name='author_name'
              value={this.state.author_name}
              placeholder='Votre nom'
              onChange={this.handleChange}
            />
          </div>
        </form>
        <button
          className={'myButton myButton_red myButton_small' + (showFullForm ? ' full-form-show' : ' full-form')}
          onClick={this.handleSubmit}
        >
          Envoyer
        </button>
      </div>
    )
  }
}
