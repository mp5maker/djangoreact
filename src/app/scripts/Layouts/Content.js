import { Component } from 'react'
import Router from '../App/Router'
import FloatingActionButton from '../Common/FloatingActionButton'

class Content extends Component {
    render() {
        return(
            <div className="col s9 card-panel teal darken-1 hoverable">
                <h4 className="white-text">
                    <span>
                        Contents
                    </span>
                </h4>
                <Router />
                <FloatingActionButton />
            </div>
        )
    }
}

export default Content;