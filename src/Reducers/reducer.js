import { combineReducers } from "redux";

import LoginReducer from '../Login/Login.reducer';
import RegisterReducer from '../Register/Register.reducer';
import DashboardReducer from '../Dashboard/Dashboard.reducer';
import UsersReducer from '../UserList/Users.reducer';
import SkillTagsReducer from '../SkillTag/SkillTag.reducer';

const reducer = combineReducers(
    {
        LoginReducer,
        RegisterReducer,
        DashboardReducer,
        UsersReducer,
        SkillTagsReducer,
    }
)

export default reducer;