import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = { mouse: false }

    //鼠标移入移出
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    //勾选或者取消勾选
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    //删除一个todo的回调
    handleDelete = (id) => {
        if (window.confirm('确认删除吗')) {
            this.props.deleteTodo(id);
        }

    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => { this.handleDelete(id) }} style={{ display: mouse ? 'block' : 'none' }} className="btn btn-danger" >删除</button>
            </li>
        )
    }
}