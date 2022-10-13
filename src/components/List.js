import { useSelector } from "react-redux";
import Todo from "./Todo";

const List = () => {
  const state = useSelector(state => state.addTodo);
  console.log("state", state);
  return (
    <div>
      <p>미완료</p>
      {state
        .filter(todo => todo.isDone === false)
        .map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            body={todo.body}
            isDone={todo.isDone}
          />
        ))}

      <p>완료</p>
      {state
        .filter(todo => todo.isDone === true)
        .map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            body={todo.body}
            isDone={todo.isDone}
          />
        ))}
    </div>
  );
};

export default List;
