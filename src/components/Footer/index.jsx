import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    //全选checkbox的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }

    //清除所有以及完成的
    handleClearAllDone = (Count) => {
        if (Count === 0) {
            alert('您还没有已完成的任务');
            return;
        }
        this.props.clearAllDone();
    }

    render() {
        const { todos } = this.props
        //首先计算一下已完成个数
        const doneCount = todos.reduce((pre, todo) => {
            return todo.done ? pre + 1 : pre
        }, 0)
        //总数
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === total && doneCount !== 0} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={() => { this.handleClearAllDone(doneCount) }} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
