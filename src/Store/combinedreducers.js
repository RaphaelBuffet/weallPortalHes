import {combineReducers} from "redux";
import UserReducer from "./User/UserReducer";
import conversationState from './reducers/conversations';
import messagesState from './reducers/messages';

// List des reducers (en lien avec tes variables dans redux)
export default combineReducers({
    user: UserReducer,
    conversationState,
    messagesState
});