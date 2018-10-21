
const server = "http://localhost:8000"

const ApiHelper =  {
    getUserList: () => axios.get(server + '/api/v1/user/'),
    getUserDetail: (id) => axios.get(server + '/api/v1/user/' + id),
    getPostList: () => axios.get(server + '/api/v1/post/'),
    getPostDetail: (id) => axios.get(server + '/api/v1/post/' + id),
    createPost: (data) => axios.post(server + '/api/v1/post-create/', data),
    deletePost: (id) => axios.delete(server + '/api/v1/post-delete/' + id),
    updatePutPost: (id, data) => axios.put(server + '/api/v1/post-update/' + id, data),
    updatePatchPost: (id, data) => axios.patch(server + '/api/v1/post-update/' + id, data),
    getPostDetailSearch: (data=null) => {
        if (data) {
            return axios.get(server + '/api/v1/postdocument/?search=' + data)
        } else {
            return axios.get(server + '/api/v1/postdocument/')
        }
    },
}

export default ApiHelper;