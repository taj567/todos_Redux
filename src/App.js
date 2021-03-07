import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { textTodos, todosList, todoStatus, todoFilter, completeTodo, unCompleteTodo, filteredTodo, allTodo} from './Actions/Actions.js';
type props = { dispatch:Function, _filteredtodos:Array<Object>}

class App<p: props> extends React.Component<p, state> {

  textHandler=(e) =>{
    e.preventDefault();
    this.props.textTodos(e.target.value)
  }

  submitTodoHandler = (e) => {
    e.preventDefault();
    const collectionData = this.props.inputText;
    if( collectionData !== "") {
    this.props.todosList([...this.props.todos,{collectionData, id:Math.random()*1000, completed: "Uncompleted"}])
    console.log(collectionData)
    }
  }

  deleteHandler = (data) => {
  console.log(data)
    this.props.todoFilter(this.props.todos.filter((todoos) => todoos.id !== data.id))
  }

  completeHandler = (data) => {
    this.props.completeTodo(this.props.todos.map((todooos) => {
      if(todooos.id === data.id) {
        return {
          ...todooos, completed: "Completed",
        }
      }
      return todooos;
    } ))
  }

  statusHandler = (e) => {
    e.preventDefault(); 
    this.props.todoStatus(e.target.value)
    //this.props.completeTodo(this.props.todos.filter((data) => data.completed === true)) &&
    //this.props.unCompleteTodo(this.props.todos.filter((data) => data.completed === false)) 
  }

  // filteredTodo = () => {
  //   switch(this.props.todoStatus) {
  //     case 'Completed':
  //       return (
  //         this.props.completeTodo(this.props.todos.filter(this.props.todos.filter((data) => data.completed === "Completed")))
  //       )
  //     case 'Uncompleted':
  //       return (
  //           this.props.unCompleteTodo(this.props.todos.filter((data) => data.completed === "Uncompleted"))
  //       )
  //     default:
  //      return todoStatus;
  //   }
  // }
  
  // componentDidUpdate() {
  //   filteredTodo()
  // }

  
    render() {
      //const { dataCollection} = this.state;
      let content = (
        <div className="App">
          <h6 className="App1">using state Todos</h6>
          <form>
                <input
                type="text"
                value={this.props.inputText}
                onChange={this.textHandler}
                className="todo-input"
                />
                <button
                className="todo-button"
                 type="submit"
                 value = {this.props.todos}
                 onClick= {this.submitTodoHandler.bind(this)}
                 >
                    <i className="fas fa-plus-square"></i>
                </button>
                 <div className="select">
                    <select 
                    name="todos"
                    value={this.props.status}
                    onChange={this.statusHandler.bind(this)}
                    className="filter-todo">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                    </select>
                </div> 
            </form>
            {/* this.props._filteredtodos.length && */}
            <ul>{this.props._filteredtodos.map( (data) => {
            return (
                <div className="todo" key={data.id}>
                    <ul key={data.id} className={`todo-item ${data.completed === "Completed" ? "completed" : ""}`}>{data.collectionData}</ul>
                <button
                onClick={this.completeHandler.bind(this, data)}
                className="complete-btn">
                  <i className="fas fa-check"></i>
                </button>
                <button
                onClick={this.deleteHandler.bind(this, data)}
                className="trash-btn">
                  <i className="fas fa-trash"></i>
                </button>
                </div>
            )
        })}</ul>
        </div>
      )
      return content;
    }
}

const mapStateToProps = (state) => {
  //const {todos } = state.todos
  //const {status} = state.status
  console.log(state.todos)
  return {
    _filteredtodos: (state.todos.length>0) ? state.todos.filter((data)=>{
      if(state.status === "All")
      return data
      else if(data.completed===state.status) {
      return data
      }
      }):[],
  inputText : state.inputText,
  todos: state.todos,
  status: state.status,
  }
}

export default connect(mapStateToProps, {textTodos, todosList, todoStatus, todoFilter, completeTodo, unCompleteTodo, filteredTodo, allTodo})(App);