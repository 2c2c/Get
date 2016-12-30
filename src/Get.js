import React from 'react'
import axios from 'axios'

export default class Get extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resp: []
    }
  }
  componentDidMount() {
    const {route} = this.props;
    axios
      .get(route)
      .then((resp) => {
        this.setState({resp: resp.data})
      })
  }

  getChildContext() {
    return {resp: this.state.resp}
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Get.childContextTypes = {
  resp: React
    .PropTypes
    .any
}