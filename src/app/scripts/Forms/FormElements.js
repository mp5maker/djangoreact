import { Component } from 'react'

class MyTextInput extends Component {
    constructor(props) {
        super(props)
        this.inputChange = this.inputChange.bind(this)
        this.inputBlur = this.inputBlur.bind(this)
        this.inputFocus = this.inputFocus.bind(this)
        this.setTextInputRef = (element) => {
            this.textInput = element
        }
        this.focusTextInput = () => {
            if (this.textInput) {
                this.textInput.focus()
            }
        }
        this.state = {
            notEmpty: this.props.inputValue.length ? true : false,
            error: {}
        }
    }

    componentDidMount() {
        if (this.props.autofocus) {
            this.focusTextInput()
        }
    }

    inputFocus(event) {
        event.preventDefault()
        document.getElementById('label-' + this.props.uniqueID).classList.add('active')
    }
    
    inputBlur(event) {
        event.preventDefault()
        if (this.state.notEmpty) {
            document.getElementById('label-' + this.props.uniqueID).classList.add('active')
        } else {
            document.getElementById('label-' + this.props.uniqueID).classList.remove('active')
        }
    }

    inputChange(event) {
        event.preventDefault()
        if (this.props.onChange) {
            this.props.onChange(event)
        }
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            notEmpty: event.target.value.length ? true : false
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.inputValue !== prevProps.inputValue) {
            this.setState({
                notEmpty:  this.props.inputValue ? true : false
            })
        }
        if (this.props.error !== prevProps.error) {
            this.setState({
                error: this.props.error
            })
        }
    }

    /**
     * rowClass, colClass, inputClass, validationClass
     * icon, type, name, inputValue, uniqueID, placeholder, label, autofocus
     * error, success, helperText
     * inputRef, inputChange, inputFocus, inputBlur
     */
    render() {
        const props = this.props
        return (
            <div className={props.rowClass ? props.rowClass : "row margin-yaxis-12"}>
                <div className={props.colClass ? props.colClass : "input-field col s6"}>
                    <i className={"material-icons prefix fa fa-" + (props.icon ? props.icon : "")}></i> 
                    <input 
                        type={props.type ? props.type : "text"}
                        ref={this.setTextInputRef}
                        onChange={this.inputChange}
                        onFocus={this.inputFocus}
                        onBlur={this.inputBlur}
                        className={props.inputClass ? props.inputClass : "white-text validate" + (this.state.error ? "invalid" : "")}
                        name={props.name ? props.name : ""}
                        defaultValue={props.inputValue ? props.inputValue : ""}
                        id={props.uniqueID ? props.uniqueID : ""}
                        placeholder={props.placeholder ? props.placeholder : ""}/>
                    <label 
                        htmlFor={props.uniqueID ? props.uniqueID : "prefix"}
                        id={"label-" + (props.uniqueID ? props.uniqueID : "")}>
                        {props.label ? props.label : ""}
                    </label>
                    <span 
                        className={props.validationClass ? props.validationClass : "helper-text white-text margin-bottom-12"}
                        data-error={this.state.error ? this.state.error : ""}
                        data-success={props.success ? props.success : ""}>
                        {props.helperText ? props.helperText : ""}
                    </span>
                </div>
            </div>
        )
    }
}

class MyTextArea extends Component {
    constructor(props) {
        super(props)
        this.inputChange = this.inputChange.bind(this)
        this.inputBlur = this.inputBlur.bind(this)
        this.inputFocus = this.inputFocus.bind(this)
        this.setTextInputRef = (element) => {
            this.textInput = element
        }
        this.focusTextInput = () => {
            if (this.textInput) {
                this.textInput.focus()
            }
        }
        this.state = {
            notEmpty: this.props.inputValue.length ? true : false,
            inputValue: this.props.inputValue ? this.props.inputValue : "" 
        }
    }

    componentDidMount() {
        if (this.props.autofocus) {
            this.focusTextInput()
        }
        M.AutoInit();
    }

    inputFocus(event) {
        event.preventDefault()
        if (this.props.onFocus) {
            this.props.onFocus(event)
        }
        document.getElementById('label-' + this.props.uniqueID).classList.add('active')
    }

    inputBlur(event) {
        event.preventDefault()
        if (this.props.onBlur) {
            this.props.onBlur(event)
        }
        if (this.state.notEmpty) {
            document.getElementById('label-' + this.props.uniqueID).classList.add('active')
        } else {
            document.getElementById('label-' + this.props.uniqueID).classList.remove('active')
        }
    }

    inputChange(event) {
        event.preventDefault()
        if (this.props.onChange) {
            this.props.onChange(event)
        }
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            notEmpty: event.target.value.length ? true : false,
            inputValue: event.target.value
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.inputValue !== prevProps.inputValue) {
            this.setState({
                notEmpty: this.props.inputValue ? true : false,
                inputValue: this.props.inputValue
            })
        }
    }

    render() {
        const props = this.props
        return (
            <div className={props.rowClass ? props.rowClass : "row margin-yaxis-12"}>
                <div className={props.colClass ? props.colClass : "input-field col s6"}>
                    <i className={"material-icons prefix fa fa-" + (props.icon ? props.icon : "")}></i> 
                    <textarea 
                        ref={this.setTextInputRef}
                        onChange={this.inputChange}
                        onFocus={this.inputFocus}
                        onBlur={this.inputBlur}
                        className={props.inputClass ? props.inputClass : "materialize-textarea white-text validate" + (props.error ? "invalid" : "")}
                        value={this.state.inputValue}
                        name={props.name ? props.name : ""}
                        id={props.uniqueID ? props.uniqueID : ""}
                        placeholder={props.placeholder ? props.placeholder : ""}>
                    </textarea>
                    <label 
                        htmlFor={props.uniqueID ? props.uniqueID : "prefix"}
                        id={"label-" + (props.uniqueID ? props.uniqueID : "")}>
                        {props.label ? props.label : ""}
                    </label>
                    <span 
                        className={props.validationClass ? props.validationClass : "helper-text white-text margin-bottom-12"}
                        data-error={props.error ? props.error : ""}
                        data-success={props.success ? props.success : ""}>
                        {props.helperText ? props.helperText : ""}
                    </span>
                </div>
            </div>
        )
    }
}

class MySubmitButton extends Component {
    constructor(props) {
        super(props)
    }
    /**
     * isSuccess, confirmationSuccessMessage, confirmationErrorMessage
     */
    render() {
        const props = this.props
        return (
            <div>
                <div className="row margin-yaxis-12">
                    <div className="col s6">
                        <input type="submit" value="Confirm" className="btn waves-effect brown lighten-2 pointer" />
                    </div>
                </div>
                <div className="row margin-yaxis-12">
                    <div className="col s6">
                        <div className={props.isSuccess ? "green-text text-darken-1" : "red-text text-darken-3"}>
                            {props.confirmationSuccessMessage ? props.confirmationSuccessMessage : props.confirmationErrorMessage}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { MyTextInput, MyTextArea, MySubmitButton }

