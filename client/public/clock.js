import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {time: new Date()}
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return <div>Current time is: {moment().tz(this.state.time.toLocaleTimeString()).format('hh:mm:ss a')}</div>
  }
}

render(<Clock />, document.querySelector('#app'))
