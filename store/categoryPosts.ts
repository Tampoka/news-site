import {Comment, Post} from "../shared/types"
import {AnyAction} from 'redux';
import {HydrateAction} from './hydrate';
import {HYDRATE} from 'next-redux-wrapper';

export const UPDATE_CATEGORY_POSTS_ACTION = "UPDATE_CATEGORY_POSTS"

export interface UPDATE_CATEGORY_POSTS_ACTION extends AnyAction {
    type: typeof UPDATE_CATEGORY_POSTS_ACTION
    categoryPosts: Post[]
}

export type CategoryPostsState = Post[]
type CategoryAction = HydrateAction | UPDATE_CATEGORY_POSTS_ACTION

export const categoryPosts = (
    state: CategoryPostsState = [],
    action: CategoryAction
) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload?.categoryPosts ?? []
        case UPDATE_CATEGORY_POSTS_ACTION:
            debugger
            return action.categoryPosts
        default:
            return state
    }
}