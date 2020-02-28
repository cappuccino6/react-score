import React from 'react'
import { calcScore } from './util'
import 'style-loader!css-loader!./Star.css'

export default ({
  char,
  size,
  value,
  spacing,
  color1,
  color2,
  index
}) => {
  const v = value * 2

  return (
    <span 
      className="react-score-star-wrapper"
      style={{
        marginLeft: `${index > 0 ? spacing : 0}px`
      }}
    >
      <span
        style={{
          fontSize: `${size}px`,
          color: (v >= index * 2 + 1) ? color2 : color1
        }}
        className="react-score-star-1"
      >
        {char}
      </span>
      <span
        style={{
          fontSize: `${size}px`,
          color: (v >= index * 2 + 2) ? color2 : color1
        }}
        className="react-score-star-2"
      >
        {char}
      </span>
    </span>
  )
}
