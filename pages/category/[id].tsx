import {Post as PostType, Post} from '../../shared/types';
import {useRouter} from 'next/router';
import {Loader} from '../../components/Loader';
import {Section} from '../../components/Section';
import {fetchPosts} from '../../api/category';
import {store} from '../../store';

type CategoryProps = {
    posts: Post[]
}

export const getServerSideProps = store.getServerSideProps(
    (_store) =>
        async ({params}) => {
            if (typeof params?.id !== "string")
                throw new Error("Unexpected id")

            const posts = await fetchPosts(params.id) as PostType[]
            return {props: {posts,}}
        }
)

const Category = ({posts}: CategoryProps) => {
    const router = useRouter()

    if (router.isFallback) return <Loader/>
    return <Section posts={posts} title={String(router.query.id)}/>
}

export default Category
