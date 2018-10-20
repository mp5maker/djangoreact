import { Component } from 'react'
import Router from '../App/Router'
import FloatingActionButton from '../Common/FloatingActionButton'

class Content extends Component {
    render() {
        return(
            <div className="col s10 card-panel teal darken-1 hoverable overflow-y-auto height-100">
                <Router />
                <FloatingActionButton />
            </div>
        )
    }
}

export default Content;