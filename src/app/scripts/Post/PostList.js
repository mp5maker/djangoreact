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
        const  { data, loading, error } = this.state;
        if (loading) {
            return "Loading ...."
        }
        if (error) {
            return "There was an error loading the data..."
        }
        if (data) {
            return <PostCollection collection={data}/>
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
                        <li key={i}>
                            <div className="card grey lighten-2 waves-effect waves-block waves-light hoverable">
                                <div className="card-content">
                                    <span className="card-title teal-text text-darken-3">
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
                                        <a href={post.author_url} className="teal-text text-darken-5">
                                            Author : &nbsp;
                                            <strong>
                                                {post.author}
                                            </strong>
                                        </a> 
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default PostList