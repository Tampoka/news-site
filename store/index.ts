import {comments, CommentsState} from './comments';
import {post, PostState} from './post';
import {combineReducers, legacy_createStore as createStore, Store} from 'redux';
import {Context, createWrapper} from 'next-redux-wrapper';
import {categoryPosts, CategoryPostsState} from './categoryPosts';
import {category, CategoryState} from './category';

export type State = {
    post: PostState
    comments: CommentsState
    categoryPosts:CategoryPostsState
    category:CategoryState
}

const combinedReducer = combineReducers({post, comments,categoryPosts,category})
const makeStore = (context: Context) => createStore(combinedReducer)

export const store = createWrapper<Store<State>>(makeStore, {
    debug: true
})