import { ADD_COMMENT } from "../types/fakeBookType";

const initialState = {
  mangComment: [
    { username: "user1", avatar: "https://i.pravatar.cc/?u=477", comment: "hjhj" },
    { username: "user2", avatar: "https://i.pravatar.cc/?u=497", comment: "abc" },


  ]
}



export const fakeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    // các type cần chuỷenn thành biến dể dễ qiuảng lý tránh hard code
    case ADD_COMMENT:
      console.log(action);
      state.mangComment = [...state.mangComment,action.userInfor]

      return { ...state }
    default:
      return state
  }
}
