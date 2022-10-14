import Main from "./pages/Main";
import { useSelector } from "react-redux";

function App() {
  const books = useSelector(state => state.books);
  // console.log(books);
  return <Main />;
}

export default App;
