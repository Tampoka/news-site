import {Comment as CommentType, EntityId} from "../../shared/types"
import {Container, List, Item} from "./styles"
import {CommentForm} from "../CommentForm"
import {Comment} from '../Comment';

type CommentsProps = {
    post: EntityId
    comments: CommentType[]
}

export const Comments = ({post, comments}: CommentsProps) => {
    return (
        <Container id="comments">
            <h3>Comments</h3>
            <List>
                {comments.map((comment) => (
                    <Item key={comment.id}>
                        <Comment comment={comment}/>
                    </Item>
                ))}
            </List>
            <CommentForm post={post}/>
        </Container>
    )
}
