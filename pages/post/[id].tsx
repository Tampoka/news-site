import {useRouter} from "next/router";
import {GetServerSideProps, GetStaticProps} from 'next';
import {Post as PostType, Comment} from '../../shared/types';
import {postPaths as paths} from '../../shared/staticPaths'
import {fetchPost} from '../../api/post';
import {PostBody} from '../../components/Post/PostBody';
import {Loader} from '../../components/Loader';
import {fetchComments} from '../../api/comments';
import {Comments} from '../../components/Comments/Comments';

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

export const getServerSideProps: GetServerSideProps<PostProps> = async ({
                                                                            params
                                                                        }) => {
    if (typeof params?.id !== "string") throw new Error("Unexpected id")
    const post = await fetchPost(params.id)
    const comments = await fetchComments(params.id)
    return {props: {post, comments}}
}

// export async function getStaticPaths() {
//     return {paths, fallback: true}
// }

const Post = ({post, comments}: PostProps) => {
    const router = useRouter()

    if (router.isFallback) return <Loader/>
    return (
        <>
            <PostBody post={post}/>
            <Comments comments={comments} post={post.id}/>
        </>
    )
}

export default Post
