import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../actions/index";
import { db } from "../firebaseconfig";

import "./todo.css";

function Todo() {
  const [todos, settodos] = useState([]);
  const [inputData, setInputData] = useState("");
  const lists = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodo();
  }, [inputData]);

  function getTodo() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      settodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add items"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className=" fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            {todos.map((todo) => {
              return (
                <div className="eachItem" key={todo.id}>
                  <h3>{todo.todo}</h3>
                  <div className="todo-btn">
                    <i
                      className=" fa fa-trash add-btn"
                      title="DeleteItem"
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
