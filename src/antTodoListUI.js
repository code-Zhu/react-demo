// import React, { Component } from 'react'
import React from 'react'
import { List, Input, Button } from 'antd'

// 无状态组件的写法
const AntTodoListUI = (props) => {
  return (
    <div style={{margin: '10px'}}>
      <div>
        <Input value={props.inputValue} placeholder="请输入内容"
          style={{width:400,marginRight:10}} onChange={props.handleInputChange}></Input>
        <Button onClick={props.handleSubmit}>提交</Button>
      </div>
      <List
        style={{width:473,marginTop:10}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}

// ui组件：只包含视图
// class AntTodoListUI extends Component {
//   render() {
//     return (
//       <div style={{margin: '10px'}}>
//         <div>
//           <Input value={this.props.inputValue} placeholder="请输入内容"
//             style={{width:400,marginRight:10}} onChange={this.props.handleInputChange}></Input>
//           <Button onClick={this.props.handleSubmit}>提交</Button>
//         </div>
//         <List
//           style={{width:473,marginTop:10}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }
export default AntTodoListUI

/* 
笔记： ui组件和容器组件
1、无状态组件
 定义和使用场景： 只有render函数的组件可以写成一个无状态组件，无状态组件就是一个接受props参数的函数
 优点：性能更高：本身是一个函数，执行一个函数的性能比解析一个class类高
*/