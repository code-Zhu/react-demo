import React, {Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount TodoItem销毁前')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps TodoItem props更新')
  }
  render() {
    const {testdefault, content} = this.props
    return(
    <li onClick={this.handleClick}>{testdefault}-{content}</li>
    )
  }
  handleClick() {
    this.props.handleDelete(this.props.index)
  }
}
TodoItem.propTypes = {
  content: PropTypes.string
}
TodoItem.defaultProps = {
  testdefault: 'default'
}
export default TodoItem