import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timezones: [{ zone: 'Asia/Tokyo' }]
    }
  }

  componentWillMount() {
    fetch('/timezones')
      .then(res => res.json())
      .then(timezones => this.setState({ timezones }))
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (<div>
     {this.state.timezones.map(({ zone }) => {
       return <div className="times" key={zone}>
       <div className="zone" key={zone.zone}>{zone.split('/')[1].replace('_', ' ')}</div>
       <div className="time" key={zone.time}>{moment().tz(zone).format('hh:mm:ss a')}</div>
       </div>
     })}
    </div>)
  }
}

render(<Clock />, document.querySelector('#app'))
