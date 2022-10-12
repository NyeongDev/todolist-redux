import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_Todo } from "../redux/modules/todos";

function Form() {
  const dispatch = useDispatch();
  const [input, setInput] = useState([]);
  return (
    <div>
      <input
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(add_Todo(input));
        }}
      >
        추가하기
      </button>
    </div>
  );
}

export default Form;
