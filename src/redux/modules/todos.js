// 초기 상태값
const initialState = {
  value: [{ id: 0, title: "" }],
};

// 리듀서
const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default addTodo;
