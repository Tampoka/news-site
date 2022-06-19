import {CommentsState} from './comments';
import {PostState} from './post';

export type State={
    post:PostState
    comments:CommentsState
}