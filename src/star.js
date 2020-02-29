import React from 'react'
import cx from 'classnames'
import { throttle } from './util'
import 'style-loader!css-loader!./Star.css'

export default class Star extends React.Component {

  state = {
    mouseIndex: -1
  }

  handleMouseOver = throttle(e => {
    // const { mouseIndex } = this.state
    // const { index } = this.props
    // if (index !== mouseIndex) {
    //   this.setState({
    //     mouseIndex: index
    //   })
    // }
  }, 100)

  handleMouseLeave = () => {
    this.setState({
      mouseIndex: -1
    })
  }

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
    const { mouseIndex } = this.state
    const v = value * 2

    return (
      <span 
        className={cx('react-score-star-wrapper', {
          'react-score-star-scale': mouseIndex === index
        })}
        style={{
          ...this.style,
          marginLeft: `${index > 0 ? spacing : 0}px`
        }}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        <span
          style={{
            color: (v >= index * 2 + (half ? 1 : 2)) ? color2 : color1
          }}
          className="react-score-star-1"
          data-value={index + 0.5}
          data-score={index + 1}
        >
          {char}
        </span>
        <span
          style={{
            color: (v >= index * 2 + 2) ? color2 : color1
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

