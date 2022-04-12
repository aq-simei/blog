import {api} from './api'



export const listPosts = (params) => {
    return api.get('/posts', {params})
        
}
