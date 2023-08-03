import { REGISTER_SUCCESS } from "../actions/authRegisterAction";

const initialState = {
  users:{},
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;

