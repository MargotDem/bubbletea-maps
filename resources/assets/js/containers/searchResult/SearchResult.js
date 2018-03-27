import React, { Component } from 'react'

import SearchForm from '../../components/SearchForm'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class SearchResult extends Component {
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
      // console.log(bubbleteas.data)
      this.setState({ bubbleteas: bubbleteas.data })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render () {
    return (
      <div className='mainContainer'>
        <div className='searchResultContainer'>
          <SearchForm />
          <div className='searchResultMessage'>Voici les résultats pour votre recherche :</div>
          <div className='results'>
            {
              this.state.bubbleteas.map(bubbletea => {
                return (
                  <NavLink to={'/bubbleteas/' + bubbletea.name} className='bbtCard'>
                    <div className='bbtPic' />
                    <div className='bbtInfo'>
                      <div className='bbtName'>{bubbletea.name}</div>
                      <div>note</div>
                      <div>{bubbletea.address}</div>
                    </div>
                  </NavLink>
                )
              })
            }
          </div>
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
