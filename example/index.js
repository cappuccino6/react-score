import React from 'react'
import ReactDOM from 'react-dom'
import ReactScore from '../lib'

const App = () => {
  return (
    <div>
      <h1>React Score</h1>
      <ReactScore
        value={3.5}
      />
      <ReactScore
        value={2}
        size={35}
        spacing={2}
      />
      <ReactScore
        value={2.5}
        size={40}
        spacing={20}
        char='❤'
      />
      <p>@copyright reserved</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
