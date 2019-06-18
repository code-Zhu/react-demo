import { put, takeEvery } from 'redux-saga/effects'
import { GET_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getList() {
   try {
    const res = yield axios.get('http://yapi.demo.qunar.com/mock/71813/todoList')
    const action = initListAction(res.data)
    yield put(action)
   } catch (e) {
   }
}

function* mySaga() {
  yield takeEvery(GET_LIST, getList)
}

export default mySaga;