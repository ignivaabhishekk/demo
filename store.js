import { createStore, combineReducers, applyMiddleware } from "redux"
import messageReducer from "./reducers/message";
import newReducer from "./reducers/newStore";
import thunk from "redux-thunk"
const reducer = combineReducers({
 messageReducer,
 newReducer
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;