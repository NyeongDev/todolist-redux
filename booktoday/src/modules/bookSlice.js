import { createSlice } from "@reduxjs/toolkit";

// const initialState = {};

const bookSlice = createSlice({
  //변수에 저장
  name: "createReview",
  initialState: [],
  reducers: {
    // 함수!
    createReview: (state, action) => {
      //함수이름
      // console.log(state);
      console.log("action.payload", action.payload);
      const id = state[state.length - 1]?.id + 1 || 0;
      state.push(...action.payload, id); //return, ...state 생략, 기존의 state에 = action을 넣어줘
    },
    getReviewList: (state, action) => {},
  },
});

// console.log(bookSlice);

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { createReview } = bookSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default bookSlice.reducer;
