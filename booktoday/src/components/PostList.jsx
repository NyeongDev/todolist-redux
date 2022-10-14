import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostList = () => {
  const posts = useSelector(state => state.bookslice);
  console.log("@리스트유즈셀렉트", posts);
  return (
    <>
      {posts.map(post => {
        return <PostItem key={post.id} />;
      })}
    </>
  );
};

export default PostList;
