import { Link, useNavigate, useParams } from "react-router-dom";

const Todo = ({ title }) => {
  // console.log(title);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("@{id}", id);
  console.log("@useParams", useParams);
  console.log("@useParams()", useParams());

  return (
    <div>
      {title}
      <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        상세페이지
      </button>
    </div>
  );
};

export default Todo;
