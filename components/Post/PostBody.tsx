import Link from "next/link"
import {Post} from "../../shared/types"
import {Content, Figure, Meta, ShowMore, Title} from "./PostBodyStyle"
import {Breadcrumbs} from '../Breadcrumbs';
import {useState} from 'react';

type PostBodyProps = {
    post: Post
}

export const PostBody = ({post}: PostBodyProps) => {
    const [fullText, setFullText] = useState(false)

    const textClass = !fullText ? 'minText' : ''
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
                <img src={post.image} alt={post.title}/>
            </Figure>
            <Content>
                <div dangerouslySetInnerHTML={{__html: post.content}}
                     className={textClass}/>
            </Content>
            <ShowMore
                onClick={() => setFullText(true)}>{fullText ? "" : "続きを読む"}</ShowMore>
            <Meta>
                <span>{post.date}</span>
                <span>&middot;</span>
                <Link href={`/category/${post.category}`}>
                    <a>{post.category}</a>
                </Link>
                <span>&middot;</span>
                <a href={post.source} target="_blank"
                   rel="noopener noreferrer">ソース</a>
            </Meta>
        </div>
    )
}
