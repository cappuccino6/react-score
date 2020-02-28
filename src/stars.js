import React from 'react'
import Star from './star'
import 'style-loader!css-loader!./stars.css'

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
