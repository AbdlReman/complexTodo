import React from "react";
import { MdDelete } from "react-icons/md";

const SingleTodo = ({ todo, name, age, time, id, remove }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card ">
          <div className="d-flex justify-content-between my-1 p-4 rounded">
            <div className="text">
              <h4>{todo}</h4>
              <h6>{name}</h6>
              <h6>{age}</h6>
              <h6>{time}</h6>
            </div>
            <div className="icon">
              <MdDelete
                onClick={() => remove(id)}
                size={20}
                color="red"
                cursor="pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
