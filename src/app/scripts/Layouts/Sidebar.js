import { Component } from "react"
import { DjangoSidebarTitle } from "../Common/Common"

class Sidebar extends Component {
    render() {
        return (
            <div className="col s3 card-panel grey lighten-2 hoverable">
                <DjangoSidebarTitle />
            </div>
        )
    }
}

export default Sidebar