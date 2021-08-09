import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Meme from "../images/dogeMeme.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div style={{ display: "inline-block", float: "right" }}>
        <button
          style={{
            backgroundColor: "white",
            borderColor: "white",
            borderRadius: "15px",
            height: "3vh",
          }}
        >
          <Link to="/notes" style={{ fontSize: "2vh", color: "black" }}>
            Start now!
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            backgroundColor: "white",
            borderColor: "white",
            borderRadius: "15px",
            height: "3vh",
          }}
          onClick={() => completeTodo(index)}
        >
          &#10004;
        </button>
        &nbsp;
        <button
          style={{
            backgroundColor: "white",
            borderColor: "white",
            borderRadius: "15px",
            height: "3vh",
          }}
          onClick={() => removeTodo(index)}
        >
          &#10060;
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    openModal();

    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <img src={Meme} alt="" width="500" height="600"></img>
        <button onClick={closeModal}>Close</button>
      </Modal>
      <input
        style={{
          margin: "3% 14.5% 3% 15.25%",
          height: "7vh",
          width: "65%",
          borderRadius: "5px",
          textAlign: "center",
          fontSize: "3vh",
        }}
        type="text"
        className="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Add a new task here"
      />
    </form>
  );
}

function ToDoList() {
  const [todos, setTodos] = React.useState([
    {
      text: "Make a to-do list",
      isCompleted: false,
    },
    {
      text: "Work on super important project!",
      isCompleted: false,
    },
    {
      text: "Vacuum bob's room",
      isCompleted: false,
    },
    {
      text: "Watch youtube!",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list toDoList">
        <div>
          <div className="toDoItem2">
            <h3>Current tasks:</h3>
          </div>
          {todos.map((todo, index) => (
            <div className="toDoItem">
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            </div>
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default ToDoList;
