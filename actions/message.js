import { SET_MESSAGE,GET_MSG } from "../types/message";
export const setMessage = (message) => {
  return dispatch => {
    dispatch({
       type: SET_MESSAGE,       
        message       
      
    })
  }
}
export const getMessage = (data) => {
    return dispatch => {
      dispatch({
         type: GET_MSG,            
          data
       
      })
    }
  }