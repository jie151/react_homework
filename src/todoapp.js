import "./App.css";
import React, {Component} from "react";
import TodoList from "./TodoList";
import TodoAddForm from "./TodoAddForm";
import TodoTitle from "./TodoHeader";

class Todoapp extends Component {
  state = {
    todoItems: {}
  };

  addToDoItems = item => {
    const items = { ...this.state.todoItems };
    console.log(items);
    items[`item${Date.now()}`] = item;
    this.setState({
      todoItems: items
    });
  };

  removeToDoItem = item => {
    const todos = { ...this.state.todoItems };
    delete todos[item];
    this.setState({ todoItems: todos });
  };

  updateTodos = (key, updatedTodo) => {
    const todos = { ...this.state.todoItems };
    todos[key] = updatedTodo;
    this.setState({ todoItems: todos });
  };

  render() {
    return (
      <div className="App">
        <TodoTitle />
        <TodoAddForm addToDoItems={this.addToDoItems} />
        <ul>
          {Object.keys(this.state.todoItems).map(key => (
            <TodoList
              key={key}
              index={key}
              todoItems={this.state.todoItems[key]}
              removeToDoItem={this.removeToDoItem}
              updateTodos={this.updateTodos}
            />
          ))}
        </ul>
      </div>
    );
  }
}
const Todo = () => {
  return <Todoapp initItems/>;
};
export default Todo;