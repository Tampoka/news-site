import {CommentsState} from './comments';
import {PostState} from './post';
import {combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux';
import {createWrapper, MakeStore} from 'next-redux-wrapper';

export type State={
    post:PostState
    comments:CommentsState
}

const combineReducer=combineReducers({post,comments})
const makeStore:MakeStore<State>=()=>createStore(combineReducer)

export const store = createWrapper<State>(makeStore, {
    debug: true
})