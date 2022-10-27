import { LAY_DS_PHIM } from "../types/phimType";

//rxr
const initialState = {
    mangPhim: [
       
    ]
}

 export const phimReducer = (state = initialState, action) => {
    switch (action.type) {

        case LAY_DS_PHIM:
            console.log(action.mangPhim);
            state.mangPhim = action.mangPhim
            return {...state}

        default:
            return state
    }
}
