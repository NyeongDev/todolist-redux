//action
const ADD_TODO = "ADD_TODO";

//action creator
export const create = payload => {
  // console.log(payload);
  return {
    type: ADD_TODO,
    title: payload,
  };
};

//initial state
const initialState = [];

//reducer
const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // console.log(action);
      return [
        ...state,
        {
          title: action.title,
          id: state[state.length - 1]?.id + 1 || 0,
        },
      ];
    default:
      return state;
  }
};

export default addTodo;
