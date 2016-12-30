import React from 'react'
import Get2 from './Get2'

const button = (props) => <button onClick={() => console.log(props.resp)}>Hello</button>

const TestButton2 = (props) => {
  return (<Get2 route="/hourlytweets" component={button}/>)
}

export default TestButton2