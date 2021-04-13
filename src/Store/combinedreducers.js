import {combineReducers} from "redux";
import UserReducer from "./User/UserReducer";


// List des reducers (en lien avec tes variables dans redux)
export default combineReducers({
    user: UserReducer
});