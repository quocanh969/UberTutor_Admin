import { combineReducers } from "redux";

import LoginReducer from '../Login/Login.reducer';
import RegisterReducer from '../Register/Register.reducer';

const reducer = combineReducers(
    {
        LoginReducer,
        RegisterReducer,
    }
)

export default reducer;