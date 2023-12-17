// Todo.jsx
import React, { useState } from "react";
const Todo = () => {
  const [data, setData] = useState({
    todo: "",
    name: "",
    age: "",
    time: "",
  });

  const [todosList, setTodosList] = useState([]);

  const { todo, name, age, time } = data;

  const handleClick = (e) => {
    e.preventDefault();
    // Create a new todo object with the entered data
    const newTodo = { todo, name, age, time };
    // Add the new todo to the todosList
    setTodosList([newTodo]);
    // Reset input fields after adding todo
    setData({
      todo: "",
      name: "",
      age: "",
      time: "",
    });
  };

  const handleChange = (e) => {
    //
    setData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="container col-lg-5 mx-auto shadow p-4">
        <h1 className="display-4">TODOLIST</h1>
        <form>
          <label htmlFor="">Todo</label>
          <input
            name="todo"
            value={todo}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter your todo..."
          />
          <label htmlFor="">Name</label>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="enter your name..."
          />
          <label htmlFor="">Age</label>
          <input
            name="age"
            value={age}
            onChange={handleChange}
            className="form-control"
            type="number"
            placeholder="enter your age..."
          />
          <label htmlFor="">Time</label>
          <input
            name="time"
            value={time}
            onChange={handleChange}
            className="form-control"
            type="time"
            placeholder="enter  time..."
          />
          <button onClick={handleClick} className="btn btn-dark my-1 w-100">
            Add todo
          </button>
        </form>
      </div>

      <div className="mt-4">
        <h2>Entered Todos:</h2>
        <ul>
          {todosList.map((todoItem, index) => (
            <li key={index}>
              <strong>Todo:</strong> {todoItem.todo}, <strong>Name:</strong>{" "}
              {todoItem.name}, <strong>Age:</strong> {todoItem.age},{" "}
              <strong>Time:</strong> {todoItem.time}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
