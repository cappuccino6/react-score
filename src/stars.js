import React from 'react'
import Star from './Star'
import 'style-loader!css-loader!./Stars.css'

export default ({
  ...props,
  count,
  char
}) => {
  const stars = new Array(count).fill(char)
  return (
    <React.Fragment>
      {stars.map((item, index) => (
        <Star
          key={index}
          index={index}
          char={char}
          {...props}
        />
      ))}
    </React.Fragment>
  )
}
