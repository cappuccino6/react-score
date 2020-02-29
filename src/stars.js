import React from 'react'
import Star from './Star'

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
