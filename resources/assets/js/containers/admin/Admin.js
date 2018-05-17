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
      showForm: false
    })
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.showAddForm = this.showAddForm.bind(this)
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
      showForm: showForm
    })
  }

  renderWelcomePage () {
    let { showForm } = this.state
    return (
      <div>
        {
          showForm && <AddForm showAddForm={this.showAddForm} />
        }
        welcome page
        <div>
          <NavLink to={'/bubbleteas'}>Tous les bubbleteas</NavLink>
        </div>
        <div onClick={() => { this.showAddForm(true) }}>
          Add a bubble tea
        </div>
        <div onClick={() => { this.logOut() }}>Log out</div>
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
