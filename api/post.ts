import {EntityId} from '../shared/types';
import {config} from './config';

export async function fetchPost(id: EntityId) {
    const res = await fetch(`${config.baseUrl}/posts/${id}`)
    return await res.json()
}