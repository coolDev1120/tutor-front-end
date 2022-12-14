import {
  LOGIN_SUCCESS,
  LOGIN_OUT,
  SIDE_MESSAGE_BOX,
  NEXT_STAGE,
  STAGE_RESET,
  SHOW_MESSAGE_BOX
} from "../shared/ActionTypes.js";

const INIT_STATE = {
  user: "",
  side_message_state: false,
  register_state: 0,
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
    case NEXT_STAGE: {
      return {
        ...state,
        register_state: state.register_state + 1
      }
    }
    case STAGE_RESET: {
      return {
        ...state,
        register_state: 0
      }
    }
    case SHOW_MESSAGE_BOX: {
      return {
        ...state,
        showMessageByemail: action.payload
      }
    }
    default:
      return state;
  }
};
export default authReducer;
