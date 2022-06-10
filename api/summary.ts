import fetch from 'node-fetch';
import {Category, Post} from '../shared/types';
import {config} from './config';

export async function fetchPosts(): Promise<unknown> {
    try {
        const res = await fetch(`${config.baseUrl}/posts`)
        return await res.json()
    } catch (e: any) {
        console.log(e.message)
    }
}

export async function fetchCategories(): Promise<unknown> {
    const res = await fetch(`${config.baseUrl}/categories`)
    return await res.json()
}