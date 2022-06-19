import {comments, CommentsState} from './comments';
import {post, PostState} from './post';
import {combineReducers, legacy_createStore as createStore, Store} from 'redux';
import {Context, createWrapper} from 'next-redux-wrapper';

export type State = {
    post: PostState
    comments: CommentsState
}

const combinedReducer = combineReducers({post, comments})
const makeStore = (context: Context) => createStore(combinedReducer)

export const store = createWrapper<Store<State>>(makeStore, {
    debug: true
})