import {useRouter} from "next/router";
import {GetServerSideProps, GetStaticProps, NextPage} from 'next';
import {Post as PostType, Comment} from '../../shared/types';
import {postPaths as paths} from '../../shared/staticPaths'
import {fetchPost} from '../../api/post';
import {PostBody} from '../../components/Post/PostBody';
import {Loader} from '../../components/Loader';
import {fetchComments} from '../../api/comments';
import {Comments} from '../../components/Comments/Comments';
import {State, store} from '../../store';
import {UPDATE_COMMENTS_ACTION} from '../../store/comments';
import {UPDATE_POST_ACTION} from '../../store/post';
import {useSelector} from 'react-redux';

type PostProps = {
    post: PostType
    comments: Comment[]
}

/*export const getStaticProps: GetStaticProps<PostProps> = async ({
                                                                    params
                                                                }) => {
    if (typeof params?.id !== "string") throw new Error("Unexpected id")
    const post = await fetchPost(params?.id)
    return {props: {post}}
}*/

export const getServerSideProps = store.getServerSideProps(
    (store) =>
        async ({params}) => {
            if (typeof params?.id !== "string")
                throw new Error("Unexpected id")

            const comments = await fetchComments(params.id) as Comment[]
            const post = await fetchPost(params.id) as PostType

            store.dispatch({type: UPDATE_POST_ACTION, post})
            store.dispatch({type: UPDATE_COMMENTS_ACTION, comments})
            return {props: {post, comments}};
        }
)

// export async function getStaticPaths() {
//     return {paths, fallback: true}
// }

const Post: NextPage = () => {
    const {post, comments} = useSelector<State, State>(state => state)

    if (!post) return <Loader/>
    return (
        <>
            <PostBody post={post}/>
            <Comments comments={comments} post={post.id}/>
        </>
    )
}

export default Post
