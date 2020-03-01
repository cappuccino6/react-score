import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Stars from './Stars'
import { calcScore, getElementTarget } from './util'
import 'style-loader!css-loader!./ReactScore.css'

const getDefaultChar = () => {
  <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
  </svg>
}
class ReactScore extends React.Component {
  constructor(props) {
    super(props)
    const value = calcScore(this.props.value)
    this.state = {
      value,
      finalScore: value
    }
  }

  getComputedValue = e => {
    // 向上冒泡找到含有 data-value 属性的元素
    const target = getElementTarget(e.target, 'value')
    if (!target) return
    const { value, score } = target.dataset
    const { half } = this.props
    return half ? Number(value) : Number(score)
  }

  handleMouseOver = e => {
    const newValue = this.getComputedValue(e)
    if (newValue) {
      this.setState({
        value: newValue
      })
    }
  }

  handleMouseLeave = () => {
    this.setState({
      value: this.state.finalScore
    })
  }

  handleMouseDown = e => {
    const { onChange } = this.props
    const newValue = this.getComputedValue(e)
    if (newValue) {
      this.setState({
        finalScore: newValue
      })
      onChange && onChange(newValue)
    }
  }

  render () {
    const { className } = this.props
    const { value } = this.state
    return (
      <div 
        className={
          cx('react-score-root-good', 'react-score-root', className)
        }
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onClick={this.handleMouseDown}
      >
        <Stars
          {...this.props}
          value={value}
        />
      </div>
    )
  }
}

/**
 * @param {String} count
 * @param {Function} onChange
 * @param {String} char
 */
ReactScore.defaultProps = {
  className: '',
  count: 5,
  onChange: () => {},
  half: true,
  value: 0,
  size: 30,
  spacing: 10,
  char: getDefaultChar(),
  color1: 'rgba(253, 84, 9, 0.2)',
  color2: 'rgb(253, 84, 9)'
}

ReactScore.propTypes = {}

export default ReactScore
