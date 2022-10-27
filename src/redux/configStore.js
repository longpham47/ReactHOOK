import { combineReducers, createStore, applyMiddleware } from "redux";
import { fakeBookReducer } from "./reduce/FakeBookReducer";
import { phimReducer } from "./reduce/phimReducer";
//càI đặt middleware

import thunk from "redux-thunk";

const rootReducer = combineReducers({

    fakeBookReducer,
    phimReducer,
})




export const store = createStore(rootReducer,applyMiddleware(thunk));