import {Grid,Title} from './styles'

type SectionProps = {
    title: string
}


export  const Section = ({ title }: SectionProps) => {
    return (
        <section>
            <Title>{title}</Title>
            <Grid>
                {/*<Post />*/}
                {/*<Post />*/}
                {/*<Post />*/}
            </Grid>
        </section>
    )
}