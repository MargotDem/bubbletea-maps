import React, { Component } from 'react'
import axios from 'axios'
import { withCookies } from 'react-cookie'
import { NavLink } from 'react-router-dom'

import AddForm from './AddForm'

class Admin extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      isAdminLogged: false,
      showForm: false,
      showComments: false
    })
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.showAddForm = this.showAddForm.bind(this)
    this.fetchComments = this.fetchComments.bind(this)
  }

  componentDidMount () {
    const { cookies } = this.props
    let isAdminLogged = cookies.get('admin') === 'true'
    isAdminLogged && this.setState({
      isAdminLogged: isAdminLogged
    })
  }

  logOut () {
    const { cookies } = this.props
    cookies.remove('admin')
    this.setState({
      isAdminLogged: false
    })
  }

  handleSubmit () {
    console.log(this.state)
    let { email, password } = this.state
    axios.post('/public/api/admin', {
      email: email,
      password: password
    })
    .then(response => {
      console.log(response)
      if (!response.data) {
        console.log('unable to connect')
      } else {
        const { cookies } = this.props
        cookies.set('admin', 'true', { maxAge: 7200 })
        this.setState({
          isAdminLogged: true
        })
      }
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

  showAddForm (showForm) {
    this.setState({
      showForm: showForm,
      showComments: false
    })
  }

  fetchComments () {
    let url = '/public/api/comments'
    axios.get(url)
    .then(response => {
      this.setState({
        comments: response.data,
        showComments: true,
        showForm: false
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  deleteComment (itemId) {
    let url = '/public/api/comments/' + itemId
    axios.delete(url)
    .then(response => {
      console.log(response)
      this.fetchComments()
    })
    .catch(error => console.log(error))
  }

  renderWelcomePage () {
    let { showForm, showComments, comments } = this.state
    return (
      <div className='mainContainer'>
        <div className='adminContainer'>
          {
            showForm && <AddForm showAddForm={this.showAddForm} />
          }
          welcome page
          <div>
            <NavLink to={'/bubbleteas'}>Tous les bubbleteas</NavLink>
          </div>
          <div>
            <span onClick={this.fetchComments}>Tous les commentaires</span>
          </div>
          <div onClick={() => { this.showAddForm(true) }}>
            Add a bubble tea
          </div>
          <div onClick={() => { this.logOut() }}>Log out</div>
          <div className={'admin-comments' + (showComments ? ' admin-comments-show' : '')}>
            {
              comments && comments.map((item, index) => {
                return (
                  <div key={index} className='comment'>
                    <h6><span className='comment-author'>{item.author_name}</span>&nbsp;<span className='comment-date'>&bull;&nbsp;{item.created_at}</span></h6>
                    {item.text}
                    <h6><span className='comment-delete' onClick={() => this.deleteComment(item.id)}>Delete</span></h6>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

  renderConnectionForm () {
    return (
      <div className='ConnectionForm'>
        <form>
          <input
            type='text'
            name='email'
            placeholder='Your email'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <input
            type='password'
            name='password'
            placeholder='Your password'
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <div className='' onClick={() => { this.handleSubmit() }}>Log in</div>
        </form>
      </div>
    )
  }

  render () {
    let { isAdminLogged } = this.state
    if (!isAdminLogged) {
      return this.renderConnectionForm()
    } else {
      return this.renderWelcomePage()
    }
  }
}

export default withCookies(Admin)
