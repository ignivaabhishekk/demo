import { SET_MESSAGE, GET_MSG } from '../types/message';
const initState = {
 message: '',
 data:[]
}
export default (state = initState, action) => {
    console.log("action",action)
switch(action.type) {
 case SET_MESSAGE :
 return {...state, message: action.message}
 case GET_MSG :
 return {...state, data: action.data}
 default :
 return state
 }
}