import addItem from "./addItem";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authRegisterReducer, { signupReducer } from "./authRegisterReducer";
import addFavoriteItem from "./favoriteReducer";
import registrationReducer from "./authRegisterReducer";

const rootReducers = combineReducers({
    addItem,
    auth: authReducer,
    registration: registrationReducer,
    favorites: addFavoriteItem,
})

export default rootReducers;