import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: JSON.parse(localStorage.getItem('todos'))
            // 定义清单list done 是否完成 title是标题文字
        }
    }


    //addtodo用于添加一个todo，接受的参数的todo对象
    addTodo = (todoObj) => {
        //获取原todos
        const { todos } = this.state;
        //追加一个todo
        const newTodos = [todoObj, ...todos]
        //更新状态
        localStorage.setItem('todos', JSON.stringify(newTodos));
        this.setState({ todos: newTodos });
    }

    //用于更新一个todo对象
    updateTodo = (id, done) => {
        //获取状态中的todos
        const { todos } = this.state;
        //匹配处理数据
        const newTodos = todos.map((todo) => {
            if (todo.id === id) { return { ...todo, done: done } }
            else return todo;
        })
        localStorage.setItem('todos', JSON.stringify(newTodos));
        this.setState({ todos: newTodos })
    }

    //用于删除一个todo对象
    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        localStorage.setItem('todos', JSON.stringify(newTodos));
        this.setState({ todos: newTodos })
    }

    //全选
    checkAllTodo = (done) => {
        //获取原来的todos
        const { todos } = this.state;
        //加工数据
        const newTodos = todos.map((todo) => {
            return { ...todo, done: done }
        })
        //更新状态
        localStorage.setItem('todos', JSON.stringify(newTodos));
        this.setState({ todos: newTodos })
    }

    //清除所有已完成的
    clearAllDone = () => {
        //获取原来的todos
        const { todos } = this.state;
        //过滤数据
        const newTodos = todos.filter((todo) => {
            return !todo.done;
        })
        localStorage.setItem('todos', JSON.stringify(newTodos));
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo} />
                </div>
            </div>
        )
    }
}

