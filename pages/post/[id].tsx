import {useRouter} from "next/router";
import {GetStaticProps} from 'next';
import {Post as PostType} from '../../shared/types';
import {postPaths as paths} from '../../shared/staticPaths'
import {fetchPost} from '../../api/post';

type PostProps = {
    post: PostType
}

export const getStaticProps: GetStaticProps<PostProps> = async ({
                                                                    params
                                                                }) => {
    if (typeof params?.id !== "string") throw new Error("Unexpected id")
    const post = await fetchPost(params?.id)
    return {props: {post}}
}

export async function getStaticPaths() {
    return {paths, fallback: true}
}

const Post = ({post}: PostProps) => {
    const {pathname, query} = useRouter()

    return (
        <div>
            Pathname: {pathname};<br/>
            Post Id: {query.id}.
        </div>
    )
}

export default Post
