import {Category, Comment, Post} from "../shared/types"
import {AnyAction} from 'redux';
import {HydrateAction} from './hydrate';
import {HYDRATE} from 'next-redux-wrapper';

export const UPDATE_CATEGORY_ACTION = "UPDATE_CATEGORY"

export interface UPDATE_CATEGORY_ACTION extends AnyAction {
    type: typeof UPDATE_CATEGORY_ACTION
    category: Category
}

export type CategoryState = Category
type CategoryAction = HydrateAction | UPDATE_CATEGORY_ACTION

export const category = (
    state: CategoryState ="社会",
    action: CategoryAction
) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload?.category ?? []
        case UPDATE_CATEGORY_ACTION:
            return action.category
        default:
            return state
    }
}