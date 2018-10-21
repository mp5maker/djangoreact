import { Component } from "react"

class SearchBar extends Component  {
    constructor(props) {
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(event) {
        if (this.props.onChange) {
            this.props.onChange(event)
        }
    }

    render() {
        return (
            <div>
                <div className="input-field margin-top-0 search-bar">
                    <i className="material-icons prefix fa fa-search search-icon"></i> 
                    <input type="text" className="search-text" placeholder="Type to Search" name="search" onChange={this.handleOnChange}/>
                </div>
            </div>
        )
    }
}

export default SearchBar