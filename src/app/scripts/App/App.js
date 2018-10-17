import { Component } from 'react'
import Sidebar from "../Layouts/Sidebar"
import Content from "../Layouts/Content"

class App extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Content />
            </div>
        )
    }
}

export default App