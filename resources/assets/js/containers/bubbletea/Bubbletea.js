/* global google */

import React, { Component } from 'react'
import axios from 'axios'

import SearchForm from '../../components/SearchForm'
import RateForm from './RateForm'

export default class Bubbletea extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      bubbletea: [],
      showRateForm: false
    })
    this.showRateForm = this.showRateForm.bind(this)
    this.fetchBubbleTea = this.fetchBubbleTea.bind(this)
  }

  componentDidMount () {
    this.fetchBubbleTea()
  }

  initMap (bubbleTea) {
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

  fetchBubbleTea (reloadMap) {
    let url = this.props.location.pathname

    axios.get('http://localhost:8888/public/api' + url)
    .then(bubbletea => {
      this.setState({ bubbletea: bubbletea.data })
    })
    .catch(function (error) {
      console.log(error)
    }).then(() => {
      let { bubbletea } = this.state
      this.initMap({
        info: bubbletea.name,
        lat: bubbletea.latitude,
        long: bubbletea.longitude
      })
    })
  }

  showRateForm (showRateForm) {
    this.setState({
      showRateForm: showRateForm
    })
  }

  render () {
    let { bubbletea, showRateForm } = this.state
    return (
      <div className='mainContainer'>
        <SearchForm />
        <div className='bubbleteaContainer'>
          <div className='bbtMap' id='map' />
          <div className='bbtContent'>
            <div className='bbtPic'>
              <img alt='' src={bubbletea.pic_link} />
            </div>
            <div className='bbtInfos'>
              <div className='bbtInfos-left'>
                <div className='bbtName'>{bubbletea.name}</div>
                <div className='bbtCom'>{bubbletea.additional_info}</div>
                <div className='bbtDetails'>
                  <span>{bubbletea.address}</span>
                  <span>{bubbletea.phone}</span>
                  <span>{bubbletea.price_range}</span>
                </div>
              </div>
              <div className='bbtInfos-right'>
                {Math.round(bubbletea.global_note * 10) / 10}/10
                &nbsp;
                <span className='rateBubbleTea' onClick={() => { this.showRateForm(true) }}>
                  +
                </span>
                {
                  showRateForm && <RateForm
                    id={bubbletea.id}
                    numberOfVotes={bubbletea.note_votes}
                    currentAverage={bubbletea.global_note}
                    showRateForm={this.showRateForm}
                    fetchBubbleTea={this.fetchBubbleTea}
                  />
                }
              </div>
            </div>
          </div>
          <div className='comments' />
        </div>
      </div>
    )
  }
}
