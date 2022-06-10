import {Grid, Title} from './styles'
import {Post as PostType} from '../../shared/types';
import {Post} from '../Post';

type SectionProps = {
    title: string
    posts: PostType[]
}


export const Section = ({title}: SectionProps) => {
    return (
        <section>
            <Title>{title}</Title>
            <Grid>
                <Post/>
                <Post/>
                <Post/>
            </Grid>
        </section>
    )
}