import React from 'react'

import BaseContainer from '../BaseContainer'
import SearchForm from '../../components/SearchForm'
import axios from 'axios'

export default class SearchResult extends BaseContainer {
  constructor (props) {
    super(props)
    this.state = ({
      bubbleteas: []
    })
  }

  componentDidMount () {
    axios.get('http://localhost:8888/public/api/bubbleteas', {
      params: {
        borough: 1
      }
    })
    .then(bubbleteas => {
      this.setState({ bubbleteas: bubbleteas.data })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  renderProducts () {
    return this.state.bubbleteas.map(bubbletea => {
      return (
        <li key={bubbletea.id} >
          { bubbletea.name }
        </li>
      )
    })
  }

  renderMe (t) {
    console.log(this.state)
    return (
      <div className='mainContainer'>
        <div className='searchResultContainer'>
          <div className='searchResultMessage'>resulttsss</div>

          <SearchForm />
        </div>
      </div>
    )
  }
}

// <div>
//   <ul>
//     { this.renderProducts() }
//   </ul>
// </div>

// componentDidMount () {
//   fetch('http://localhost:8888/public/api/bubbleteas'
//   // , {
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //     'Accept': 'application/json'
//   //   }
//
//   // }
// )
//     .then(response => {
//       return response.json()
//       // const test = response.json()
//       // console.log(test)
//     })
//     .then(bubbleteas => {
//     // Fetched product is stored in the state
//       this.setState({ bubbleteas })
//     })
// }
