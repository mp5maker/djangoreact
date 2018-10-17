import { Component } from "react"
import { PostList, PostRetrieve } from "../Post/Post"

class PostListPage extends Component {
    render() {
        return (
            <PostList />
        )
    }
}

class PostRetrievePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <PostRetrieve detailId={this.props.match.params.id} />
        )
    }
}

export { PostListPage, PostRetrievePage }