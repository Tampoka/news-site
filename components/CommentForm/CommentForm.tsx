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

        const response = await submitComment(post, name, value)
        const comments = await response.json()
        setLoading(false)
        /*   if (status === 201) {
               location.hash = "comments"
               location.reload()
           }*/
        setValue("")
        setName("")

        if (response.status === 200) {
            debugger

            dispatch({type: UPDATE_COMMENTS_ACTION, comments})
        }
    }

    return (
        <Form onSubmit={submit}>
            <h3>Your comment</h3>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                name="comment"
                value={value}
                placeholder="What do you think?"
                onChange={(e) => setValue(e.target.value)}
                required
            />
            {loading ? <span>Submitting...</span> : <button>Submit</button>}
        </Form>
    )
}