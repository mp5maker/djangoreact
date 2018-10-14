
const server = "http://localhost:8000"

const ApiHelper =  {
    getUserList: () => axios.get(server + '/api/v1/user'),
    getUserDetail: (id) => axios.get(server + '/api/v1/user/' + id),
    getPostList: () => axios.get(server + '/api/v1/post'),
    getPostDetail: (id) => axios.get(server + '/api/v1/post/' + id),
}

export default ApiHelper;