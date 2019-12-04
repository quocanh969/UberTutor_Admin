import { combineReducers } from "redux";

import LoginReducer from '../Login/Login.reducer';
import RegisterReducer from '../Register/Register.reducer';
import DashboardReducer from '../Dashboard/Dashboard.reducer';

const reducer = combineReducers(
    {
        LoginReducer,
        RegisterReducer,
        DashboardReducer,
    }
)

export default reducer;