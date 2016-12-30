import React from 'react'
import axios from 'axios'

export default class Get2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resp: []
    }
  }
  componentDidMount() {
    const {route} = this.props
    axios
      .get(route)
      .then(resp => this.setState({resp: resp.data}))
  }

  render() {
    const {component:Component} = this.props
    return (<Component resp={this.state.resp}/>)
  }
}

Get2.PropTypes = {
  component: React.PropTypes.func 
}