// Todo.jsx
import React, { useState } from "react";
import SingleTodo from "./SingleTodo";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [time, setTime] = useState("");

  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const removeTodo = (id) => {
    let newTodos = data.filter((item) => {
      return item.id !== id;
    });
    setData(newTodos);
    setMessage("Todo removed successfully!");

    setTimeout(() => {
      setMessage("");
    }, 1100);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newTodo = { todo, name, age, time, id: Date.now() };
    setData([...data, newTodo]);
    setTodo(""); // Clear input field after adding todo
  };

  return (
    <>
      <div className="container col-lg-5 mx-auto shadow p-4">
        {message}
        <h1 className="display-4">TODOLIST</h1>
        <form>
          <label htmlFor="">Todo</label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="form-control"
            type="text"
            placeholder="enter your todo..."
          />
          <label htmlFor="">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            type="text"
            placeholder="enter your name..."
          />
          <label htmlFor="">Age</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
            type="number"
            placeholder="enter your age..."
          />
          <label htmlFor="">Time</label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-control"
            type="time"
            placeholder="enter  time..."
          />
          <button onClick={handleClick} className="btn btn-dark my-1 w-100">
            Add todo
          </button>
        </form>
      </div>
      <div className="container col-lg-9 row mx-auto my-4">
        {data.map((item) => (
          <SingleTodo
            key={item.id}
            id={item.id}
            {...item}
            remove={removeTodo}
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
