import React from 'react'
import cx from 'classnames'
import 'style-loader!css-loader!./Star.css'

export default class Star extends React.Component {
  get style() {
    const { size } = this.props
    return {
      fontSize: `${size}px`,
      lineHeight: `${size}px`
    }
  }

  render () {
    const {
      char,
      size,
      value,
      spacing,
      color1,
      color2,
      index,
      half
    } = this.props

    return (
      <span 
        className={cx('react-score-star-wrapper')}
        style={{
          ...this.style,
          marginLeft: `${index > 0 ? spacing : 0}px`
        }}
      >
        <span
          style={{
            color: (value >= index + (half ? 0.5 : 1)) ? color2 : color1
          }}
          className="react-score-star-1"
          data-value={index + 0.5}
          data-score={index + 1}
        >
          {char}
        </span>
        <span
          style={{
            color: (value >= index + 1) ? color2 : color1
          }}
          className="react-score-star-2"
          data-value={index + 1}
          data-score={index + 1}
        >
          {char}
        </span>
      </span>
    )
  }
}
