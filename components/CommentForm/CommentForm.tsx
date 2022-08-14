import {EntityId} from '../../shared/types';
import {FC, FormEvent, useState} from 'react';
import {submitComment} from '../../api/comments';
import {Form} from './styles';
import {useDispatch} from 'react-redux';
import {UPDATE_COMMENTS_ACTION} from '../../store/comments';

type CommentFormProps = {
    post: EntityId
}

export const CommentForm: FC<CommentFormProps> = ({post}) => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState<boolean>(false)
    const [value, setValue] = useState<string>("")
    const [name, setName] = useState<string>("")


    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        try {
            const comments = await submitComment(post, name, value)
            dispatch({type: UPDATE_COMMENTS_ACTION, comments})
        } catch (e: any) {
            console.log(e.message)
        } finally {
            setLoading(false)
            setValue("")
            setName("")
        }
    }

    return (
        <Form onSubmit={submit}>
            <h3>コメントを書く</h3>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="ニックネーム"
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                name="comment"
                value={value}
                placeholder="この記事に関するあなたの意見や疑問"
                onChange={(e) => setValue(e.target.value)}
                required
            />
            {loading ? <span>Submitting...</span> : <button>投稿する</button>}
        </Form>
    )
}