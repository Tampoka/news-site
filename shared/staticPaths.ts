import {Category, EntityId} from './types';

type PostStaticParams = {
    id: EntityId
}
type PostStaticPath = {
    params: PostStaticParams
}
const staticPostsIdList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const postPaths: PostStaticPath[] = staticPostsIdList.map(
    (id) => ({
        params: {id: String(id)}
    })
)

type CategoryStaticParams = {
    id: Category
}

type CategoryStaticPath = {
    params: CategoryStaticParams
}

const categoriesToPreRender: Category[] = [
    "科学・IT",
    "社会",
    "経済"
]
export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
    (category) => ({params: {id: category}})
)