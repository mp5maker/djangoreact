import ApiHelper from "../Factories/ApiHelper"

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        ApiHelper.getPostList()
            .then((response) => {
                this.setState({
                    data: response.data,
                    loading: false,
                    error: false
                })
            }).catch((error) => {
                this.setState({
                    error: error,
                    loading: false
                })
            })
    }

    render() {
        const { data, loading, error } = this.state;
        if (loading) {
            return "Loading ...."
        }
        if (error) {
            return "There was an error loading the data..."
        }
        if (data) {
            return <PostCollection collection={data} />
        }
    }
}

class PostCollection extends React.Component {
    render() {
        const posts = this.props.collection
        return (
            <ul>
                {
                    posts.map((post, i) => (
                        <PostDetail data={post} key={i} />
                    ))
                }
            </ul>
        )
    }
}

class PostDetail extends React.Component {
    constructor(props) {
        super(props)
        this.postDetail = this.postDetail.bind(this)
        this.authorDetail = this.authorDetail.bind(this)
    }

    postDetail(event) {
        event.preventDefault()
        console.log("Post Detail has been clicked")
    }

    authorDetail(event) {
        event.preventDefault()
        console.log("Author Detail has been clicked")
    }

    render() {
        const post = this.props.data
        return (
            <li>
                <div className="card grey lighten-2 waves-effect waves-block waves-light hoverable">
                    <div className="card-content">
                        <span className="card-title teal-text text-darken-3" onClick={this.postDetail}>
                            <strong>
                                {post.title}
                            </strong>
                        </span>
                        <p className="teal-text">
                            {post.content}
                        </p>
                    </div>
                    <div className="card-action">
                        <p>
                            {/* <a href={post.author_url} className="teal-text text-darken-5"> */}
                            <a onClick={this.authorDetail} className="teal-text text-darken-5">
                                Author : &nbsp;
                                <strong>
                                    {post.author}
                                </strong>
                            </a>
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}
export default PostList