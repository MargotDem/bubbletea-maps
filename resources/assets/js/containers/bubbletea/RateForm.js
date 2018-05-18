import React, { Component } from 'react'
import axios from 'axios'

export default class RateForm extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      grade: '1'
    })
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit () {
    let { id, numberOfVotes, currentAverage, showRateForm, fetchBubbleTea } = this.props
    let visitorGrade = Number(this.state.grade)
    let newNumberOfVotes = numberOfVotes + 1
    let newAverage = (numberOfVotes * currentAverage + visitorGrade) / (newNumberOfVotes)
    axios.put('/public/api/bubbleteas/average', {
      id: id,
      global_note: newAverage,
      note_votes: newNumberOfVotes
    })
    .then(response => {
      console.log(response)
      showRateForm(false)
      fetchBubbleTea()
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleInputChange (e) {
    let value = e.target.value
    this.setState({
      grade: value
    })
  }

  render () {
    return (
      <div>
        <select onChange={this.handleInputChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <div onClick={() => { this.handleSubmit() }}>Go</div>
      </div>
    )
  }
}
