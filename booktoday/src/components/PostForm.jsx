import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../modules/bookSlice";

const PostForm = () => {
  const [review, setReview] = useState({});
  // console.log(review);
  const dispatch = useDispatch();
  const onChangeHandler = e => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    dispatch(createReview(review));
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>작성자</label>
        <input name={"name"} onChange={onChangeHandler}></input>
        <label>책 이름</label>
        <input name={"title"} onChange={onChangeHandler}></input>
        <label>감상평</label>
        <input name={"body"} onChange={onChangeHandler}></input>
        <button type="submit">추가하기</button>
      </form>
    </>
  );
};

export default PostForm;
