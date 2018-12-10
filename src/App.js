import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './AddTodos';

class App extends Component {
  state = {
    todos: [
      {id:1, content: "pick something up"},
      {id:2, content: "wash card"},
      {id:3, content: "ice cream"}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos : todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })

  }

  render() {
    return (
      <div className="App-app container">
         <h1 className="center blue-text">Todos's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
