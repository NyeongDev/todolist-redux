import { useState, useReducer } from "react";
import "./App.css";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const todo = action.payload.todo;
      const newTodo = {
        todo: todo,
      };
      return [
        {
          ...todo,
          newTodo,
        },
      ];
    default:
      return state;
  }
};

const initialState = [];

function App() {
  const [todo, setTodo] = useState("");
  const [todos, dispatch] = useReducer(reducer, initialState);
  console.log(todo);

  return (
    <div className="container">
      <input
        onChange={e => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: { todo } });
        }}
      >
        추가하기
      </button>

      <h1>Todo List</h1>
      {todos.map(todo => {
        <Todo todo={todo.todo} />;
      })}
    </div>
  );
}

export default App;
