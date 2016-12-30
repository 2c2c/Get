import React from 'react'

const TestButton = (props, context) => (
  <button onClick={() => console.log(context.resp)}>Hello</button>
)

TestButton.contextTypes = {
  resp: React.PropTypes.any
}

export default TestButton