import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Stars from './Stars'
import { calcScore, getElementTarget } from './util'
import 'style-loader!css-loader!./ReactScore.css'

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
  mode: 'color', // color 或者 icon
  half: true,
  value: 3.5,
  size: 30,
  spacing: 10,
  char: '★',
  color1: 'rgba(253, 84, 9, 0.2)',
  color2: 'rgb(253, 84, 9)',
  icon1: '😢',
  icon2: '😊'
}

ReactScore.propTypes = {}

export default ReactScore
