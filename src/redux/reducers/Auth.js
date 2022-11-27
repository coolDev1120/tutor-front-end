import {
  LOGIN_SUCCESS,
  LOGIN_OUT,
  SIDE_MESSAGE_BOX
} from "../shared/ActionTypes.js";

const INIT_STATE = {
  user: "",
  side_message_state: false
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload
      }
    }
    case LOGIN_OUT: {
      return {
        ...state,
        user: ""
      }
    }
    case SIDE_MESSAGE_BOX: {
      return {
        ...state,
        side_message_state: !INIT_STATE.side_message_state
      }
    }
    default:
      return state;
  }
};
export default authReducer;
