import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem.js'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  shouldComponentUpdate() {
    console.log('返回true才更新组件')
    return true
  }
  componentWillMount() {
    console.log('componentWillMount todoList挂载前')
  }
  componentDidMount() {
    console.log('componentDidMount todoList挂载后')
  }
  componentWillUpdate() {
    console.log('componentWillUpdate todoList更新前')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate todoList更新后')
  }
  render() {
    return(
      <Fragment>
        <div>
          <label htmlFor="input">请输入</label>
          <input value={this.state.inputValue} id="input" type="text" onChange={this.handleInputChange}/>
          <button onClick={this.handleAddItem}>提交</button>
          <ul>
            {this.state.list.map((e, index) => {
              return <TodoItem key={e} content={e} index={index} handleDelete={this.handleDelete}/>
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleAddItem() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDelete(index) {
    const list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList