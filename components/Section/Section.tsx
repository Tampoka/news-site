import {Grid, Title, MoreLink} from './styles'
import {Post as PostType} from '../../shared/types';
import {PostCard} from '../Post';
import Link from 'next/link';

type SectionProps = {
    title: string
    posts: PostType[]
    isCompact?: boolean
}


export const Section = ({title, posts, isCompact = false}: SectionProps) => {
    return (
        <section>
            <Title>{title}</Title>
            <Grid>
                {posts.map((post) => (
                    <PostCard key={post._id} post={post}/>
                ))}
            </Grid>
            {isCompact && (
                <Link href={`/category/${title}`} passHref>
                    <MoreLink>More in {title}</MoreLink>
                </Link>
            )}
        </section>
    )
}