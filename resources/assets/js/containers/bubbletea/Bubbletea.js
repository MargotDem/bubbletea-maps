/* global google */

import React, { Component } from 'react'
import axios from 'axios'

import SearchForm from '../../components/SearchForm'
import RateForm from './RateForm'
import CommentForm from './CommentForm'

export default class Bubbletea extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      bubbletea: [],
      showRateForm: false
    })
    this.showRateForm = this.showRateForm.bind(this)
    this.fetchBubbleTea = this.fetchBubbleTea.bind(this)
    this.fetchComments = this.fetchComments.bind(this)
  }

  componentDidMount () {
    this.fetchBubbleTea()
    this.fetchComments()
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
      // let { bubbletea } = this.state
      // this.initMap({
      //   info: bubbletea.name,
      //   lat: bubbletea.latitude,
      //   long: bubbletea.longitude
      // })
    })
  }

  fetchComments () {
    let pathname = this.props.location.pathname
    let url = 'comments/' + pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1)

    axios.get('http://localhost:8888/public/api/' + url)
    .then(comments => {
      this.setState({ comments: comments.data })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  showRateForm (showRateForm) {
    this.setState({
      showRateForm: showRateForm
    })
  }

  render () {
    let { bubbletea, comments, showRateForm } = this.state
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
          <div className='bbtComments'>
            <div className='comment'>
              <CommentForm
                bubbleTeaId={bubbletea.id}
                fetchComments={this.fetchComments}
              />
            </div>
            {
              comments !== undefined && comments.map((item, index) => {
                return (
                  <div key={index} className='comment'>
                    <h6><span className='comment-author'>{item.author_name}</span>&nbsp;<span className='comment-date'>&bull;&nbsp;{item.created_at}</span></h6>
                    {item.text}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
