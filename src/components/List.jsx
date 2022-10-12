import { useSelector } from "react-redux";
import Todo from "./Todo";

//왜 화살표 함수?
function List() {
  const todos = useSelector(state => state.addTodo);
  return (
    <div>
      {todos.map(todo => {
        return <Todo key={todo.id} id={todo.id} title={todo.title} />;
      })}
    </div>
  );
}

export default List;
