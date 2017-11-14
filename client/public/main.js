import React from 'react'
import { render } from 'react-dom'

export class GetTime extends React.Component {
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
    // return <Clock timezones={this.state.timezones[0]} />
  }
}

render(<GetTime />, document.querySelector('#app'))
