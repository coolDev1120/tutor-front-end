import {
  LOGIN_SUCCESS,
  LOGIN_OUT,
  SIDE_MESSAGE_BOX,
  NEXT_STAGE,
  STAGE_RESET
} from "../shared/ActionTypes.js";


export const loginsuccess = (value) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: value
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_OUT
    })
  }
}

export const toggle_side_message_box = () => {
  return (dispatch) => {
    dispatch({
      type: SIDE_MESSAGE_BOX
    })
  }
}

export const register_next = () => {
  return (dispatch) => {
    dispatch({
      type: NEXT_STAGE
    })
  }
}

export const register_reset = () => {
  return (dispatch) => {
    dispatch({
      type: STAGE_RESET
    })
  }
}

