import React, {Component} from 'react'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators'
import AntTodoListUI from './antTodoListUI'

class TodoListAnt extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <AntTodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  componentDidMount () {
    const action = getTodoList()
    store.dispatch(action)
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleSubmit() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoListAnt