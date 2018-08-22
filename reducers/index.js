import {combineReducers} from 'redux';

import PostListReducer from './reducerPostList';
import PostReducer from "./reducerPost";

const allReducers = combineReducers({
    postList: PostListReducer,
    post: PostReducer,
});

export default allReducers;