import { ADD_COMMENT } from "../types/fakeBookType"


export const addCommentAction = (useComment) => {
    return {
        type: ADD_COMMENT,
        userInfor: {
            ...useComment,
            avatar: `https://i.pravatar.cc/?u=${useComment.username}`
        }
    }
}