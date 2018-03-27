/* global google */

import React, { Component } from 'react'

import SearchForm from '../../components/SearchForm'
import axios from 'axios'

export default class Bubbletea extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      bubbletea: []
    })
  }

  componentDidMount () {
    function initMap (bubbleTea) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(bubbleTea.lat, bubbleTea.long),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      })

      var infowindow = new google.maps.InfoWindow({})

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(bubbleTea.lat, bubbleTea.long),
        map: map
      })

      google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
          infowindow.setContent(bubbleTea.info)
          infowindow.open(map, marker)
        }
      })(marker))
    }

    axios.get('http://localhost:8888/public/api/bubbleteas/6')
    .then(bubbletea => {
      this.setState({ bubbletea: bubbletea.data })
    })
    .catch(function (error) {
      console.log(error)
    }).then(() => {
      let { bubbletea } = this.state
      initMap({
        info: bubbletea.name,
        lat: bubbletea.latitude,
        long: bubbletea.longitude
      })
    })
  }

  render () {
    // console.log(this.state.bubbletea.name)
    return (
      <div className='mainContainer'>
        <div className='bubbleteaContainer'>
          <SearchForm />
          <div className='bbtMap' id='map'></div>
          <div className='bbtInfo'>
            {this.state.bubbletea.address}
          </div>
          <div className='comments'></div>
        </div>
      </div>
    )
  }
}
