import { Component } from "react"
import { PostList, PostRetrieve } from "../Post/Post"
import SimpleForm from "../Forms/SimpleForm"
import { MyTextInput, MyTextArea, MySubmitButton } from "../Forms/FormElements"
import ApiHelper from "../Factories/ApiHelper"

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

class PostUpdatePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postId: "",
            postAuthorId: 1,
            postTitle: "",
            postDescription: "",
            error: {
                postTitle: "",
                postDescription: ""
            },
            confirmationSuccessMessage: false,
            confirmationErrorMessage: false,
            isSuccess: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = this.state
        console.log(this.state)
        var sendData = {
            author: data.postAuthorId ? data.postAuthorId : "",
            title: data.postTitle ? data.postTitle : "",
            content: data.postDescription ? data.postDescription : ""
        }
        ApiHelper.updatePutPost(this.state.postId, sendData)
        .then((response) => {
            if (response) {
                this.setState({
                    confirmationSuccessMessage: "Successfully Updated",
                    confirmationErrorMessage: "",
                    error: {},
                    isSuccess: true,
                })
            }
        })
        .catch((error) => {
            const response = error.response.data
            if (response) {
                const errorList = {}
                if (response.content) {
                    errorList.postDescription = response.content[0]
                }
                if (response.title) {
                    errorList.postTitle = response.title[0]
                }
                this.setState({
                    confirmationErrorMessage: "Please, check the field errors!",
                    confirmationSuccessMessage: "",
                    error: errorList,
                    isSuccess: false,
                })
            }
        })
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        ApiHelper.getPostDetail(this.props.match.params.id)
        .then((response) => {
            console.log(response)
            const data = response.data
            if (data) {
                this.setState({
                    postId: data.id,
                    postTitle: data.title,
                    postDescription: data.content
                })
            }
        })
        .catch((error) => {
            const errorList = error.response.data
            if (errorList) {
                this.setState({
                    postTitle: errorList.title[0],
                    postDescription: errorList.content[0]
                })
            } 
        }) 
    }

    render() {
        return (
            <div>
                <div className="row card grey darken-3 margin-yaxis-12">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row margin-yaxis-12">
                            <div className="col s6">
                                <h6 className="white-text">Update Post Form</h6>
                            </div>
                        </div>
                        <MyTextInput 
                            type="text" name="postTitle"
                            uniqueID="post-title" label="Post Title"
                            onChange={this.handleChange}
                            inputValue={this.state.postTitle}
                            autofocus={true}
                            error={this.state.error.postTitle}
                            icon="user" />
                        <MyTextArea  
                            name="postDescription"
                            uniqueID="post-description" label="Post Description"
                            onChange={this.handleChange}
                            inputValue={this.state.postDescription}
                            error={this.state.error.postDescription}
                            icon="file-text-o" />
                        <MySubmitButton 
                            isSuccess={this.state.isSuccess}
                            confirmationSuccessMessage={this.state.confirmationSuccessMessage}
                            confirmationErrorMessage={this.state.confirmationErrorMessage}/>
                    </form>
                </div>
            </div>
        )
    }
}

export { PostListPage, PostRetrievePage, PostCreatePage, PostUpdatePage }