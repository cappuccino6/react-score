import React from 'react'
import ReactDOM from 'react-dom'
import ReactScore from '../lib'

const App = () => {
  return (
    <div>
      <h1>React Score</h1>
      <ReactScore />
      <p>@copyright reserved</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
