import {Post} from '../../shared/types';
import {Container} from './styles';
import Link from 'next/link';

type BreadcrumbsProps = {
    post: Post
}

export const Breadcrumbs = ({post}: BreadcrumbsProps) => {
    return (
        <Container>
            <Link href="/">
                <a>ホーム</a>
            </Link>
            <span>
</span>
            <Link href={`/category/${post.category}`}>
                <a>{post.category}</a>
            </Link>
        </Container>
    )
}