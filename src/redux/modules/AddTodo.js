//action
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const CHECK_TODO = "CHECK_TODO";

//action creator
export const createTodo = payload => {
  console.log("@@", payload);
  return {
    type: ADD_TODO,
    title: payload.title,
    body: payload.body,
  };
};

export const delTodo = payload => {
  // console.log("@payload", payload);
  return {
    type: DEL_TODO,
    id: payload,
  };
};

export const checkTodo = payload => {
  // console.log("@payload", payload);
  return {
    type: CHECK_TODO,
    payload,
  };
};

//initial state
const initialState = [];

//reducer
const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("@action", action);
      return [
        ...state,
        {
          title: action.title,
          body: action.body,
          id: state[state.length - 1]?.id + 1 || 0,
          isDone: false,
        },
      ];

    case DEL_TODO:
      return state.filter(todo => todo.id !== action.id);

    case CHECK_TODO:
      state.map(todo => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
      });
      return [...state];

    default:
      return state;
  }
};

export default addTodo;
