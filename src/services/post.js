import {api} from './api'



export const listPosts = (params) => {
    const secondRequestParams = {
        _start: 20,
        _limit: 20
    }
    const thirdRequestParams = {
        _start: 40,
        _limit: 20
    }
    const fourthRequestParams = {
        _start: 60,
        _limit: 20
    }
    const fifthRequestParams = {
        _start: 80,
        _limit: 15
    }
    return api.get('/posts', {params})
        
}
