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
    let criterion = this.props.location.hash.substr(1) || 'all'
    axios.get('http://localhost:8888/public/api/bubbleteas', {
      params: {
        borough: criterion
      }
    })
    .then(bubbleteas => {
      this.setState({ bubbleteas: bubbleteas.data })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render () {
    return (
      <div className='mainContainer'>
        <SearchForm />
        <div className='searchResultContainer'>
          <div className='searchResultMessage'>Voici les résultats pour votre recherche :</div>
          <div className='results'>
            {
              this.state.bubbleteas.map(bubbletea => {
                return (
                  <NavLink to={'/bubbleteas/' + bubbletea.id} className='bbtCard' key={bubbletea.id}>
                    <div className='bbtPic'>
                      <img alt='' src={bubbletea.pic_link} />
                    </div>
                    <div className='bbtInfo'>
                      <div className='bbtName'>{bubbletea.name}</div>
                      <div>{Math.round(bubbletea.global_note * 10) / 10}</div>
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
