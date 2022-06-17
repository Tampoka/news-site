import {Post} from '../../shared/types';
import {useRouter} from 'next/router';
import {categoryPaths} from '../../shared/staticPaths';
import {Loader} from '../../components/Loader';
import {GetStaticProps} from 'next';
import {Section} from '../../components/Section';
import {fetchPosts} from '../../api/category';

type CategoryProps = {
    posts: Post[]
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
                                                                        params
                                                                    }) => {
    if (typeof params?.id !== "string") throw new Error("Unexpected id")
    const posts = await fetchPosts(params.id)
    return {props: {posts}}
}

export async function getStaticPaths() {
    return {paths: categoryPaths, fallback: true}
}

const Category = ({posts}: CategoryProps) => {
    const router = useRouter()

    if (router.isFallback) return <Loader/>
    return <Section posts={posts} title={String(router.query.id)}/>
}

export default Category
