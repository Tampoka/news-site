import {Grid, Title} from './styles'
import {Post as PostType} from '../../shared/types';
import {PostCard} from '../Post';

type SectionProps = {
    title: string
    posts: PostType[]
}


export const Section = ({title,posts}: SectionProps) => {
    return (
        <section>
            <Title>{title}</Title>
            <Grid>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </Grid>
        </section>
    )
}