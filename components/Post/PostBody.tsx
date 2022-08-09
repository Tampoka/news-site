import Link from "next/link"
import Image from "next/image"
import {Post} from "../../shared/types"
import {Title, Figure, Content, Meta} from "./PostBodyStyle"
import {Breadcrumbs} from '../Breadcrumbs';

type PostBodyProps = {
    post: Post
}

export const PostBody = ({post}: PostBodyProps) => {
    return (
        <div>
            <Breadcrumbs post={post}/>
            <Title>{post.title}</Title>
            <Figure>
                {/*  <Image
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    width={960}
                    height={340}/>*/}
                <img src={post.image} alt={post.title} />
            </Figure>

            <Content dangerouslySetInnerHTML={{__html: post.content}}/>

            <Meta>
                <span>{post.date}</span>
                <span>&middot;</span>
                <Link href={`/category/${post.category}`}>
                    <a>{post.category}</a>
                </Link>
                <span>&middot;</span>
                <a href={post.source}>ソース</a>
            </Meta>
        </div>
    )
}
