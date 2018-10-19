import { Component } from 'react'
import ApiHelper from '../Factories/ApiHelper'

class SimpleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postAuthorId: 1,
            postTitle: "",
            postDescription: "",
            error: {},
            confirmationSuccessMessage: false,
            confirmationErrorMessage: false,
            isSuccess: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.inputPostTitleRef = React.createRef()
        this.inputPostDescriptionRef = React.createRef()
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = this.state
        var sendData = {
            author: data.postAuthorId ? data.postAuthorId : "",
            title: data.postTitle ? data.postTitle : "",
            content: data.postDescription ? data.postDescription : ""
        }
        console.log(sendData)
        ApiHelper.createPost(sendData)
        .then((response) => {
            if (response) {
                this.setState({
                    confirmationSuccessMessage: "Successfully Created",
                    confirmationErrorMessage: "",
                    postTitle: "",
                    postDescription: "",
                    error: {},
                    isSuccess: true,
                })
                this.inputPostTitleRef.current.focus()
                this.inputPostTitleRef.current.value = ""
                this.inputPostDescriptionRef.current.value = ""
            }
        })
        .catch((error) => {
            const response = Object.assign({}, error.response.data)
            if (response) {
                const errorList = {}
                if (response.content) {
                    errorList.postDescription = response.content[0]
                    this.inputPostDescriptionRef.current.focus()
                }
                if (response.title) {
                    errorList.postTitle = response.title[0]
                    this.inputPostTitleRef.current.focus()
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

    handleInputChange(event) {
        event.preventDefault()
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.state.confirmationErrorMessage !== prevState.confirmationErrorMessage) ||
            (this.state.confirmationSuccessMessage !== prevState.confirmationSuccessMessage) ||
            (this.state.error !== prevState.error) || 
            (this.state.isError !== prevState.isError)) {
            this.setState({
                confirmationErrorMessage: this.state.confirmationErrorMessage,
                confirmationSuccessMessage: this.state.confirmationSuccessMessage,
                error: this.state.error,
                isSuccess: this.state.isSuccess,
            })
        }
    }

    componentDidMount() {
        this.inputPostTitleRef.current.focus()
    }

    render() {
        const { error, confirmationErrorMessage, confirmationSuccessMessage, isSuccess} = this.state
        return (
            <div>
                <div className="row card grey darken-3 margin-yaxis-12">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row margin-yaxis-12">
                            <div className="col s6">
                                <h6 className="white-text">Create Post Form</h6>
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="input-field col s6">
                                <i className="fa fa-user material-icons prefix"></i>
                                <input  type="text" className={"validate white-text " + (error.postTitle ? "invalid" : "")}
                                        ref={this.inputPostTitleRef}  
                                        id="post-title" name="postTitle" onChange={this.handleInputChange}/>
                                <label htmlFor="post-title">Post Title</label>
                                <span className="helper-text white-text margin-bottom-12" data-error={error.postTitle}></span>
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="input-field col s6">
                                <i className="fa fa-file-text-o material-icons prefix"></i>
                                <textarea id="post-description" name="postDescription" 
                                          className={"materialize-textarea white-text " + (error.postDescription ? "invalid" : "")} 
                                          ref={this.inputPostDescriptionRef}
                                          onChange={this.handleInputChange}></textarea>
                                <label htmlFor="post-description">Post Description</label>
                                <span className="helper-text white-text margin-bottom-12" data-error={error.postDescription}></span>
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="col s6">
                                <input type="submit" value="Confirm" className="btn waves-effect brown lighten-2 pointer"/>
                            </div>
                        </div>
                        <div className="row margin-yaxis-12">
                            <div className="col s6">
                                <div className={isSuccess ? "green-text text-darken-1" : "red-text text-darken-3"}>
                                    {confirmationSuccessMessage ? confirmationSuccessMessage : confirmationErrorMessage}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SimpleForm