import { Component } from "react"

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="row margin-yaxis-24">
                    <div className="col s12 center-align">
                        <img src="img-responsive" src="/static/common/win98.png"/>
                    </div>
               </div>
            </div>
        )
    }
}

export default HomePage