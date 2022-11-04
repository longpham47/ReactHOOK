import { USERLOGIN } from "../../../util/setting"

// chứa các userlogin từ local storege
let uLogin = null;

if(localStorage.getItem(USERLOGIN)){
    // có local storage
    uLogin = JSON.parse( localStorage.getItem(USERLOGIN));
}





const initialState = { uLogin:uLogin}

export const QLNDreducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
            state.uLogin = action.uLogin



        return {...state}
 
  default:
    return state
  }
}
