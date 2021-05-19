import React from "react";

class TodoForm extends React.Component {
  todoRef = React.createRef();

  addItemOnList = e => {
    e.preventDefault();
    const todoItem = {
      todo: this.todoRef.current.value,
      isCompleted: false
    };
    this.props.addToDoItems(todoItem);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form id="todoList-form" onSubmit={this.addItemOnList}>
        <input type="text" name="todosTxtbx" ref={this.todoRef} required />
        <button>submit</button>
      </form>
    );
  }
}

export default TodoForm;







/*import React from "react";

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value:event.target.value});
  }
  handleSubmit(event) {
    isCompleted:false
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render(){
    return (
        <form ref="form" onSubmit ={this.handleSubmit}>
          <input type="text" ref="itemName" className="add-todo" placeholder= "add a new todo..." 
          value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit"/>
        </form>
      /*<form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add a new todo"/>
        <button type="submit" className="btn btn-default">Submit</button> 
      </form>
    );   
  }
} */