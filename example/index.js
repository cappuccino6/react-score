import React from 'react'
import ReactDOM from 'react-dom'
import ReactScore from '../src'

const handleChange = score => {
  console.log(score)
}

const App = () => {
  return (
    <div>
      <h1>React Score</h1>
      <p>
        <ReactScore
          value={3.5}
          onChange={handleChange}
          edit={false}
        />
      </p>
      <p>
        <ReactScore
          count={10}
          value={2}
          size={35}
          spacing={2}
          half={false}
          color2='#fadb14'
          onChange={handleChange}
        />
      </p>
      <p>
        <ReactScore
          value={2.5}
          size={40}
          spacing={20}
          char='❤'
          onChange={handleChange}
        />
      </p>
      <p>
        <ReactScore
          value={4.5}
          size={60}
          spacing={20}
          char='H'
          onChange={handleChange}
        />
      </p>
      <p>
        <ReactScore
          count={3}
          value={1}
          size={30}
          spacing={30}
          char='S'
          onChange={handleChange}
        />
      </p>
      <p>@copyright reserved</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
