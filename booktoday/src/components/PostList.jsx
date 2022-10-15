import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostList = () => {
  const posts = useSelector(state => state.bookslice);
  console.log("@리스트유즈셀렉트", posts);
  return (
    <>
      {posts.map(post => {
        const { name, title, body, id } = post;
        return (
          <PostItem key={id} id={id} name={name} title={title} body={body} />
        );
      })}
    </>
  );
};

export default PostList;
