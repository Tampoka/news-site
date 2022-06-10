import {Card, Figure, Title, Content} from "./styles"
import {Post as PostType} from '../../shared/types';
import Link from 'next/link';

type PostProps = {
    post: PostType
}

export const Post = ({post}: PostProps) => {
    return (
        <Link href={`/post/${post.id}`} passHref>
            <Card>
                <Figure>
                    <img alt={post.title} src={post.image}/>
                </Figure>
                <Title>{post.title}</Title>
                <Content>{post.lead}</Content>
            </Card>
        </Link>
    )
}