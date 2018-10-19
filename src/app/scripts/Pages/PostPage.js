import { Component } from "react"
import { PostList, PostRetrieve } from "../Post/Post"
import SimpleForm from "../Forms/SimpleForm"

class PostListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reverseOrder: true,
        }
        this.reverseToggle = this.reverseToggle.bind(this)
    }

    reverseToggle(event) {
        event.preventDefault()
        this.setState({
            reverseOrder: !this.state.reverseOrder
        })
        console.log(this.state.reverseOrder)
    }

    render() {
        const buttonClassName = "btn darken-5 grey-text text-lighten-2 waves-light waves-effect hoverable " + (this.state.reverseOrder ? ' indigo' : ' deep-purple')
        return (
            <div>
                <div>
                    <button className={buttonClassName} onClick={this.reverseToggle}>
                        {this.state.reverseOrder ? 'Reverse' : 'Back'}
                    </button> &nbsp;
                </div>
                <PostList reverseOrder={this.state.reverseOrder}/>
            </div>
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

class PostCreatePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SimpleForm />
        )
    }
}

export { PostListPage, PostRetrievePage, PostCreatePage }