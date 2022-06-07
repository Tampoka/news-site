import {Grid,Title} from './styles'
import {Post} from '../Post';

type SectionProps = {
    title: string
}


export  const Section = ({ title }: SectionProps) => {
    return (
        <section>
            <Title>{title}</Title>
            <Grid>
                <Post />
                <Post />
                <Post />
            </Grid>
        </section>
    )
}