import React from 'react'
import { render } from 'react-dom'

// const timeZones = () => {
//   return fetch('/timezones')
//     .then(res => res.json())
//     .then(result => result.map(({ zone }) => ({
//       zone: zone
//         .split('/')[1]
//         .replace('_', ' '),
//       time: moment()
//         .tz(zone)
//         .format('hh:mm:ss a')
//     })))
// }

class GetTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timezones: ['Asia/Tokyo']
    }
    fetch('/timezones')
      .then(res => res.json())
      .then(timezones => (this.state.timezones = timezones))
  }

  render() {
    return <div>Current time is: {moment().tz(this.state.timezones[0].toString()).format('hh:mm:ss a')}</div>
    // return <Clock timezones={this.state.timezones[0]}>
  }
}

// render(<GetTime />, document.querySelector('#app'))
//
// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import styled from 'styled-components'
//
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       timezones: ['Asia/Tokyo']
//     }
//   }
//
//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000)
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
//
//   tick() {
//     this.setState({
//       time: new Date()
//     })
//   }
//
//   render() {
//     return <div>Current time is: {moment().tz(this.state.timezones.toString()).format('hh:mm:ss a')}</div>
//     // return <Clock timezones={this.state.timezones[0]}>
//   }
// }
//
// render(<Clock />, document.querySelector('#app'))
