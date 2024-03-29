import fetch from "node-fetch"
import {Comment, EntityId, Person} from "../shared/types"
import {config} from "./config"

export async function fetchComments(
    postId: EntityId
): Promise<Comment[]> {
    const res = await fetch(`${config.baseUrl}/comments/${postId}`)
    return await res.json() as Promise<Comment[]>
}

export async function submitComment(
    postId: EntityId,
    name: Person,
    comment: string
) {
    const res = await fetch(`${config.baseUrl}/posts/${postId}/comments`, {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        body: JSON.stringify({name, comment})
    })
    return await res.json() as Promise<Comment[]>
}
