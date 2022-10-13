import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const todos = useSelector(state => state.addTodo);
  const detailItem = todos.find(todo => todo.id === parseInt(id));
  // console.log("todos", todos);
  // console.log("detailItem", detailItem);
  // console.log("id", typeof id);
  // console.log("todos[0]", todos[0]);

  return (
    <div>
      <p>{detailItem.title}</p>
      <p>{detailItem.body}</p>
    </div>
  );
};

export default Detail;
