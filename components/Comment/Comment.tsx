import {Comment as CommentType} from '../../shared/types'
import {Container, Author, Body, Meta} from './styles'
import {FC} from 'react';

type CommentProps = {
    comment: CommentType
}

export const Comment: FC<CommentProps> = ({comment}) => {
    return (
        <Container>
            <Author>{comment.author}</Author>
            <Body>{comment.content}</Body>
            <Meta>{comment.time}</Meta>
        </Container>
    )
}