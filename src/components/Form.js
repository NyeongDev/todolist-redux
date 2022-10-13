import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/AddTodo";

const Form = () => {
  const dispatch = useDispatch();

  const init = {
    title: "",
    body: "",
  };
  const [todo, setTodo] = useState(init);

  const onChangeHandler = e => {
    // console.log(e.target);
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(createTodo(todo));
    console.log("@form에서보내주고있는todo", todo);
    setTodo(init);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>제목</label>
        <input
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        ></input>
        <label>내용</label>
        <input name="body" value={todo.body} onChange={onChangeHandler}></input>
        <button>추가</button>
      </form>
    </div>
  );
};

export default Form;
