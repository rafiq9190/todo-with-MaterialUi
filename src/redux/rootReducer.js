import { combineReducers } from "redux";
import studentReducer from '../redux/reducers/studentReducer'
import authReducer from '../redux/reducers/authReducer'



const rootReducer =combineReducers({
        studentReducer,
        authReducer

})

export default rootReducer