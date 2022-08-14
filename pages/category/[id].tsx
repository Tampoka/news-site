import {Category as CategoryType, Post as PostType} from '../../shared/types';
import {Loader} from '../../components/Loader';
import {NextPage} from 'next';
import {Section} from '../../components/Section';
import {fetchPosts} from '../../api/category';
import {State, store} from '../../store';
import {UPDATE_CATEGORY_POSTS_ACTION} from '../../store/categoryPosts';
import {useSelector} from 'react-redux';
import {UPDATE_CATEGORY_ACTION} from '../../store/category';

type CategoryProps = {
    categoryPosts: PostType[]
    category: CategoryType
}

export const getServerSideProps = store.getServerSideProps(
    (store) =>
        async ({params}) => {
            if (typeof params?.id !== "string")
                throw new Error("Unexpected id")

            const categoryPosts = await fetchPosts(params.id) as PostType[]
            const category = params.id
            store.dispatch({type: UPDATE_CATEGORY_ACTION, category})
            store.dispatch({type: UPDATE_CATEGORY_POSTS_ACTION, categoryPosts})
            return {props: {categoryPosts, category}}
        }
)

const Category: NextPage = () => {
    const {categoryPosts, category} = useSelector<State, State>(state => state)
    if (!categoryPosts) return <Loader/>
    return <Section posts={categoryPosts} title={String(category)}/>
}

export default Category
