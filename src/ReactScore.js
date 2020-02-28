import React from 'react'
import PropTypes from 'prop-types'
import Stars from './Stars'
import { calcScore } from './util'
import 'style-loader!css-loader!./ReactScore.css'

class ReactScore extends React.Component {
  
  get rootClass() {
    const { className } = this.props
    if (className) {
      return `react-score-root, ${className}`
    } else {
      return 'react-score-root'
    }
  }

  state = {
    value: calcScore(this.props.value) || 0
  }

  handleClick = () => {
    this.setState({
      value: this.state.value - 1
    })
  }

  render () {
    const { value } = this.state
    return (
      <div className={this.rootClass} onClick={this.handleClick}>
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
