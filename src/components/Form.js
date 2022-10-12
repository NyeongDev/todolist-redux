import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../redux/modules/AddTodo";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const submitHandler = e => {
    e.preventDefault();
    dispatch(create(title));
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        ></input>
        <button>추가</button>
      </form>
    </div>
  );
};

export default Form;
