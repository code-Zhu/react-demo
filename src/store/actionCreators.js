import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST_ACTION, GET_LIST } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_LIST_ITEM
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_LIST_ITEM,
  index
})
export const initListAction = (data) => ({ // 返回一个对象
  type: INIT_LIST_ACTION,
  data
})
// export const getTodoList = () => { // 使用thunk中间件后可以返回一个函数
//   return (dispatch) => { // 接受一个dispatch
//     axios.get('http://yapi.demo.qunar.com/mock/71813/todoList').then(res => {
//       const action = initListAction(res.data)
//       dispatch(action)
//     })
//   }
// }
export const getListAction = () => ({
  type: GET_LIST
})