import { useSelector } from "react-redux";
import Todo from "./Todo";

const List = () => {
  const state = useSelector(state => state.addTodo);
  // console.log(state);
  return (
    <div>
      {state.map(todo => {
        // console.log(todo);
        return <Todo key={todo.id} title={todo.title} />;
      })}
    </div>
  );
};

export default List;
