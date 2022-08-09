import {Comment as CommentType, EntityId} from "../../shared/types"
import {Container, List, Item} from "./styles"
import {CommentForm} from "../CommentForm"
import {Comment} from '../Comment';
import {useState} from 'react';

type CommentsProps = {
    post: EntityId
    comments: CommentType[]
}

export const Comments = ({post, comments}: CommentsProps) => {
    const [show, setShow] = useState(false)
    const toggleShowComments = () => setShow(prev => !prev)
    const commentsMessage = comments.length ? `${comments.length}件のコメント` : 'コメントがありません'
    return (
        <Container id="comments">
            <h3 onClick={toggleShowComments}
                className="comments-count">{commentsMessage}</h3>
            {show && comments.length > 0 && <List>
                {comments.map((comment) => (
                    <Item key={comment.id}>
                        <Comment comment={comment}/>
                    </Item>
                ))}
            </List>}
            <CommentForm post={post}/>
        </Container>
    )
}
