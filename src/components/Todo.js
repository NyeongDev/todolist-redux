import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { checkTodo, delTodo } from "../redux/modules/AddTodo";

const Todo = ({ id, title, body, isDone }) => {
  console.log("@todo props", isDone, id, title, body);
  const dispatch = useDispatch();
  return (
    <div>
      {title}
      {body}
      <Link to={`/${id}`}>상세페이지</Link>
      <button
        onClick={() => {
          dispatch(delTodo(id));
        }}
      >
        삭제
      </button>
      <button
        onClick={() => {
          dispatch(checkTodo(id));
        }}
      >
        {isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default Todo;
