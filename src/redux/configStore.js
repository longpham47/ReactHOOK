import { combineReducers,createStore } from "redux";
import { fakeBookReducer } from "./reduce/FakeBookReducer";



const rootReducer = combineReducers({
    
    fakeBookReducer,
})
 



export const store =createStore(rootReducer);