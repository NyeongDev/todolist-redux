// 초기 상태값
const initialState = [{ id: 0, title: "test" }];
// 초깃값이 없을 때는 ID를 어떻게 만들어야 하는지

// action
const ADD_TODO = "ADD_TODO";

// action creater
export const add_Todo = input => {
  return {
    type: ADD_TODO,
    title: input,
  };
};

// 리듀서
const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          title: action.title,
        },
      ];
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default addTodo;
